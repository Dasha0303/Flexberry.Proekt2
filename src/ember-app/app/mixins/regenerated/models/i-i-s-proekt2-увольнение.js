import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаУвольнения: DS.attr('date'),
  причина: DS.attr('i-i-s-proekt2-причины'),
  сотрудники: DS.belongsTo('i-i-s-proekt2-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаУвольнения: {
    descriptionKey: 'models.i-i-s-proekt2-увольнение.validations.датаУвольнения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  причина: {
    descriptionKey: 'models.i-i-s-proekt2-увольнение.validations.причина.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt2-увольнение.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УвольнениеE', 'i-i-s-proekt2-увольнение', {
    датаУвольнения: attr('Дата увольнения', { index: 0 }),
    сотрудники: belongsTo('i-i-s-proekt2-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true }),
      должность: attr('Должность', { index: 3 }),
      ранг: attr('Ранг', { index: 4 })
    }, { index: 1, displayMemberPath: 'фИО' }),
    причина: attr('Причина', { index: 5 })
  });

  modelClass.defineProjection('УвольнениеL', 'i-i-s-proekt2-увольнение', {
    датаУвольнения: attr('Дата увольнения', { index: 0 }),
    сотрудники: belongsTo('i-i-s-proekt2-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    причина: attr('Причина', { index: 2 })
  });
};

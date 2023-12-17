import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПроведения: DS.attr('date'),
  комментарий: DS.attr('string'),
  статус: DS.attr('i-i-s-proekt2-стaтусы'),
  сотрудники: DS.belongsTo('i-i-s-proekt2-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПроведения: {
    descriptionKey: 'models.i-i-s-proekt2-оценка.validations.датаПроведения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-proekt2-оценка.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-proekt2-оценка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt2-оценка.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОценкаE', 'i-i-s-proekt2-оценка', {
    датаПроведения: attr('Дата проведения', { index: 0 }),
    сотрудники: belongsTo('i-i-s-proekt2-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true }),
      должность: attr('Должность', { index: 3 })
    }, { index: 1, displayMemberPath: 'фИО' }),
    статус: attr('Статус', { index: 4 }),
    комментарий: attr('Комментарий', { index: 5 })
  });

  modelClass.defineProjection('ОценкаL', 'i-i-s-proekt2-оценка', {
    датаПроведения: attr('Дата проведения', { index: 0 }),
    сотрудники: belongsTo('i-i-s-proekt2-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    статус: attr('Статус', { index: 2 }),
    комментарий: attr('Комментарий', { index: 3 })
  });
};

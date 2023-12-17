import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  оценка: DS.belongsTo('i-i-s-proekt2-оценка', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-proekt2-сотрудники', { inverse: null, async: false }),
  отчётОбОценке: DS.belongsTo('i-i-s-proekt2-отчёт-об-оценке', { inverse: 'оценкаИнфа', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-proekt2-оценка-инфа.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оценка: {
    descriptionKey: 'models.i-i-s-proekt2-оценка-инфа.validations.оценка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt2-оценка-инфа.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отчётОбОценке: {
    descriptionKey: 'models.i-i-s-proekt2-оценка-инфа.validations.отчётОбОценке.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОценкаИнфаE', 'i-i-s-proekt2-оценка-инфа', {
    номер: attr('Номер', { index: 0 }),
    сотрудники: belongsTo('i-i-s-proekt2-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true }),
      должность: attr('Должность', { index: 3 })
    }, { index: 1, displayMemberPath: 'фИО' }),
    оценка: belongsTo('i-i-s-proekt2-оценка', 'Оценка', {
      датаПроведения: attr('Дата проведения', { index: 5 }),
      статус: attr('Статус', { index: 6 }),
      комментарий: attr('Комментарий', { index: 7, hidden: true })
    }, { index: 4, displayMemberPath: 'комментарий' })
  });
};

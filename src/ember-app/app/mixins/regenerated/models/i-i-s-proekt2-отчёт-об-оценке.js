import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОтчёта: DS.attr('date'),
  сотрудники: DS.belongsTo('i-i-s-proekt2-сотрудники', { inverse: null, async: false }),
  оценкаИнфа: DS.hasMany('i-i-s-proekt2-оценка-инфа', { inverse: 'отчётОбОценке', async: false })
});

export let ValidationRules = {
  датаОтчёта: {
    descriptionKey: 'models.i-i-s-proekt2-отчёт-об-оценке.validations.датаОтчёта.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt2-отчёт-об-оценке.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оценкаИнфа: {
    descriptionKey: 'models.i-i-s-proekt2-отчёт-об-оценке.validations.оценкаИнфа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчётОбОценкеE', 'i-i-s-proekt2-отчёт-об-оценке', {
    датаОтчёта: attr('Дата отчёта', { index: 0 }),
    сотрудники: belongsTo('i-i-s-proekt2-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true }),
      должность: attr('Должность', { index: 3 })
    }, { index: 1, displayMemberPath: 'фИО' }),
    оценкаИнфа: hasMany('i-i-s-proekt2-оценка-инфа', 'Оценка инфа', {
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
    })
  });

  modelClass.defineProjection('ОтчётОбОценкеL', 'i-i-s-proekt2-отчёт-об-оценке', {
    датаОтчёта: attr('Дата отчёта', { index: 0 }),
    сотрудники: belongsTo('i-i-s-proekt2-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 }),
      должность: attr('Должность', { index: 2 })
    }, { index: -1, hidden: true })
  });
};

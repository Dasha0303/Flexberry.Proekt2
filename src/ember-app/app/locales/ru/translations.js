import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProekt2ОтчётОбОценкеLForm from './forms/i-i-s-proekt2-отчёт-об-оценке-l';
import IISProekt2ОценкаLForm from './forms/i-i-s-proekt2-оценка-l';
import IISProekt2СотрудникиLForm from './forms/i-i-s-proekt2-сотрудники-l';
import IISProekt2УвольнениеLForm from './forms/i-i-s-proekt2-увольнение-l';
import IISProekt2ОтчётОбОценкеEForm from './forms/i-i-s-proekt2-отчёт-об-оценке-e';
import IISProekt2ОценкаEForm from './forms/i-i-s-proekt2-оценка-e';
import IISProekt2СотрудникиEForm from './forms/i-i-s-proekt2-сотрудники-e';
import IISProekt2УвольнениеEForm from './forms/i-i-s-proekt2-увольнение-e';
import IISProekt2ОтчётОбОценкеModel from './models/i-i-s-proekt2-отчёт-об-оценке';
import IISProekt2ОценкаИнфаModel from './models/i-i-s-proekt2-оценка-инфа';
import IISProekt2ОценкаModel from './models/i-i-s-proekt2-оценка';
import IISProekt2СотрудникиModel from './models/i-i-s-proekt2-сотрудники';
import IISProekt2УвольнениеModel from './models/i-i-s-proekt2-увольнение';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt2-отчёт-об-оценке': IISProekt2ОтчётОбОценкеModel,
    'i-i-s-proekt2-оценка-инфа': IISProekt2ОценкаИнфаModel,
    'i-i-s-proekt2-оценка': IISProekt2ОценкаModel,
    'i-i-s-proekt2-сотрудники': IISProekt2СотрудникиModel,
    'i-i-s-proekt2-увольнение': IISProekt2УвольнениеModel
  },

  'application-name': 'Proekt2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proekt2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt2',
          title: 'Proekt2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        оценка: {
          caption: 'Оценка',
          title: 'Оценка',
          'i-i-s-proekt2-оценка-l': {
            caption: 'Оценка',
            title: ''
          },
          'i-i-s-proekt2-отчёт-об-оценке-l': {
            caption: 'Отчёт об оценке',
            title: ''
          }
        },
        увольнение: {
          caption: 'Увольнение',
          title: 'Увольнение',
          'i-i-s-proekt2-увольнение-l': {
            caption: 'Увольнение',
            title: ''
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-proekt2-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proekt2-отчёт-об-оценке-l': IISProekt2ОтчётОбОценкеLForm,
    'i-i-s-proekt2-оценка-l': IISProekt2ОценкаLForm,
    'i-i-s-proekt2-сотрудники-l': IISProekt2СотрудникиLForm,
    'i-i-s-proekt2-увольнение-l': IISProekt2УвольнениеLForm,
    'i-i-s-proekt2-отчёт-об-оценке-e': IISProekt2ОтчётОбОценкеEForm,
    'i-i-s-proekt2-оценка-e': IISProekt2ОценкаEForm,
    'i-i-s-proekt2-сотрудники-e': IISProekt2СотрудникиEForm,
    'i-i-s-proekt2-увольнение-e': IISProekt2УвольнениеEForm
  },

});

export default translations;

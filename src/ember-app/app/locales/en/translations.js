import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proekt2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt2',
          title: 'Proekt2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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

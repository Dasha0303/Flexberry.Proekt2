import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтчётОбОценкеMixin
} from '../mixins/regenerated/models/i-i-s-proekt2-отчёт-об-оценке';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчётОбОценкеMixin, Validations, {
});

defineProjections(Model);

export default Model;

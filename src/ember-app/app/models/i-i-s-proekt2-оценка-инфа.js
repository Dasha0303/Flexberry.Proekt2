import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОценкаИнфаMixin
} from '../mixins/regenerated/models/i-i-s-proekt2-оценка-инфа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОценкаИнфаMixin, Validations, {
});

defineProjections(Model);

export default Model;

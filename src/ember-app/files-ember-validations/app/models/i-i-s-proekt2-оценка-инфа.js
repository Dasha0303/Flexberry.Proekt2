import {
  defineNamespace,
  defineProjections,
  Model as ОценкаИнфаMixin
} from '../mixins/regenerated/models/i-i-s-proekt2-оценка-инфа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОценкаИнфаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

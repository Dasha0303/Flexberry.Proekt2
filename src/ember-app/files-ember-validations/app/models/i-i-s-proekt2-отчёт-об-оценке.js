import {
  defineNamespace,
  defineProjections,
  Model as ОтчётОбОценкеMixin
} from '../mixins/regenerated/models/i-i-s-proekt2-отчёт-об-оценке';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчётОбОценкеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

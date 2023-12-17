import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-proekt2-отчёт-об-оценке-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-proekt2-оценка-инфа+сотрудники':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'сотрудники',
            projection: 'СотрудникиL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-proekt2-оценка-инфа+оценка':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'комментарий',
            required: true,
            relationName: 'оценка',
            projection: 'ОценкаL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});

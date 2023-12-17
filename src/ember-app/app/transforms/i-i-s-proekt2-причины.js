import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПричиныEnum from '../enums/i-i-s-proekt2-причины';

export default FlexberryEnum.extend({
  enum: ПричиныEnum,
  sourceType: 'IIS.Proekt2.Причины'
});

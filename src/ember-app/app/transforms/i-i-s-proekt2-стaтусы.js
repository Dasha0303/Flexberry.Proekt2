import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтaтусыEnum from '../enums/i-i-s-proekt2-стaтусы';

export default FlexberryEnum.extend({
  enum: СтaтусыEnum,
  sourceType: 'IIS.Proekt2.Стaтусы'
});

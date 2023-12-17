import { Serializer as ОценкаИнфаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt2-оценка-инфа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОценкаИнфаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

import { Serializer as ОтчётОбОценкеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt2-отчёт-об-оценке';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтчётОбОценкеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

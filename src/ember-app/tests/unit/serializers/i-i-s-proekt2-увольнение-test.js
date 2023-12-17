import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt2-увольнение', 'Unit | Serializer | i-i-s-proekt2-увольнение', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt2-увольнение',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proekt2-причины',
    'transform:i-i-s-proekt2-стaтусы',

    'model:i-i-s-proekt2-отчёт-об-оценке',
    'model:i-i-s-proekt2-оценка-инфа',
    'model:i-i-s-proekt2-оценка',
    'model:i-i-s-proekt2-сотрудники',
    'model:i-i-s-proekt2-увольнение',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

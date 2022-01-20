import test from 'tape';
import { sizes } from '../../../src/prefabs/factories/options/index';

test('sizes builds variable option with a value', (t) => {
  const result = sizes('Sizes', { value: ['0rem', '0rem', '0rem', '0rem'] })(
    'sizes',
  );

  const expected = {
    type: 'SIZES',
    label: 'Sizes',
    key: 'sizes',
    value: ['0rem', '0rem', '0rem', '0rem'],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('sizes builds variable option with a configuration', (t) => {
  const result = sizes('Sizes', {
    value: ['0rem', '0rem', '0rem', '0rem'],
    configuration: {
      condition: {
        type: 'SHOW',
        option: 'advancedSettings',
        comparator: 'EQ',
        value: true,
      },
    },
  })('sizes');

  const expected = {
    type: 'SIZES',
    label: 'Sizes',
    key: 'sizes',
    value: ['0rem', '0rem', '0rem', '0rem'],
    configuration: {
      condition: {
        type: 'SHOW',
        option: 'advancedSettings',
        comparator: 'EQ',
        value: true,
      },
    },
  };

  t.deepEqual(result, expected);
  t.end();
});

import test from 'tape';
import { variable } from '../../../src/prefabs/factories/options/index';

test('variable builds empty variable option', (t) => {
  const result = variable('Content')('content');

  const expected = {
    type: 'VARIABLE',
    label: 'Content',
    key: 'content',
    value: [],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('variable builds variable option with a value', (t) => {
  const result = variable('Content', { value: ['some_value'] })('content');

  const expected = {
    type: 'VARIABLE',
    label: 'Content',
    key: 'content',
    value: ['some_value'],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('variable builds variable option with a configuration', (t) => {
  const result = variable('Content', {
    configuration: {
      condition: {
        type: 'SHOW',
        option: 'advancedSettings',
        comparator: 'EQ',
        value: true,
      },
    },
  })('content');

  const expected = {
    type: 'VARIABLE',
    label: 'Content',
    key: 'content',
    value: [],
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

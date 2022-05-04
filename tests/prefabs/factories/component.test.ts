import test from 'tape';
import { component, partial } from '../../../src/prefabs/factories/component';
import { variable, showIfTrue } from '../../../src/prefabs/factories/options';

test('component builds empty component', (t) => {
  const result = component('Text', {options: {}}, 'COMPONENT', []);
  const expected = {
    name: 'Text',
    options: [],
    descendants: [],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('partial builds empty partial', (t) => {
  const result = partial('PARTIAL');
  const expected = {
    type: 'PARTIAL',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('component builds an option', (t) => {
  const result = component(
    'Text',
    {
      options: {
        content: variable('Value', {
          configuration: {
            condition: showIfTrue('visibility'),
          },
        }),
      },
    },
    'COMPONENT',
    [],
  );

  const expected = {
    name: 'Text',
    options: [
      {
        key: 'content',
        label: 'Value',
        type: 'VARIABLE',
        value: [],
        configuration: {
          condition: {
            type: 'SHOW',
            option: 'visibility',
            comparator: 'EQ',
            value: true,
          },
        },
      },
    ],
    descendants: [],
  };

  t.deepEqual(result, expected);
  t.end();
});

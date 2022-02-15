import test from 'tape';
import { color } from '../../../src/prefabs/factories/options';
import { ThemeColor as Theme } from '../../../src/prefabs/types/prefabs/theme-color';

test('color builds variable option with a value', (t) => {
  const result = color('Border color (hover)', {
    value: Theme.BLACK,
  })('color');

  const expected = {
    value: 'Black',
    key: 'color',
    type: 'COLOR',
    label: 'Border color (hover)',
  };
  t.deepEqual(result, expected);
  t.end();
});

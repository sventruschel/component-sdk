import test from 'tape';
import {
  prefab,
  pagePrefab,
  partialPrefab,
} from '../../../src/prefabs/factories';
import { Icon } from '../../../src/prefabs/types/prefabs';
import { partial, component } from '../../../src/prefabs/factories/component';

test('prefab builds empty prefab', (t) => {
  const result = prefab(
    'Prefab',
    {
      category: 'FORM',
      icon: Icon.FormIcon,
    },
    () => null,
    [],
  );

  const expected = {
    name: 'Prefab',
    category: 'FORM',
    icon: 'FormIcon',
    beforeCreate: '() => null',
    structure: [],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a prefab with structure where the root is a partial', (t) => {
  const structure = partial();
  const result = pagePrefab(
    'Prefab',
    {
      category: 'FORM',
      icon: Icon.FormIcon,
      type: 'page',
    },
    () => null,
    [structure],
  );

  const expected = {
    name: 'Prefab',
    category: 'FORM',
    icon: 'FormIcon',
    type: 'page',
    beforeCreate: '() => null',
    structure: [
      {
        type: 'PARTIAL',
      },
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});
test('builds a prefab with structure where the root is a component and has a partial as descendant', (t) => {
  const structure = component('Column', { options: {} }, [partial()]);

  const result = pagePrefab(
    'Prefab',
    {
      category: 'FORM',
      icon: Icon.FormIcon,
      type: 'page',
    },
    () => null,
    [structure],
  );

  const expected = {
    name: 'Prefab',
    category: 'FORM',
    icon: 'FormIcon',
    type: 'page',
    beforeCreate: '() => null',
    structure: [
      {
        name: 'Column',
        options: [],
        descendants: [
          {
            type: 'PARTIAL',
          },
        ],
        type: 'COMPONENT',
      },
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('partial prefab succesfully builds', (t) => {
  const structure = component('Text', { options: {} }, []);
  const result = partialPrefab(
    'PartialTest',
    {
      category: 'LAYOUT',
      icon: Icon.Layout1Icon,
    },
    () => null,
    [structure],
  );
  const expected = {
    name: 'PartialTest',
    category: 'LAYOUT',
    icon: 'Layout1Icon',
    beforeCreate: '() => null',
    structure: [{ name: 'Text', options: [], descendants: [], type: 'COMPONENT' }],
  };

  t.deepEqual(result, expected);
  t.end();
});

// test('partial prefab throws when partial in structure ', (t) => {
//   // fix me
//   const structure = component('Text', { options: {} }, [partial()]);
//   const result = partialPrefab(
//     'PartialTest',
//     {
//       category: 'LAYOUT',
//       icon: Icon.Layout1Icon,
//     },
//     () => null,
//     [structure],
//   );
//   const expected = {
//     name: 'PartialTest',
//     category: 'LAYOUT',
//     icon: 'Layout1Icon',
//     beforeCreate: '() => null',
//     structure: [{ name: 'Text', options: [], descendants: [], type: 'COMPONENT' }],
//   };

//   t.deepEqual(result, expected);
//   t.end();
// });
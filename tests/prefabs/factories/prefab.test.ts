import test from 'tape';
import { prefab } from '../../../src/prefabs/factories';
import { Icon } from '../../../src/prefabs/types/prefabs';
import { partial, component } from '../../../src/prefabs/factories/component';
import { isPrefabPartial, isPrefabComponent } from '../../../src/helpers/typecheck';

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
  const structure = partial()
  const result = prefab(
    'Prefab',
    {
      category: 'FORM',
      icon: Icon.FormIcon,
    },
    () => null,
    [structure],
  );

  const expected = {
    name: 'Prefab',
    category: 'FORM',
    icon: 'FormIcon',
    beforeCreate: '() => null',
    structure: [
      {
        type: 'PARTIAL',
      }
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a prefab with structure where the root is a component and has a partial as descendant', (t) => {
  const structure = component('Column', {options: {}}, [
    partial(),
  ]);

  const result = prefab(
    'Prefab',
    {
      category: 'FORM',
      icon: Icon.FormIcon,
    },
    () => null,
    [structure],
  );

  const expected = {
    name: 'Prefab',
    category: 'FORM',
    icon: 'FormIcon',
    beforeCreate: '() => null',
    structure: [
      {
        name: 'Column',
        options: [],
        descendants: [{
          type: 'PARTIAL'
        }],
        type: 'COMPONENT',
      }
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('Builds a prefab component and can check if it is of type COMPONENT', (t) => {
  const Component = component(
    'I am a Component',
    {options: {}},
    [],
  )
  const result = prefab(
    'Prefab',
    {
      category: 'FORM',
      icon: Icon.FormIcon,
    },
    () => null,
    [Component],
  );
  const isComponent = isPrefabComponent(result.structure[0])
  
  const expected = true;

  t.deepEqual(isComponent, expected);
  t.end();
});

test('Builds a prefab component and can check if it is of type PARTIAL', (t) => {
  const Partial = partial()
  const result = prefab(
    'Prefab',
    {
      category: 'FORM',
      icon: Icon.FormIcon,
    },
    () => null,
    [Partial],
  );
  const isPartial = isPrefabPartial(result.structure[0])
  const expected = true;

  t.deepEqual(isPartial, expected);
  t.end();
});

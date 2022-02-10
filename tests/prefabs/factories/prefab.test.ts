import test from 'tape';
import { prefab } from '../../../src/prefabs/factories';
import { Icon } from '../../../src/prefabs/types/prefabs';

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

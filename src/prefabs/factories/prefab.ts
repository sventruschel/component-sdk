import { PrefabComponent } from '../types/component';
import { ComponentPrefab } from '../types/prefabs';

type Attributes = Omit<ComponentPrefab, 'name' | 'structure' | 'beforeCreate'>;

export type BeforeCreateArgs = {
  close: () => void;
  save: (prefab: ComponentPrefab) => void;
  prefab: ComponentPrefab;
  prefabs: ComponentPrefab[];
  components: {
    [name: string]: any;
  };
};

type BeforeCreate = (args: BeforeCreateArgs) => any;

export const prefab = (
  name: string,
  attr: Attributes,
  beforeCreate: BeforeCreate | undefined,
  structure: PrefabComponent[],
): ComponentPrefab => ({
  name,
  ...attr,
  beforeCreate: beforeCreate?.toString(),
  structure,
});

import { PrefabComponent } from '../types/component';
import { Prefab } from '../types/prefabs';

type Attributes = Omit<Prefab, 'name' | 'structure' | 'beforeCreate'>;

export type BeforeCreateArgs = {
  close: () => void;
  save: (prefab: Prefab) => void;
  prefab: Prefab;
  prefabs: Prefab[];
  components: {
    [name: string]: React.ComponentType<any>;
  };
};

type BeforeCreate = (args: BeforeCreateArgs) => void;

export const prefab = (
  name: string,
  attr: Attributes,
  beforeCreate: BeforeCreate | undefined,
  structure: PrefabComponent[],
): Prefab => ({
  name,
  ...attr,
  beforeCreate: beforeCreate?.toString(),
  structure,
});

import { PrefabComponent } from '../types/component';
import { PartialPrefab } from '../types/prefabs';

type Attributes = Omit<PartialPrefab, 'name' | 'structure' | 'beforeCreate'>;

export type BeforeCreateArgs = {
  close: () => void;
  save: (prefab: PartialPrefab) => void;
  prefab: PartialPrefab;
  prefabs: PartialPrefab[];
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
): PartialPrefab => ({
  name,
  ...attr,
  beforeCreate: beforeCreate?.toString(),
  structure,
});
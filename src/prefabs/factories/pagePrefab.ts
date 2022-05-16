import { PrefabReference } from '../types/component';
import { PagePrefab } from '../types/prefabs';

type Attributes = Omit<PagePrefab, 'name' | 'structure' | 'beforeCreate'>;

export type PageBeforeCreateArgs = {
  close: () => void;
  save: (prefab: PagePrefab) => void;
  prefab: PagePrefab;
  prefabs: PagePrefab[];
  components: {
    [name: string]: any;
  };
};

type BeforeCreate = (args: PageBeforeCreateArgs) => any;

export const pagePrefab = (
  name: string,
  attr: Attributes,
  beforeCreate: BeforeCreate | undefined,
  structure: PrefabReference[],
): PagePrefab => ({
  name,
  ...attr,
  beforeCreate: beforeCreate?.toString(),
  structure,
});
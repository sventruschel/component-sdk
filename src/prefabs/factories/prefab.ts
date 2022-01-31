import { PrefabComponent } from '../types/component';
import { Prefab } from '../types/prefabs';

type Attributes = Omit<Prefab, 'name' | 'structure' | 'beforeCreate'>;

type BeforeCreate = () => void

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

import { PrefabComponent } from '../types/component';
import { Prefab } from '../types/prefabs';

type Attributes = Omit<Prefab, 'name' | 'structure'>;

export const prefab = (
  name: string,
  attr: Attributes,
  structure: PrefabComponent[],
): Prefab => ({
  name,
  ...attr,
  structure,
});

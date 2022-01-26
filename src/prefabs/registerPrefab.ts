import { Prefab } from './types/prefabs';

PREFABS_REGISTRY = {};

export const registerPrefab = (prefab: Prefab) => {
  const { name } = prefab;
  if (PREFABS_REGISTRY[name]) {
    throw new Error(`a prefab "${name}" was already registered`);
  }
  PREFABS_REGISTRY[name] = prefab;
};

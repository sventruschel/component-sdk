import { Icon } from './icon';
import { PrefabAction } from '../actions';
import { PrefabComponent, PrefabReference } from '../component';
import { PrefabInteraction, PrefabVariable } from '../interactions';

export interface BasePrefab {
  name: string;
  description?: string;
  beforeCreate?: string;
  actions?: PrefabAction[];
  category: string;
  keywords?: string[];
  icon: Icon;
  interactions?: PrefabInteraction[];
  variables?: PrefabVariable[];
}

export interface ComponentPrefab extends BasePrefab {
  structure: PrefabComponent[];
}

export interface PagePrefab extends BasePrefab {
  type: 'page';
  structure: PrefabReference[];
}

export interface PartialPrefab extends BasePrefab {
  structure: PrefabComponent[];
}

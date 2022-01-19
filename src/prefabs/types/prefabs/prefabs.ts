import { Icon } from '.';
import { PrefabAction } from '../actions';
import { PrefabComponent } from '../component';
import { PrefabInteraction, PrefabVariable } from '../interactions';

export interface Prefab {
  actions?: PrefabAction[];
  beforeCreate?: string;
  category: string;
  name: string;
  keywords?: string[];
  icon: Icon;
  interactions?: PrefabInteraction[];
  structure: PrefabComponent[];
  variables?: PrefabVariable[];
  type?: string;
  description?: string;
}

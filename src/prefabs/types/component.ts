import { PrefabAction } from './actions';
import { PrefabComponentOption } from './options';

export interface PrefabComponent {
  actions?: PrefabAction[];
  descendants: PrefabComponent[];
  name: string;
  options: PrefabComponentOption[];
  ref?: {
    id: string;
  };
}

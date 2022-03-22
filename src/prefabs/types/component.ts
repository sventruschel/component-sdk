import { PrefabAction } from './actions';
import { PrefabComponentOption } from './options';
import { Hook } from './hook';

export interface PrefabComponent {
  actions?: PrefabAction[];
  descendants: PrefabComponent[];
  name: string;
  options: PrefabComponentOption[];
  $afterCreate?: Hook[];
  $afterDelete?: Hook[];
  $onUpdate?: Hook[];
  ref?: {
    id: string;
  };
}

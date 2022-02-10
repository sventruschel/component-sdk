import {
  PrefabComponentOption,
  ValueDefault,
  ValueRef,
} from '../../types/options';
import { ThemeColor } from '../../types/prefabs/theme-color';

type OptionProducer = (key: string) => PrefabComponentOption;

// typescript issue #36981
// Omit is currently desctructive to union/extended types see
// So we have to Omit each variant as a work around
type RedundantKeys = 'type' | 'key' | 'label';
type Attributes =
  | Omit<ValueDefault, RedundantKeys>
  | Omit<ValueRef, RedundantKeys>;

type ColorAttributes = Omit<Attributes, 'value'> & { value: ThemeColor }

const defaultAttributes = {
  value: [],
};

export const color = (label: string, attrs: ColorAttributes): OptionProducer => (key) => ({
    ...defaultAttributes,
    ...attrs,
    key,
    type: 'COLOR',
    label,
  });

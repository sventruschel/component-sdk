import { PartialBy } from '../../../type-utils';
import {
  PrefabComponentOption,
  ValueDefault,
  ValueRef,
} from '../../types/options';

type OptionProducer = (key: string) => PrefabComponentOption;

// typescript issue #36981
// Omit is currently desctructive to union/extended types see
// So we have to Omit each variant as a work around
type RedundantKeys = 'type' | 'key' | 'label';
export type Attributes =
  | PartialBy<Omit<ValueDefault, RedundantKeys>, 'value'>
  | Omit<ValueRef, RedundantKeys>;

const defaultAttributes = {
  value: '',
};

export const dropdown =
  (
    label: string,
    options: [string, string][],
    attrs: Attributes = {},
  ): OptionProducer =>
  (key) => ({
    ...defaultAttributes,
    ...attrs,
    key,
    type: 'CUSTOM',
    label,
    configuration: {
      as: 'DROPDOWN',
      dataType: 'string',
      allowedInput: options.map(([name, value]) => ({ name, value })),
      ...((attrs.configuration as any) || {}),
    },
  });

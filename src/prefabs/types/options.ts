export type ValueConfig = Record<string, unknown>;

export interface PrefabComponentOptionBase {
  label: string;
  key: string;
  type: string;
  configuration?: unknown;
}

export interface ValueDefault extends PrefabComponentOptionBase {
  value: boolean | string[] | string | number | ValueConfig;
}

export interface ValueRef extends PrefabComponentOptionBase {
  ref: {
    value: string | string[];
  };
}

export type PrefabComponentOption = ValueDefault | ValueRef;
export type OptionProducer = (key: string) => PrefabComponentOption;

export interface BaseConfiguration {
  condition?: {
    type: 'SHOW' | 'HIDE';
    option: string;
    comparator: 'EQ';
    value: string | boolean;
  };
}

interface VariableConfiguration extends BaseConfiguration {
  placeholder: string;
}

interface ButtonGroupConfiguration extends BaseConfiguration {
  as: 'BUTTONGROUP';
  dataType: 'string';
  allowedInput: { name: string; value: string }[];
}

interface DropdownConfiguration extends BaseConfiguration {
  as: 'DROPDOWN';
  dataType: 'string';
  allowedInput: { name: string; value: string }[];
}

export type Configuration =
  | VariableConfiguration
  | ButtonGroupConfiguration
  | DropdownConfiguration;

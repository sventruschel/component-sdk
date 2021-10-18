export type ValueConfig = Record<string, unknown>;

export interface PrefabComponentOptionBase {
  label: string;
  key: string;
  type: string;
  configuration?: unknown;
}

export interface ValueDefault extends PrefabComponentOptionBase {
  value: boolean | string[] | string | ValueConfig;
}

export interface ValueRef extends PrefabComponentOptionBase {
  ref: {
    value: string | string[];
  };
}

export type PrefabComponentOption = ValueDefault | ValueRef;

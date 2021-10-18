export type ValueConfig = Record<string, unknown>;

export interface PrefabComponentOptionBase {
  label: string;
  key: string;
  type: string;
  configuration?: unknown;
}

export interface ValueDefault {
  value: boolean | string[] | string | ValueConfig;
}

export interface ValueRef {
  ref: {
    value: string | string[];
  };
}

export type PrefabComponentOption = PrefabComponentOptionBase &
  (ValueDefault | ValueRef);

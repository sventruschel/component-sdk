export interface PrefabAction {
  name: string;
  ref: {
    id: string;
    endpointId?: string;
  };
  options?: {
    ref: {
      result: string;
    };
  };
  useNewRuntime: boolean;
  events?: PrefabActionStep[];
}

export interface PrefabActionAssign {
  leftHandSide: string;
  ref: {
    path: string[];
  };
}

export interface PrefabActionUpdateStepOption {
  ref: {
    object: string;
    customModel?: string;
  };
  assign: PrefabActionAssign[];
}

export interface PrefabActionCreateStepOption {
  modelId: string;
  assign: PrefabActionAssign[];
  ref: {
    customModel: string;
  };
}

export interface PrefabActionDeleteStepOption {
  ref: {
    object: string;
    customModel: string;
  };
}

export interface AuthenticateUserStepOption {
  authenticationProfileId: string;
  ref: {
    username: string;
    password: string;
    jwtAs: string;
  };
}

export interface PrefabActionStep {
  kind: string;
  options?:
    | PrefabActionUpdateStepOption
    | PrefabActionCreateStepOption
    | PrefabActionDeleteStepOption
    | AuthenticateUserStepOption;
}

export interface PrefabAction {
  name: string;
  ref: {
    id: string;
    endpointId?: string;
  };
  options?: {
    ref: {
      result: string;
    };
  };
  useNewRuntime: boolean;
  events?: PrefabActionStep[];
}

type Ref = {
  ref: string[];
};

export type Hook = {
  query: string;
  input: Record<string, Ref>;
};

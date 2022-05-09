type Identity<T, Args extends Array<any>> = (...args: Args) => T;
type Singleton<T> = T extends Array<any> ? T[0] : T;

type Identities<T, Args extends Array<any>> = {
  [K in keyof T]: Identity<T[K], Args>;
};
type IdentityRecords<T, Args extends Array<any>, Features> = {
  [K in keyof T]: Record<
    string,
    Features extends 'nullable'
      ? Identity<Singleton<T[K]>, Args> | null
      : Identity<Singleton<T[K]>, Args>
  >;
};

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type IdentityBy<T, K extends keyof T, ARGS extends Array<any>> = Omit<
  T,
  K
> &
  Identities<Pick<T, K>, ARGS>;

type IdentityFeatures = 'nullable' | ''

export type IdentityRecordBy<
  T,
  K extends keyof T,
  Args extends Array<any>,
  Features extends IdentityFeatures = '',
> = Omit<T, K> & IdentityRecords<Pick<T, K>, Args, Features>;

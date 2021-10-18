type Identity<T, Args extends Array<any>> = (...args: Args) => T;
type Singleton<T> = T extends Array<any> ? T[0] : T;

type Identities<T, Args extends Array<any>> = { [K in keyof T]: Identity<T[K], Args> };
type IdentityRecords<T, Args extends Array<any>> = {
  [K in keyof T]: Record<string, Identity<Singleton<T[K]>, Args>>;
};
type Singletons<T> = { [K in keyof T]: Singleton<T[K]> };

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type IdentityBy<T, K extends keyof T, ARGS extends Array<any>> = Omit<T, K> &
  Identities<Pick<T, K>, ARGS>;
export type IdentityRecordBy<T, K extends keyof T, Args extends Array<any>> = Omit<T, K> &
  IdentityRecords<Pick<T, K>, Args>;

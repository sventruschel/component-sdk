type Identity<T> = () => T
type Singleton<T> = T extends Array<any> ? T[0] : T;

type Identities<T> = { [K in keyof T]: Identity<T[K]>}
type IdentityRecords<T> = { [K in keyof T]: Record<string, Identity<Singleton<T[K]>>>}
type Singletons<T> = { [K in keyof T]: Singleton<T[K]> }

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type IdentityBy<T, K extends keyof T> = Omit<T, K> & Identities<Pick<T, K>>;
export type IdentityRecordBy<T, K extends keyof T> = Omit<T, K> & IdentityRecords<Pick<T, K>>

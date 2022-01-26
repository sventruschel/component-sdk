import { Prefab } from "./types/prefabs";

declare global {
    let PREFABS_REGISTRY: Record<string, Prefab>;
}
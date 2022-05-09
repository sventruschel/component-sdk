import { PrefabReference, PrefabComponent, PrefabPartial } from "../prefabs/types/component"

export const isPrefabPartial = (reference: PrefabReference): 
  reference is PrefabPartial => reference.type === 'PARTIAL'

export const isPrefabComponent = (reference: PrefabReference): 
reference is PrefabComponent => reference.type === 'COMPONENT'
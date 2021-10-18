import { PrefabComponent } from "../types/component"

type Attributes = Omit<PrefabComponent, 'name' | 'descendants'>

/**
 * Create a component prefab
 * 
 * @param name type name
 * @param attrs attributes
 * @param descendants children
 * @returns 
 */
export const component = (name: string, attrs: Attributes, descendants: PrefabComponent[]):PrefabComponent => {
    return {
        name,
        ...attrs,
        descendants
    }
}
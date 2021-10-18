import type { IdentityRecordBy } from "../../type-utils";
import type { PrefabComponent } from "../types/component";

type RequiredAttrs = Omit<PrefabComponent, "name" | "descendants">;
type UnresolvedAttributes = IdentityRecordBy<RequiredAttrs, 'options', [string]>;

// take attrs
// map options
// make each value identity

const resolveAttributes = (attrs: UnresolvedAttributes): RequiredAttrs => {
  const options = Object.entries(attrs.options).map(([key, option]) => option(key))

  return {
    ...attrs,
    options,
  };
};

/**
 * Create a component prefab
 *
 * @param name name of the component
 * @param attrs attributes
 * @param descendants a list of child prefab components
 * @returns
 */
export const component = (
  name: string,
  attrs: UnresolvedAttributes,
  descendants: PrefabComponent[]
): PrefabComponent => {
  return {
    name,
    ...resolveAttributes(attrs),
    descendants,
  };
};

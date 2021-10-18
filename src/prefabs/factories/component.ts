import { IdentityRecordBy } from "../../type-utils";
import { PrefabComponent } from "../types/component";

type RequiredAttrs = Omit<PrefabComponent, "name" | "descendants">;
type UnresolvedAttributes = IdentityRecordBy<RequiredAttrs, 'options'>;

// take attrs
// map options
// make each value identity

const resolveAttributes = (attrs: UnresolvedAttributes): RequiredAttrs => {
  const options = Object.entries(attrs.options).map(([key, option]) => ({
    ...option(),
    key,
  }));

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
 * 
 *    `attrs.options` is a map where each value is
 *    a function that produces an option
 * @param descendants children
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

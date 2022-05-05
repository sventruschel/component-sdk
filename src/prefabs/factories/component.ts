import type { IdentityRecordBy } from '../../type-utils';
import type { PrefabComponent, PrefabReference } from '../types/component';

type RequiredAttrs = Omit<PrefabComponent, 'name' | 'descendants'>;
type UnresolvedAttributes = IdentityRecordBy<
  RequiredAttrs,
  'options',
  [string]
>;

const resolveAttributes = (attrs: UnresolvedAttributes): RequiredAttrs => {
  const options = Object.entries(attrs.options).map(([key, option]) =>
    option(key),
  );

  return {
    ...attrs,
    options,
  };
};


/**
* Create a partial prefab
*
* @returns
*/
export const partial = () : PrefabReference => ({
    type: 'PARTIAL',
  })
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
  descendants: PrefabReference[],
): PrefabReference => ({ 
    name,
    ...resolveAttributes(attrs),
    descendants,
    type: 'COMPONENT',
  }) as PrefabReference

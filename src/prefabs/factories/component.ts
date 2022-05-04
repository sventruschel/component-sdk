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
* @param type name of the type (this should always be 'PARTIAL')
* @returns
*/
export const partial = (
  type: 'PARTIAL',
  ) : PrefabReference => ({
    type,
  })
  
  /**
   * Create a component prefab
   *
   * @param name name of the component
   * @param attrs attributes
     * @param type PARTIAL or COMPONENT
   * @param descendants a list of child prefab components
   * @returns
   */

export const component = (
  name: string,
  attrs: UnresolvedAttributes,
  type: 'PARTIAL' | 'COMPONENT',
  descendants: PrefabReference[],
): PrefabReference => ({ 
    name,
    ...resolveAttributes(attrs),
    descendants,
  }) as PrefabReference

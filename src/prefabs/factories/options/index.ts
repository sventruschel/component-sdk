import { PrefabComponentOption, PrefabComponentOptionBase, ValueDefault, ValueRef } from "../../types/options";

type OptionProducer = (key: string) => PrefabComponentOption;

// typescript issue #36981
// Omit is currently desctructive to union/extended types see 
// So we have to Omit each variant as a work around
type Attributes = Omit<ValueDefault, "type" | "key"> | Omit<ValueRef, "type" | "key">;

export const option = (type: string, attrs: Attributes): OptionProducer => {
  return (key) => ({
    ...attrs,
    key,
    type,
  });
};

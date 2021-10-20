import { PartialBy } from "../../../type-utils";
import { PrefabComponentOption, ValueDefault, ValueRef } from "../../types/options";

type OptionProducer = (key: string) => PrefabComponentOption;

// typescript issue #36981
// Omit is currently desctructive to union/extended types see 
// So we have to Omit each variant as a work around
type RedundantKeys = "type" | "key" | "label"
type Attributes = Omit<ValueDefault, RedundantKeys> | Omit<ValueRef, RedundantKeys>;

const defaultAttributes = {
  value: []
}

export const color = (label: string, attrs: Attributes): OptionProducer => {
  return (key) => ({
    ...defaultAttributes,
    ...attrs,
    key,
    type: "COLOR",
    label
  });
};

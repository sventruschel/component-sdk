import test from "tape";
import { component } from "../../../src/prefabs/factories/component";

test("component builds valid component", function (t) {
  t.deepEqual(component("Text", { options: [] }, []), {
    name: "Text",
    options: [],
    descendants: [],
  });
  t.end();
});

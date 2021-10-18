import test from "tape";
import { component } from "../../../src/prefabs/factories/component";

test("component builds valid component", function (t) {
    const result = component("Text", { options: {} }, []);
    const expected = {
        name: "Text",
        options: {},
        descendants: [],
      }

  t.deepEqual(result, expected);
  t.end();
});

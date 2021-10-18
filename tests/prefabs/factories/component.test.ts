import test from "tape";
import { component } from "../../../src/prefabs/factories/component";
import { option } from "../../../src/prefabs/factories/options/index";

test("component builds empty component", function (t) {
  const result = component("Text", { options: {} }, []);
  const expected = {
    name: "Text",
    options: [],
    descendants: [],
  };

  t.deepEqual(result, expected);
  t.end();
});

test("component builds an option", function (t) {
  const result = component(
    "Text",
    {
      options: {
        text: option("TEXT", { label: "Test Label", value: "" }),
      },
    },
    []
  );

  const expected = {
    name: "Text",
    options: [
      {
        key: "text",
        label: "Test Label",
        type: "TEXT",
        value: "",
      },
    ],
    descendants: [],
  };

  t.deepEqual(result, expected);
  t.end();
});

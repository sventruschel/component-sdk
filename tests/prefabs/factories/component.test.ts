import test from "tape";
import { component } from "../../../src/prefabs/factories/component";
import { variable, showIfTrue } from "../../../src/prefabs/factories/options";

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
        content: variable("Value", {
          configuration: {
            condition: showIfTrue("visibility"),
          },
        }),
      },
    },
    []
  );

  const expected = {
    name: "Text",
    options: [
      {
        key: "content",
        label: "Value",
        type: "VARIABLE",
        value: [],
        configuration: {
          condition: {
            type: "SHOW",
            option: "visibility",
            comparator: "EQ",
            value: true,
          },
        },
      },
    ],
    descendants: [],
  };

  t.deepEqual(result, expected);
  t.end();
});

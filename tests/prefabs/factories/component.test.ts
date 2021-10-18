import test from "tape";
import { component } from "../../../src/prefabs/factories/component";

test("component builds empty component", function (t) {
    const result = component("Text", { options: {} }, []);
    const expected = {
        name: "Text",
        options: [],
        descendants: [],
      }

  t.deepEqual(result, expected);
  t.end();
});


test("component builds an option", function (t) {
  const result = component("Text", { options: {
    text: (key: string) => ({
      key,
      label: 'test',
      type: 'TEXT',
      value: ''
    })
  } }, []);
  const expected = {
      name: "Text",
      options: [{
        key: 'text',
        label: 'test',
        type: 'TEXT',
        value: ''
      }],
      descendants: [],
    }

t.deepEqual(result, expected);
t.end();
});
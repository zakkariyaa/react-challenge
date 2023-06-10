// eslint-disable-next-line import/no-unresolved
import test from "node:test";
import assert from "node:assert/strict";
import { component, render, jsx, event, debug } from "./helpers.js";

test("Shouter component converts user input to upper case", async (t) => {
  const Shouter = await component("Shouter");
  const unmount = render(jsx(Shouter, {}));
  t.after(unmount);

  const input = document.querySelector("input");
  const output = document.querySelector("output");
  assert.ok(input, `Shouter should render an <input>, but got:\n${debug()}`);

  input.value = "hello test";
  event("change", input);
  assert.equal(
    output?.textContent,
    "HELLO TEST",
    `Expected <output>HELLO TEST</output>, but got:\n${debug()} `
  );
});

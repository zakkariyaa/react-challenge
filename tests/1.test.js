// eslint-disable-next-line import/no-unresolved
import test from "node:test";
import assert from "node:assert/strict";
import { component, render, debug, jsx } from "./helpers.js";

test("Greeting component renders based on `name` prop", async (t) => {
  const Greeting = await component("Greeting");
  const el = jsx(Greeting, { name: "oli" });
  const unmount = render(el);
  t.after(unmount);

  const p = document.querySelector("p");
  assert.match(
    p?.textContent,
    /hello oli/i,
    `<Greeting name="oli" /> should render <p>hello oli</p>, but got:\n${debug()}`
  );
});

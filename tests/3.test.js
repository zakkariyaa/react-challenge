// eslint-disable-next-line import/no-unresolved
import test from "node:test";
import assert from "node:assert/strict";
import { component, debug, jsx, render, act } from "./helpers.js";

test("MouseTracker renders current mouse coordinates", async (t) => {
  t.mock.method(window, "addEventListener");
  t.mock.method(window, "removeEventListener");

  const MouseTracker = await component("MouseTracker");
  const unmount = render(jsx(MouseTracker, {}));

  const output = document.querySelector("output");

  // Can't use `fire` here as that relies on React's `Simulate`,
  // which only works on components, not the window.
  // So we have to manually create/dispatch fake events
  let event1 = new MouseEvent("mousemove", { clientX: 150, clientY: 3 });
  act(() => window.dispatchEvent(event1));
  assert.equal(
    output?.textContent,
    "150,3",
    `Expected <output>150,3</output>, but got:\n${debug()} `
  );

  let event2 = new MouseEvent("mousemove", { clientX: 27, clientY: 14 });
  act(() => window.dispatchEvent(event2));

  let add_calls = window.addEventListener.mock.calls.length;
  let add_msg = `MouseTracker should only add 1 event listener to the window, but window.addEventListener was called ${add_calls} times`;
  assert.equal(add_calls, 1, add_msg);

  unmount();

  let event3 = new MouseEvent("mousemove", { clientX: 11, clientY: 33 });
  act(() => window.dispatchEvent(event3));
  let remove_calls = window.removeEventListener.mock.calls.length;
  let remove_msg = `The event listener should be removed after MouseTracker unmounts, but window.removeEventListener was never called. Remember to clean up effects`;
  assert.equal(remove_calls, 1, remove_msg);
});

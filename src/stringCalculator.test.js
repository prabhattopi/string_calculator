/* eslint-disable no-undef */
import { add } from "./utils/addFunction";

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself if one number is provided", () => {
  expect(add("1")).toBe(1);
});


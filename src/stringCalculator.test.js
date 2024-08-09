/* eslint-disable no-undef */
import { add } from "./utils/addFunction";

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself if one number is provided", () => {
  expect(add("1")).toBe(1);
});

test("should return the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("should return the sum of multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("should handle new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should support different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("should throw an exception for negative numbers", () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});

test("should throw an error when a negative number is present with multiple commas", () => {
  expect(() => add(",,,,2,,,,,,......-2")).toThrow(
    "Negative numbers not allowed: -2"
  );
});

test("should throw an error listing all negative numbers", () => {
  expect(() => add("//;\n1;-2;-3;4")).toThrow(
    "Negative numbers not allowed: -2, -3"
  );
});

test("should return the number itself if one number is provided, even with a trailing comma", () => {
  expect(add("2,")).toBe(2);
});

test("should return the number itself if number is provided, even with multiple comma", () => {
  expect(add("2,2,,,,,,")).toBe(4);
});

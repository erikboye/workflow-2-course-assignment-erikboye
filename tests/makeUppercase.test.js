import {
  makeUppercase,
  replaceSpaces,
  limitLength,
} from "../scripts/helpers/stringHelpers.ts";

test("makes text uppercase", () => {
  expect(makeUppercase("ErIk")).toBe("ERIK");
});

test("replaces spaces with _", () => {
  expect(replaceSpaces("hello there")).toBe("hello_there");
});

test("remove the two last letters in the word", () => {
  expect(limitLength(2, "Erik")).toBe("Er");
});

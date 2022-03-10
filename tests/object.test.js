import { createProduct } from "../scripts/helpers/objectHelpers";

test("Test the function createProduct", () => {
  expect(
    createProduct({
      id: 123,
      code: "erik boye sørensen",
      title: "trying to make this work",
    })
  ).toStrictEqual({
    id: 123,
    code: "ERIK BOYE SØRENSEN",
    title: "trying_to_ma",
  });
});

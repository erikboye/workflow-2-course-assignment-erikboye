import { createProduct } from "./helpers/objectHelpers";
import { IProduct } from "./interfaces/iProduct";
import { makeUppercase } from "./helpers/stringHelpers";

const newProduct: IProduct = createProduct({
  id: 12,
  code: "a b c",
  title: "a b c",
});

console.log(newProduct);

console.log(makeUppercase("ERIK"));

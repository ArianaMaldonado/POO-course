import { Product } from "./product";
import { Categories } from "../types";

export class ProductInv extends Product {
  prodInvQuantity: number;

  constructor(
    name: string,
    brand: string,
    category: Categories,
    presentation: string,
    price: number,
    quantity: number
  ) {
    super(name, brand, category, presentation, price);
    this.prodInvQuantity = quantity;
  }
}

import { Categories } from "../types";

export class Product {
  id: number;
  name: string;
  brand: string;
  category: Categories;
  presentation: string;
  price: number;

  constructor(
    prodName: string,
    prodBrand: string,
    prodCategory: Categories,
    prodPresentation: string,
    prodPrice: number
  ) {
    this.id = Math.floor(Math.random() * 10000);
    this.name = prodName;
    this.brand = prodBrand;
    this.category = prodCategory;
    this.presentation = prodPresentation;
    this.price = prodPrice;
  }
}

import { BasePaymentMethod } from "./basePaymentMethod";
import { ProductInv } from "./productInv";
import { AllPaymentMethods, BasePaymentMethods } from "../types";

export class Sell {
  id: number;
  date: Date;
  paymentMethod: BasePaymentMethod<AllPaymentMethods>;
  products: ProductInv[];

  constructor(
    paymentMethod: BasePaymentMethod<AllPaymentMethods>,
    products: ProductInv[]
  ) {
    this.id = Math.floor(Math.random() * 10000);
    this.date = new Date();
    this.paymentMethod = paymentMethod;
    this.products = products;
  }

  public addItem(product: ProductInv): void {
    this.products.push(product);
  }

  public removeItem(prod_id: number): void {
    this.products.filter((prod) => prod.id === prod_id);
  }

  public calculateTotal(): void {
    const initialValue = 0;
    const sumWithInitial = this.products.reduce(
      (total = 0, prod) => total + prod.price,
      initialValue
    );
    console.log("TOTAL", sumWithInitial);
  }
}

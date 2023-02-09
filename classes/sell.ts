import { BasePaymentMethod } from "./basePaymentMethod";
import { ProductInv } from "./productInv";
import { AllPaymentMethods, DiscountPaymentMethod } from "../types";

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

  public calculateTotal(paymentMethod: AllPaymentMethods): number {
    const initialValue = 0;
    let sumWithInitial = this.products.reduce(
      (total = 0, prod) => total + prod.price,
      initialValue
    );
    if (paymentMethod === DiscountPaymentMethod.CASH) {
      const totalWithDiscount = sumWithInitial * 0.85;
      sumWithInitial = sumWithInitial - totalWithDiscount;
    }
    return sumWithInitial;
  }
}

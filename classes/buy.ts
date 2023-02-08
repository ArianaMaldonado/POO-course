import { BasePaymentMethod } from "./basePaymentMethod";
import { AllPaymentMethods } from "../types";
import { ProductInv } from "./productInv";

export class Buy {
  id: number;
  paymentMethod: BasePaymentMethod<AllPaymentMethods>;
  date: Date;
  product: ProductInv[];
  id_supplier: number;

  constructor(
    buyPaymentMethod: BasePaymentMethod<AllPaymentMethods>,
    buyDate: Date,
    buyProducts: ProductInv[],
    buyId_supplier: number
  ) {
    this.id = Math.floor(Math.random() * 10000);
    this.paymentMethod = buyPaymentMethod;
    this.date = buyDate;
    this.product = buyProducts;
    this.id_supplier = buyId_supplier;
  }

  //   public calculateTotal(): number {}
}

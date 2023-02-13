import { BasePaymentMethod } from "./basePaymentMethod";
import { AllPaymentMethods, DiscountPaymentMethod } from "../types";
import { ProductInv } from "./productInv";

export class Buy {
  id: number;
  paymentMethod: BasePaymentMethod<AllPaymentMethods>;
  date: Date;
  product: ProductInv[];
  id_supplier: number;

  constructor(
    buyPaymentMethod: BasePaymentMethod<AllPaymentMethods>,
    buyProducts: ProductInv[],
    buyId_supplier: number
  ) {
    this.id = Math.floor(Math.random() * 10000);
    this.paymentMethod = buyPaymentMethod;
    this.date = new Date();
    this.product = buyProducts;
    this.id_supplier = buyId_supplier;
  }

  public calculateTotal(paymentMethod: AllPaymentMethods): number {
    const initialValue = 0;
    let sumWithInitial = this.product.reduce(
      (total = 0, prod) => total + prod.price,
      initialValue
    );
    if (paymentMethod === DiscountPaymentMethod.CASH) {
      const totalWithDiscount = sumWithInitial * 0.9;
      sumWithInitial = sumWithInitial - totalWithDiscount;
    }
    return sumWithInitial;
  }
}

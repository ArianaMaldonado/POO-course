import { BasePaymentMethod } from "./basePaymentMethod";
import { DiscountPaymentMethod, OperationType } from "../types";

export class PaymentMethodDiscount extends BasePaymentMethod<DiscountPaymentMethod> {
  constructor(_pType: DiscountPaymentMethod) {
    super(_pType);
  }

  public getDiscount(opType: OperationType) {
    if (opType === OperationType.buy) return 10;
    return 15;
  }
}

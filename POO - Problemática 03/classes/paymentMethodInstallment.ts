import { BasePaymentMethod } from "./basePaymentMethod";
import { InstallmentPayment } from "../types";

export class PaymentMethodInstallment extends BasePaymentMethod<InstallmentPayment> {
  installment: number;

  constructor(_pType: InstallmentPayment, installments: number) {
    super(_pType);
    this.installment = installments;
  }
}

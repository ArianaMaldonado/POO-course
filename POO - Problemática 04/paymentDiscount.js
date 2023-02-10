// import { PaymentMethod } from "./basePaymentMethod";
// import { DiscountPaymentMethod, OperationType } from "../types";

// export class PaymentMethodDiscount extends BasePaymentMethod<DiscountPaymentMethod> {
//   constructor(_pType: DiscountPaymentMethod) {
//     super(_pType);
//   }

//   public getDiscount(opType: OperationType) {
//     if (opType === OperationType.buy) return 10;
//     return 15;
//   }
// }

var { PaymentMethods } = require("./basePaymentMethod");

var PaymentMethodDiscount = function (type, operationType) {
  PaymentMethods.call(this, type);
  this.operationType = operationType;
};

PaymentMethodDiscount.prototype = Object.create(PaymentMethods.prototype);

PaymentMethodDiscount.prototype.getOperationType = function () {
  return this.operationType;
};

PaymentMethodDiscount.prototype.setOpType = function (opType) {
  if (opType === "COMPRA" || "VENTA") {
    return (this.operationType = opType);
  }
};

PaymentMethodDiscount.prototype.getDiscount = function (
  operationType,
  payment
) {
  if (payment === "EFECTIVO" && operationType === "VENTA") {
    return 15;
  }
  if (payment === "EFECTIVO" && operationType === "COMPRA") {
    return 10;
  }
};

PaymentMethodDiscount.prototype.module.exports = { PaymentMethodDiscount };

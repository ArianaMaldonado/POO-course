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

module.exports = { PaymentMethodDiscount };

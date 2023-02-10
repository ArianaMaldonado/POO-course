var PaymentMethods = function (type) {
  this.type = type;
};

var allPaymentMethods = [
  "DEBITO",
  "BILLETERA SANTA FE",
  "TRANSFERENCIA BANCARIA",
  "CREDITO",
  "EFECTIVO",
];
PaymentMethods.prototype.getType = function () {
  return this.type;
};

PaymentMethods.prototype.setType = function (type) {
  for (var i = 0; i < allPaymentMethods.length; i++) {
    if (type === allPaymentMethods[i]) {
      return (this.type = type);
    }
  }
};

module.exports = { PaymentMethods };

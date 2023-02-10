var { PaymentMethods } = require("./basePaymentMethod");

var PaymentInstallments = function (type, installment) {
  PaymentMethods.call(type);
  this.installment = installment;
};

module.exports = { PaymentInstallments };

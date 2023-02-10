var { Person, Employee, Supplier, Supplier } = require("./person");
var { PaymentMethods } = require("./paymentMethods");

var person = new Person("3", "Ariana", "Maldonado", "3413693000", "40780951");

var employee = new Employee(
  "3",
  "Ariana",
  "Maldonado",
  "3413693000",
  "40780951",
  "NOCHE"
);

var supplier = new Supplier(
  "3",
  "Arianin",
  "Maldonado",
  "3413693000",
  "40780951",
  "Radium Rocket",
  "radium@rocket.com",
  "notes random",
  ["producto 1: 135", "producto 2: 123"]
);

var paymentMethod = new PaymentMethods("EFECTIVO");

console.log("PERSON", person);
console.log("EMPLOYEE", employee);
console.log("SUPPLIER", supplier);
console.log("PAYMENT METHOD", paymentMethod);
console.log("GET TYPE P-METHOD", paymentMethod.getType());

var { Person, Employee, Supplier, Supplier } = require("./person");
var person = new Person("3", "Arianin", "Maldonado", "3413693000", "40780951");

console.log(person);

var employee = new Employee(
  "3",
  "Arianin",
  "Maldonado",
  "3413693000",
  "40780951",
  "NOCHE"
);

console.log(employee);

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

console.log(supplier);

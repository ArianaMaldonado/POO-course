var Person = function (id, name, lastName, phone, dni) {
  this.id = id;
  this.name = name;
  this.lastName = lastName;
  this.phone = phone;
  this.dni = dni;
};

function Employee(id, name, lastName, phone, dni, shift) {
  Person.call(this, id, name, lastName, phone, dni);
  this.shift = shift;
}

function Supplier(
  id,
  name,
  lastName,
  phone,
  dni,
  businessName,
  email,
  notes,
  priceList
) {
  Person.call(this, id, name, lastName, phone, dni);
  this.businessName = businessName;
  this.email = email;
  this.notes = notes;
  this.priceList = priceList;
}

module.exports = { Person, Supplier, Employee };

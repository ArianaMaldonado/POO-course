export class Person {
  id: number;
  name: string;
  lastName: string;
  phone: number;

  constructor(personName: string, personLastName: string, personPhone: number) {
    this.id = Math.floor(Math.random() * 10000);
    this.name = personName;
    this.lastName = personLastName;
    this.phone = personPhone;
  }
}

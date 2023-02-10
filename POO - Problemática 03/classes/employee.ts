import { Person } from "./person";
import { Shift } from "../types";

export class Employee extends Person {
  dni: number;
  shift: Shift;

  constructor(
    empName: string,
    empLastName: string,
    empPhone: number,
    empDni: number,
    empShift: Shift
  ) {
    super(empName, empLastName, empPhone);
    this.dni = empDni;
    this.shift = empShift;
  }
}

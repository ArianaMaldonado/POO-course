import { Person } from "./person";
import { Product } from "./product";

export class Supplier extends Person {
  businessName: string;
  email: string;
  notes: string;
  priceList: Product[];

  constructor(
    name: string,
    lastName: string,
    phone: number,
    supBusinessName: string,
    supEmail: string,
    supNotes: string,
    supPriceList: Product[]
  ) {
    super(name, lastName, phone);
    this.businessName = supBusinessName;
    this.email = supEmail;
    this.notes = supNotes;
    this.priceList = supPriceList;
  }
}

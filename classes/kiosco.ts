import { Inventory } from "./inventory";
import { Sell } from "./sell";
import { Buy } from "./buy";
import { Employee } from "./employee";
import { Supplier } from "./supplier";
import { ProductPurchase } from "../types";

export class Kiosco {
  id: number;
  street: string;
  streetNumber: number;
  phone: number;
  inventory: Inventory;
  balance: number;
  currentSell: Sell;
  sales: Sell[];
  purchases: Buy[];
  employees: Employee[];
  suppliers: Supplier[];

  constructor(
    kStreet: string,
    kStreetNumber: number,
    kPhone: number,
    kInventory: Inventory,
    kBalance: number,
    kCurrentSale: Sell,
    kSales: Sell[],
    kPurchases: Buy[],
    kEmployees: Employee[],
    kSuppliers: Supplier[]
  ) {
    this.id = Math.floor(Math.random() * 10000);
    this.street = kStreet;
    this.streetNumber = kStreetNumber;
    this.phone = kPhone;
    this.inventory = kInventory;
    this.balance = kBalance;
    this.currentSell = kCurrentSale;
    this.sales = kSales;
    this.purchases = kPurchases;
    this.employees = kEmployees;
    this.suppliers = kSuppliers;
  }

  //   public makePurchase(
  //     supplier: Supplier,
  //     product_info: ProductPurchase[]
  //   ): void {}

  //   public initiateSale(): void {}

  //   public makeSale(): void {}
}

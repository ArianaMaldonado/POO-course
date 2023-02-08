import { ProductInv } from "./productInv";
import { ProductPrice } from "../types";

export class Inventory {
  prodInventory: ProductInv[];

  constructor(prodInv: ProductInv[]) {
    this.prodInventory = prodInv;
  }

  public addStock(prod_id: number, quantity: number): void {
    const prodUpdate = this.prodInventory.findIndex(
      (prod) => prod.id === prod_id
    );
    this.prodInventory[prodUpdate].prodInvQuantity += quantity;
  }

  public reduceStock(prod_id: number, quantity: number): void {
    const prodUpdate = this.prodInventory.findIndex(
      (prod) => prod.id === prod_id
    );
    this.prodInventory[prodUpdate].prodInvQuantity -= quantity;
  }

  public updatePrecio(prod_info: ProductPrice[], newPrice: number): void {
    for (let i = 0; i < prod_info.length; i++) {
      const priceUpdate = this.prodInventory.findIndex(
        (prod) => prod.id === prod_info[i].prod_id
      );
      this.prodInventory[priceUpdate].price = newPrice;
    }
  }

  private checkExistences(): void {
    this.prodInventory.some((prod) => {
      if (prod.prodInvQuantity === 0) {
        console.log("No hay stock.");
      }
    });
  }

  //Debería devolver el id del producto que no tiene stock?
}

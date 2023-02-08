export enum BasePaymentMethods {
  DEBIT_CARD = "Tarjeta de débito",
  SANTA_FE_WALLET = "Billetera Santa Fe",
  WIRE_TRANSFER = "Transferencia Bancaria",
}

export enum DiscountPaymentMethod {
  CASH = "Efectivo",
}

export enum InstallmentPayment {
  CREDIT_CARD = "Tarjeta de crédito",
}

export enum Categories {
  CANDIES = "Golosinas",
  COLAS = "Gaseosas",
  ALCOHOLIC_BEVERAGES = "Bebidas alcohólicas",
  CLEANING = "Limpieza",
  CIGARETTES = "Cigarrillos",
  GROCERIES = "Comestibles",
}

export type ProductPrice = {
  prod_id: number;
  price: number;
};

export enum Shift {
  MORNING = "Mañana",
  AFTERNOON = "Tarde",
  NIGHT = "Noche",
}

export type ProductPurchase = {
  prod_id: number;
  quantity: number;
};

export enum OperationType {
  buy = "Compra",
  sell = "Venta",
}

export type AllPaymentMethods =
  | BasePaymentMethods
  | InstallmentPayment
  | DiscountPaymentMethod;

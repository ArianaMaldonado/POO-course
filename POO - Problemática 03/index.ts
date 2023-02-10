import { BasePaymentMethod } from "./classes/basePaymentMethod";
import { PaymentMethodInstallment } from "./classes/paymentMethodInstallment";
import { PaymentMethodDiscount } from "./classes/paymentMethodDiscount";
import { Product } from "./classes/product";
import { ProductInv } from "./classes/productInv";
import {
  Categories,
  BasePaymentMethods,
  InstallmentPayment,
  DiscountPaymentMethod,
  OperationType,
} from "./types";
import { Inventory } from "./classes/inventory";
import { Person } from "./classes/person";
import { Employee } from "./classes/employee";
import { Shift } from "./types";
import { Supplier } from "./classes/supplier";
import { Sell } from "./classes/sell";
import { AllPaymentMethods } from "./types";
import { Buy } from "./classes/buy";

const basePaymentMethod: BasePaymentMethod<BasePaymentMethods> =
  new BasePaymentMethod(BasePaymentMethods.WIRE_TRANSFER);
const discountPaymentMethod: PaymentMethodDiscount = new PaymentMethodDiscount(
  DiscountPaymentMethod.CASH
);
const installmentPayment: PaymentMethodInstallment =
  new PaymentMethodInstallment(InstallmentPayment.CREDIT_CARD, 3);
const product: Product = new Product(
  "Sprite",
  "Coca Cola",
  Categories.COLAS,
  "1L",
  550
);
const productInv: ProductInv = new ProductInv(
  "Jabón Floral",
  "Dove",
  Categories.CLEANING,
  "Pack x3",
  339,
  20
);
const productInv1: ProductInv = new ProductInv(
  "Desodorante",
  "Rexona",
  Categories.CLEANING,
  "200ml",
  200,
  0
);
const inventory: Inventory = new Inventory([productInv, productInv1]);
const person: Person = new Person("Ariana", "Maldonado", 3413693000);
const employee: Employee = new Employee(
  "Brian",
  "Sangermano",
  3413849393,
  39755873,
  Shift.NIGHT
);
const supplier: Supplier = new Supplier(
  "Luciano",
  "Alarcón",
  3413693636,
  "Bagley Co",
  "bagley@srl.com",
  "This is the original supplier",
  [product]
);
const sell: Sell = new Sell(
  new BasePaymentMethod(BasePaymentMethods.DEBIT_CARD),
  [productInv, productInv1]
);
const payment = new PaymentMethodDiscount(DiscountPaymentMethod.CASH);

const buy: Buy = new Buy(
  new BasePaymentMethod(BasePaymentMethods.DEBIT_CARD),
  new Date(),
  [productInv, productInv1],
  supplier.id
);

console.log("PAYMENT", basePaymentMethod);
console.log("DISCOUNT", discountPaymentMethod);
console.log("INSTALLMENT", installmentPayment);
console.log("PRODUCT", product);
console.log("PRODUCT INVENTORY", productInv);
console.log("INVENTORY", inventory);
console.log("PERSON", person);
console.log("EMPLOYEE", employee);
console.log("SUPPLIER", supplier);
console.log("SELL", sell);
console.log("BUY", buy);
console.log("DISCOUNT", payment.getDiscount(OperationType.buy));
console.log(
  "TOTAL SELL WITH DISCOUNT",
  sell.calculateTotal(DiscountPaymentMethod.CASH)
);
console.log(
  "TOTAL BUY WHIT DISCOUNT",
  buy.calculateTotal(DiscountPaymentMethod.CASH)
);

export class BasePaymentMethod<AllPaymentMethods> {
  protected _paymentType: AllPaymentMethods;

  constructor(_pType: AllPaymentMethods) {
    this._paymentType = _pType;
  }
}

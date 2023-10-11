export enum PaymentMethod {
  CREDIT_CARD = 'cc',
  PAYPAL = 'pp',
  BITCOIN = 'bc',
  DEBIT = 'db',
  CASH = 'cash',
}

export const PaymentMethodDisplay: Record<PaymentMethod, string> = {
  [PaymentMethod.CREDIT_CARD]: 'Credit Card',
  [PaymentMethod.PAYPAL]: 'PayPal',
  [PaymentMethod.BITCOIN]: 'Bitcoin',
  [PaymentMethod.DEBIT]: 'Debit Card',
  [PaymentMethod.CASH]: 'Cash'
}

export function getPaymentMethodFromString (str: string): PaymentMethod {
  switch (str) {
    case 'cc':
      return PaymentMethod.CREDIT_CARD
    case 'pp':
      return PaymentMethod.PAYPAL
    case 'bc':
      return PaymentMethod.BITCOIN
    case 'db':
      return PaymentMethod.DEBIT
    default:
      return PaymentMethod.CASH
  }
}

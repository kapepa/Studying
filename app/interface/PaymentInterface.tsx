type nameType = "paypal" | "american express" | "visa" | "mastercard";

interface PaymentInterface{
  name: nameType,
  number: string,
  date: Date,
  cvc: number,
}

export type { PaymentInterface, nameType };
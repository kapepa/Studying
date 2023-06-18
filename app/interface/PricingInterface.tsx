enum TypeEnum {
  like,
  individual,
  corporate,
}

interface PricingInterface {
  type: keyof typeof TypeEnum,
  subtitle?: string,
  price: number,
  term: string,
  capability: string[],
  detailed: string
}

export type {PricingInterface, TypeEnum};
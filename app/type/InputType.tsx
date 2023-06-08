export enum DescInputEnum {
  text, password, email
}

export type InputType = {
  label: string,
  name: string,
  placeholder: string,
  type: keyof typeof DescInputEnum,
  patterns: {
    required?: {
      value: boolean,
      message: string
    },
    minLength?: {
      value: number,
      message: string
    },
    maxLength?: {
      value: number,
      message: string
    },
    email?: {
      pattern: {
        value: RegExp,
        message: string
      }
    }
  }
}
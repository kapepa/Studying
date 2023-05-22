interface SlideInterface {
  images: string[],
  date: Date,
  title: string,
  desc: string,
  price: {
    cost: number
    discount: number,
  }
  profile: {
    job: string,
    name: string,
    avatar: string[],
  }
}

export type { SlideInterface }
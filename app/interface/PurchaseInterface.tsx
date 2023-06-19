import {CommentsInterface} from "./CommentsInterface";

interface PurchaseInterface {
  rating: { [key: number]: number },
  comments: CommentsInterface[],
  price: {
    discount: number,
    value: number,
  }
}

export type { PurchaseInterface };
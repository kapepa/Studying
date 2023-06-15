import {UserInterface} from "./UserInterface";

interface OffersInterface {
  img: string,
  term: string,
  profession: string,
  title: string,
  desc: string,
  price: number,
  discount: number,
  user?: Pick<UserInterface, "name" | "avatar">,
}

export type {OffersInterface}
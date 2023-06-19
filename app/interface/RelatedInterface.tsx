import {UserInterface} from "./UserInterface";

interface RelatedInterface {
  id: string,
  user: Pick<UserInterface, "name" | "avatar">,
  img: string,
  title: string,
  text: string,
  looked: number
}

export type { RelatedInterface };

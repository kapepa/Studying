import {UserInterface} from "./UserInterface";

interface RealInterface {
  text: string,
  user: Pick<UserInterface, "name" | "avatar">,
}

export type {RealInterface};
import {UserInterface} from "./UserInterface";

interface StudentInterface {
  user: Pick<UserInterface, "name" | "avatar">,
  text: string,
}

export type { StudentInterface };
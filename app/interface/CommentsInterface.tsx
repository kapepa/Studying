import {UserInterface} from "./UserInterface";

interface CommentsInterface {
  user: Pick<UserInterface, "name" | "avatar">;
  created_at: number,
  text: string,
}

export type { CommentsInterface };
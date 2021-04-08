export interface UserInterface {
  [key: string]: any;
  name: string;
  id: number;
}

export type UserListInterface = Array<UserInterface>;

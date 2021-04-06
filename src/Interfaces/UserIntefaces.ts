export interface UserInterface{
  [key: string]: any;
  username: String;
  id: number
}

export interface UserListInterface{
  data: Array<UserInterface>;
}
export interface UserInterface{
  [key: string]: any;
  name: String;
  id: number
}

export interface UserListInterface{
  data: Array<UserInterface>;
}
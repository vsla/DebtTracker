import { apiJsonPlaceholder } from "./api";

import { UserListInterface, UserInterface } from "Interfaces/UserIntefaces";
import { getAllDebts } from "./DebtService";
import { DebtInterface } from "Interfaces/DebInterface";

export const getAllUsers = async (): Promise<UserListInterface> => {
  try {
    const { data } = await apiJsonPlaceholder.get("users");

    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const getUsersWithDebt = async (): Promise<UserListInterface> => {
  try {
    const allUsers = await getAllUsers();
    const { data } = await getAllDebts();
    console.log(data);
    
    let usersWithDebt: number[] = [];

    data.result.map(({ idUsuario }: DebtInterface) => {
      console.log(idUsuario);
      
      if (!usersWithDebt.includes(idUsuario)) {
        usersWithDebt.push(idUsuario);
      }
    });
    console.log(usersWithDebt);
    
    return allUsers.filter(({id}:UserInterface) =>  usersWithDebt.includes(id));
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const getOneUser = async (id: String): Promise<UserInterface> => {
  try {
    const response = await apiJsonPlaceholder.get("users/" + id);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

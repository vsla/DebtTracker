import { apiJsonPlaceholder } from "./api";

import { UserListInterface, UserInterface } from "Interfaces/UserIntefaces";
import { deleteDebt, getAllDebts } from "./DebtService";
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

    let usersWithDebt: number[] = [];

    data.result.forEach(({ idUsuario }: DebtInterface) => {
      if (!usersWithDebt.includes(idUsuario)) {
        usersWithDebt.push(idUsuario);
      }
    });

    return allUsers.filter(({ id }: UserInterface) =>
      usersWithDebt.includes(id)
    );
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

export const deleteOneUser = async (
  id: number
): Promise<{ result: string }> => {
  try {
    const { data } = await getAllDebts();

    await Promise.all(
      data.result.map(async ({ idUsuario, _id }: DebtInterface) => {
        if (idUsuario === id) {
          console.log(idUsuario);
          await deleteDebt(_id);
        }
      })
    );

    return { result: "Sucesso" };
  } catch (error) {
    console.error(error);
    return error;
  }
};

import { apiProvaDev } from "./api";

import { DebtListInterface, DebtInterface } from "Interfaces/DebInterface";

export const getUserDebts = async (
  userId: number
): Promise<DebtListInterface> => {
  try {
    const { data } = await apiProvaDev.get("/divida");

    return data.result.filter(
      ({ idUsuario }: DebtInterface) => idUsuario === userId
    );
  } catch (error) {
    console.error(error);
  }
  return [];
};

import { apiProvaDev } from "./api";

import { DebtListInterface, DebtInterface } from "Interfaces/DebInterface";

export const getUserDebts = async (
  userId: string
): Promise<DebtListInterface> => {
  try {
    const {
      data: { result },
    } = await apiProvaDev.get("/divida");

    return result.filter(
      ({ idUsuario }: DebtInterface) => idUsuario === parseInt(userId, 10)
    );
  } catch (error) {
    console.error(error);
  }
  return [];
};

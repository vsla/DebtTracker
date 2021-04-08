import { apiProvaDev } from "./api";

import {
  DebtListInterface,
  DebtInterface,
  DebtFormInterface,
} from "Interfaces/DebInterface";

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
    console.warn(error);
  }
  return [];
};

export const getAllDebts = async (): Promise<{
  data: { result: Array<DebtInterface> };
}> => {
  try {
    const response = await apiProvaDev.get("/divida");
    return response;
  } catch (error) {
    console.warn(error);
    return { data: { result: [] } };
  }
};

export const createDebt = async (debt: DebtFormInterface): Promise<any> => {
  try {
    const response = await apiProvaDev.post("/divida", debt);
    return response;
  } catch (error) {
    console.warn(error);
  }
};

export const updateDebt = async (
  debt: DebtFormInterface,
  id: string
): Promise<any> => {
  try {
    const response = await apiProvaDev.patch("/divida/" + id, debt);
    return response;
  } catch (error) {
    console.warn(error);
  }
};

export const deleteDebt = async (id: string): Promise<any> => {
  try {
    const response = await apiProvaDev.delete("/divida/" + id);
    return response;
  } catch (error) {
    console.warn(error);
    return { error };
  }
};

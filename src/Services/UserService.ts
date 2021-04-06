import { apiJsonPlaceholder } from "./api";

import { UserListInterface } from "Interfaces/UserIntefaces";

export const getAllUsers = async (): Promise<UserListInterface> => {
  try {
    const response = await apiJsonPlaceholder.get("users");

    return response;
  } catch (error) {
    console.error(error);
  }
  return { data: [] };
};

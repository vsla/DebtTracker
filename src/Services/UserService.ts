import { apiJsonPlaceholder } from "./api";

import { UserListInterface, UserInterface } from "Interfaces/UserIntefaces";

export const getAllUsers = async (): Promise<UserListInterface> => {
  try {
    const response = await apiJsonPlaceholder.get("users");

    return response;
  } catch (error) {
    console.error(error);
  }
  return { data: [] };
};

export const getOneUser = async (id: String): Promise<UserInterface> => {
  try {
    const response = await apiJsonPlaceholder.get("users/" + id);

    return response.data;
  } catch (error) {
    console.error(error);
  }
  return { data: [] };
};

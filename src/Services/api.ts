import axios from "axios";

const { REACT_APP_UUID } = process.env;

export const apiProvaDev = axios.create({
  baseURL: `https://provadev.xlab.digital/api/v1/`,
  params: {
    uuid: REACT_APP_UUID,
  },
});

export const apiJsonPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

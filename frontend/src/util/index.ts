import { LoginDataType } from "../types";

export const isLoggingIn = () => !!localStorage.getItem("cat_app");
export const getLoggingData: () => LoginDataType = () => {
  const rawData = localStorage.getItem("cat_app");
  return rawData ? JSON.parse(rawData) : null;
};
export const logOut = () => {
  localStorage.getItem("cat_app") && localStorage.removeItem("cat_app");
};

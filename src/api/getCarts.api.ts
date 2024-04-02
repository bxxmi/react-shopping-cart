import { axiosInstance } from "./axiosInstance";

export default async function getCartsApi() {
  const { data } = await axiosInstance.get("/carts");
  return data;
}

import { axiosInstance } from "./axiosInstance";

export default async function getProductsApi() {
  const { data } = await axiosInstance.get("/products");
  return data;
}

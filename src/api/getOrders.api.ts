import { axiosInstance } from "./axiosInstance";

export default async function getOrdersApi() {
  const { data } = await axiosInstance.get("/orders");
  return data;
}

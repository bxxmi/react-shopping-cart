import { useQuery } from "@tanstack/react-query";

import getProductsApi from "api/getProducts.api";

export default function useGetProductsQuery() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProductsApi(),
  });
}

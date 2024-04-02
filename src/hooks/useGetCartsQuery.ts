import { useQuery } from "@tanstack/react-query";

import getCartsApi from "api/getCarts.api";

export default function useGetCartsQuery() {
  return useQuery({
    queryKey: ["carts"],
    queryFn: () => getCartsApi(),
  });
}

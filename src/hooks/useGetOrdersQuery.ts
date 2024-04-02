import { useQuery } from "@tanstack/react-query";

import getOrdersApi from "api/getOrders.api";

export default function useGetOrdersQuery() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrdersApi(),
  });
}

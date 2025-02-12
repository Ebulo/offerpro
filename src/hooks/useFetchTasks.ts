import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../services/api";
import { QueryParams } from "./useQueryParams";
import { Offer } from "@/types/Offer";

export const useFetchTasks = (params: QueryParams | null) => {
  return useQuery<Offer[]>({
    queryKey: ["tasks", params],
    queryFn: () => (params ? fetchTasks(params) : Promise.resolve([])),
    enabled: !!params, // Only fetch when params exist
  });
};

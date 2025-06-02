import { useQuery } from "@tanstack/react-query";
import { GetTodo } from "../../use-case/parent-entity/get-todo-usecase";

export const useParentEntity = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["parent-entity"],
    queryFn: () => new GetTodo().execute(),
    staleTime: 1000 * 60 * 5,
  });
  return { data, isLoading, error };
};

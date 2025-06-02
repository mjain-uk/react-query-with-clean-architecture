import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FirstDependentServices } from "../../use-case/first-dependent/first-dependent.services";

export const useFirstDependent = () => {
  const queryClient = useQueryClient();
  const { getTodoAnalytics } = new FirstDependentServices(queryClient);
  const {
    data: todoAnalytics,
    isLoading: isLoadingTodoAnalytics,
    error: errorTodoAnalytics,
  } = useQuery({
    queryKey: ["todoAnalytics"],
    queryFn: async () => await getTodoAnalytics.execute(),
    staleTime: 1000 * 60 * 5,
  });
  console.log(todoAnalytics);
  return {
    todoAnalytics,
    isLoadingTodoAnalytics,
    errorTodoAnalytics,
  };
};

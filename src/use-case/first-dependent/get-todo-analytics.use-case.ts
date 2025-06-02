import type {
  IFirstDependent,
  TodoAnalytics,
} from "../../domain/first-dependent/first-dependent";
import type { QueryClient } from "@tanstack/react-query";
import type { Todo } from "../../domain/parent-entity/parent-entity";

export class GetTodoAnalytics {
  constructor(
    private readonly firstDependentRepository: IFirstDependent,
    private readonly queryClient: QueryClient
  ) {}

  async execute(): Promise<TodoAnalytics> {
    const cachedTodo = this.queryClient?.getQueryData<Todo | undefined>([
      "parent-entity",
    ]);

    return this.firstDependentRepository.getTodoAnalytics(cachedTodo);
  }
}

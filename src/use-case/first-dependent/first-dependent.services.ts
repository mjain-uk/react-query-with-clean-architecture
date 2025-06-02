import type { QueryClient } from "@tanstack/react-query";
import { FirstDependentRepository } from "../../repository/first-dependent/first-dependent.repo";
import { GetTodoAnalytics } from "./get-todo-analytics.use-case";
import { ParentEntityRepository } from "../../repository/parent-entity/parent-entity.repo";

export class FirstDependentServices {
  private readonly repo: FirstDependentRepository;
  public getTodoAnalytics: GetTodoAnalytics;
  constructor(private readonly queryClient: QueryClient) {
    this.repo = new FirstDependentRepository(new ParentEntityRepository());
    this.getTodoAnalytics = new GetTodoAnalytics(this.repo, this.queryClient);
  }
}

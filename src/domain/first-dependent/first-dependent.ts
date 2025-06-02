import type { Todo } from "../parent-entity/parent-entity";

export interface TodoAnalytics {
  completionRate: number;
  titleLength: number;
}

export interface IFirstDependent {
  getTodoAnalytics(todo: Todo | undefined): Promise<TodoAnalytics>;
}

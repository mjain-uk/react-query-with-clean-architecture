import type {
  IFirstDependent,
  TodoAnalytics,
} from "../../domain/first-dependent/first-dependent";
import type { Todo } from "../../domain/parent-entity/parent-entity";
import type { ParentEntityRepository } from "../parent-entity/parent-entity.repo";

export class FirstDependentRepository implements IFirstDependent {
  constructor(
    private readonly parentEntityRepository: ParentEntityRepository
  ) {}

  async getTodoAnalytics(todo: Todo | undefined): Promise<TodoAnalytics> {
    if (!todo) {
      todo = await this.parentEntityRepository.getTodo1();
    }
    const completionRate = todo.completed ? 100 : 0;
    const titleLength = todo.title.length;
    return {
      completionRate,
      titleLength,
    };
  }
}

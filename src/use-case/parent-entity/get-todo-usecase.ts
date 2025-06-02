import type { Todo } from "../../domain/parent-entity/parent-entity";
import { ParentEntityRepository } from "../../repository/parent-entity/parent-entity.repo";

export class GetTodo {
    constructor(private readonly parentEntityRepository: ParentEntityRepository = new ParentEntityRepository()) {}

    async execute(): Promise<Todo> {
        return this.parentEntityRepository.getTodo1();
    }
}
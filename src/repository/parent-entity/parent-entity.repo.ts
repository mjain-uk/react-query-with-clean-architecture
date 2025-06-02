import type { IParentEntity, Todo } from "../../domain/parent-entity/parent-entity";

export class ParentEntityRepository implements IParentEntity {
    constructor() {}
  
    async getTodo1(): Promise<Todo> {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      const data = await response.json();
      console.log('Repo 1 called', data);
      return data;
    }
  }
  
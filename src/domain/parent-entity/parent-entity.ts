export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IParentEntity {
    getTodo1(): Promise<Todo>
}
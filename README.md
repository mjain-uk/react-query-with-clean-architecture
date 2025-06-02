# React Query with Clean Architecture

This project demonstrates how to integrate TanStack Query (React Query) with Clean Architecture principles in a React TypeScript application.

## Architecture Overview

### Core Layers

1. **Domain Layer**
   - Contains business entities and interfaces
   - Defines core business rules
   - Independent of external frameworks

2. **Repository Layer**
   - Implements data access logic
   - Implements domain interfaces
   - Handles API calls and data transformations

3. **Use Case Layer**
   - Contains business logic
   - Implements specific application features

4. **Presentation Layer**
   - React components and hooks
   - Uses React Query for data fetching and caching
   - Implements UI

### Key Features

- **Parent-Child Entity Relationship**
  - Parent entity (`ParentEntity`) serves as the base data source
  - Child entity (`FirstDependent`) depends on parent data
  - Child entity uses parent data to manipulate and show some other meaningful information
  - Smart caching through React Query

- **Caching Strategy**
  - Utilizes React Query's cache for parent entity data
  - Child entities can access cached parent data
  - Reduces unnecessary API calls

### Implementation Details

#### Parent Entity
```typescript
// Domain
interface IParentEntity {
    getTodo1(): Promise<Todo>
}

// Repository
class ParentEntityRepository implements IParentEntity {
    async getTodo1(): Promise<Todo> {
        // API call implementation
    }
}

// Use Case
class GetTodo {
    constructor(private readonly parentEntityRepository: ParentEntityRepository) {}
    async execute(): Promise<Todo> {
        return this.parentEntityRepository.getTodo1();
    }
}
```

#### Dependent Entity
```typescript
// Domain
interface IFirstDependent {
    getTodoAnalytics(todo: Todo | undefined): Promise<TodoAnalytics>
}

// Repository
class FirstDependentRepository implements IFirstDependent {
  constructor(
    private readonly parentEntityRepository: ParentEntityRepository
  ) {}

  async getTodoAnalytics(todo: Todo | undefined): Promise<TodoAnalytics> {
    // We provide todo through cache in use case, if not, then it can invoke the parent's get method to get data
    // We can create a base class to do this functionality without the need to repeat
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
```

### React Query Integration

The project demonstrates how to:
1. Use React Query for data fetching and caching
2. Share cached data between dependent entities
3. Maintain clean architecture while leveraging React Query's features

```typescript
// Example of using cached data in dependent entity
class GetTodoAnalytics {
    async execute(): Promise<TodoAnalytics> {
    const cachedTodo = this.queryClient?.getQueryData<Todo | undefined>([
      "parent-entity",
    ]);

    return this.firstDependentRepository.getTodoAnalytics(cachedTodo);
}
```

## Best Practices Implemented

1. **Dependency Injection**
   - Repositories are injected into use cases
   - QueryClient is injected for cache access

2. **Interface Segregation**
   - Clear interfaces for each entity
   - Separation of concerns between layers

3. **Single Responsibility**
   - Each class has a single, well-defined purpose
   - Clear separation between data access and business logic

4. **Caching Strategy**
   - Efficient use of React Query's cache
   - Smart fallback to API calls when cache is empty

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

## Testing

Open netowroks tab and you will observe a single API call to /todos for parent and child component

Suggestions for improvement:

1. **Query client provider**: Can have a single class to inject query client without the need to repeat us



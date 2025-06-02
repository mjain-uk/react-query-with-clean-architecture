import { useParentEntity } from "../queries/use-parent-entity";

export const ParentComponent = () => {
  const { data, isLoading, error } = useParentEntity();
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>Data: {data.title}</div>}
    </div>
  );
};

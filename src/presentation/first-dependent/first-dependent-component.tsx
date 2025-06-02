import { useFirstDependent } from "../queries/use-first-dependent";

export const FirstDependentComponent = () => {
  const { todoAnalytics, isLoadingTodoAnalytics, errorTodoAnalytics } =
    useFirstDependent();
  if (isLoadingTodoAnalytics) return <div>Loading...</div>;
  if (errorTodoAnalytics) return <div>Error: {errorTodoAnalytics.message}</div>;
  return (
    <div>
      <h1>First Dependent Component</h1>
      <p>Completion Rate: {todoAnalytics?.completionRate}%</p>
      <p>Title Length: {todoAnalytics?.titleLength}</p>
    </div>
  );
};

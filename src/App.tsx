import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <h1>Hello World</h1>
      </>
    </QueryClientProvider>
  );
}

export default App;

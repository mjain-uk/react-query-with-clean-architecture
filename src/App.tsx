import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ParentComponent } from "./presentation/parent-entity/parent-component";
import { FirstDependentComponent } from "./presentation/first-dependent/first-dependent-component";

const queryClient = new QueryClient();

function App() {
  const [renderParentEntity, setRenderParentEntity] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <button onClick={() => setRenderParentEntity(!renderParentEntity)}>
          {renderParentEntity ? "Render First Dependent" : "Render Parent"}
        </button>
        {renderParentEntity ? <ParentComponent /> : <FirstDependentComponent />}
      </>
    </QueryClientProvider>
  );
}

export default App;

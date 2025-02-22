import { Toaster } from "sonner";

import AppRouter from "@routes/AppRouter";

function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <AppRouter />
    </>
  );
}

export default App;

import React from "react";
import AppRouter from "./components/router";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <ToastProvider>
      <AppRouter />
    </ToastProvider>
  );
}

export default App;

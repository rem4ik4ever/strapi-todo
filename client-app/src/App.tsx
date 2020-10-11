import React from "react";
import AppRouter from "./components/router";
import { ToastProvider } from "react-toast-notifications";
import { AuthContextProvider } from "context/AuthContext";

function App() {
  return (
    <ToastProvider>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </ToastProvider>
  );
}

export default App;

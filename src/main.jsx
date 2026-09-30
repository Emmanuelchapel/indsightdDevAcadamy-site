import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { ModalProvider } from "/context/ModalContext.jsx";
import { FromProvider } from "./context/FormContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <FromProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </FromProvider>
    </ToastProvider>
  </StrictMode>,
);

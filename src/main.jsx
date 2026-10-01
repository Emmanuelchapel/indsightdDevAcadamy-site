import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { ModalProvider } from "./context/modalContext.jsx";
import { FromProvider } from "./context/FormContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
       <ToastProvider>
      <FromProvider>
          <App/>
      </FromProvider>
    </ToastProvider>
    </ModalProvider>
  </StrictMode>,
);

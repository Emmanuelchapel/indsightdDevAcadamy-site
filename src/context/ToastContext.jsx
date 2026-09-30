import { createContext, useCallback, useContext, useState,} from "react";
import Toast from "../ui/Toast";


const ToastContext = createContext(undefined);

export const ToastProvider = ({ children }) => {
    // Keep the complete toast lifecycle in one place for every route.
    const [toast, setToast] = useState(null);

    // Replace the current toast so callers do not manage visibility separately.
    const showToast = useCallback((message, type) => {
        setToast({ message, type });
    }, [setToast]);

    const hideToast = useCallback(() => {
        setToast(null);
    }, [setToast]);

    return (
        <ToastContext.Provider value={{ showToast, hideToast }}>
            {children}
            {toast ? (
                <Toast message={toast.message} type={toast.type} onClose={hideToast} />
            ) : null}
        </ToastContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error("useToast must be used inside a ToastProvider");
    }

    return context;
};

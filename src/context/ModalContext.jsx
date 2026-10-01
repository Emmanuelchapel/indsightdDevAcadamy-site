import { useContext, createContext, useMemo, useState } from "react";

const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }) => {
  const [openModals, setOpenModals] = useState(new Set());

  const value = useMemo(
    () => ({
      isModalOpen: (modal) => openModals.has(modal),
      openModal: (modal) => {
        setOpenModals((current) => new Set(current).add(modal));
      },
       closeModal: (modal) => {
        setOpenModals((current) => {
          const next = new Set(current);
          next.delete(modal);
          return next;
        });
      },
    }),
    [openModals],
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used inside ModalProvider");
  }

  return context;
};


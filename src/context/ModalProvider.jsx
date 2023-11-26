/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const modalContext = createContext();

function ModalProvider({ children }) {
  const [modalState, setModalState] = useState({});
  return (
    <modalContext.Provider value={{ modalState, setModalState }}>
      {children}
    </modalContext.Provider>
  );
}

function useModal() {
  const modal = useContext(modalContext);
  return modal;
}

export { useModal, ModalProvider };

import { useModal } from "../context/ModalProvider";
import styles from "./Button.module.css";
/* eslint-disable react/prop-types */
function Button({ children, type }) {
  const { setModalState } = useModal();
  return (
    <button
      className={styles.btn}
      onClick={() => {
        setModalState({
          modal: "open",
          type: type,
        });
      }}
    >
      {children}
    </button>
  );
}

export default Button;

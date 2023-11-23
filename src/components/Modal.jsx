import styles from "./Modal.module.css";
import { useModal } from "../context/ModalProvider";
import TodoModal from "./TodoModal";
import { useTask } from "../context/TaskProvider";

// eslint-disable-next-line react/prop-types
function Modal() {
  const { setModalState, modalState } = useModal();
  const { dispatch, editTaskData } = useTask();
  const openModal = modalState.modal === "open";

  return (
    <div className={openModal ? styles.modal : ""}>
      {openModal && (
        <TodoModal
          modalState={modalState}
          setModalState={setModalState}
          editTaskData={editTaskData}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

export default Modal;

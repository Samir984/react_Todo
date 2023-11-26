import styles from "./Modal.module.css";
import { useModal } from "../context/ModalProvider";
import TodoModal from "./TodoModal";
import { useTask } from "../context/TaskProvider";

// eslint-disable-next-line react/prop-types
function Modal() {
  const { setModalState, modalState } = useModal();
  const { dispatch, editId, tasks } = useTask();
  const openModal = modalState.modal === "open";

  const taskToEdit =
    editId === null ? null : tasks.filter((task) => task.id === editId)[0];
  return (
    <div className={openModal ? styles.modal : ""}>
      {openModal && (
        <TodoModal
          modalState={modalState}
          setModalState={setModalState}
          taskToEdit={taskToEdit}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

export default Modal;

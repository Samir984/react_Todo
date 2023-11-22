/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import styles from "./TodoModal.module.css";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { Dateformat } from "../utils/dateFormat";

function TodoModal({ modalState, setModalState, editTaskData, dispatch }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: modalState.type === "editForm" ? editTaskData : {},
  });

  function onSubmit(data) {
    if (modalState.type === "addForm") {
      data = Dateformat(data);
      dispatch({ type: "addTask", payload: data });
    } else {
      if (
        editTaskData.title !== data.title ||
        editTaskData.status !== data.status
      ) {
        editTaskData = Dateformat(data, modalState.type);

        dispatch({ type: "editTask", payload: editTaskData });
      }
    }
    reset();
    setModalState("close");
  }
  return (
    <div className={styles.add_task}>
      <div className={styles._}>
        <div
          className={styles.close_add_task}
          onClick={() => {
            setModalState({ modal: "close", type: null, editId: null });
          }}
        >
          <RxCross1 size={24} />
        </div>
      </div>
      <h1 className={styles.heading}>
        {modalState.type === "addForm" ? "Add Task" : "Edit Task"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.taskadd_form}>
        <div>
          <label className={styles.form_label} htmlFor="title">
            Task Title :
          </label>
          <input
            type="text"
            id="task"
            className={styles.task_input}
            placeholder="Task Title"
            {...register("title", {
              required: "This field is required",
            })}
          />
        </div>

        <div>
          <label className={styles.form_label} htmlFor="status">
            Status :
          </label>
          <select {...register("status")} defaultValue="incomplete">
            <option value="incomplete">Incompleted</option>
            <option value="completed">completed</option>
          </select>
        </div>

        <div>
          <Button type={modalState.type}>
            {modalState.type === "addForm" ? "Add Task" : "Edit Task"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TodoModal;

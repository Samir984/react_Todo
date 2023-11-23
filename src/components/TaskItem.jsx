import styles from "./TaskItem.module.css";
import { MdOutlineDeleteOutline } from "react-icons/md";

import { FiEdit } from "react-icons/fi";
import { useTask } from "../context/TaskProvider";
import { useModal } from "../context/ModalProvider";
import { useState } from "react";

/* eslint-disable react/prop-types */
function TaskItem({ task }) {
  const [checked, setChecked] = useState(
    task.status === "completed" ? true : false
  );
  const { setModalState } = useModal();
  const { dispatch, setEditEnable } = useTask();
  function handleChecked() {
    dispatch({ type: "CheckToggle", payload: task.id });
    setChecked((prev) => !prev);
  }
  return (
    <li
      className={`${styles.task_item}
    ${checked ? styles.completed : ""}
    `}
    >
      <div>
        <input type="checkbox" checked={checked} onChange={handleChecked} />
      </div>
      <div className={styles.task_content}>
        <div
          className={`${styles.task_title}
        ${checked ? styles.checked : ""}
        `}
        >
          {task.title}
        </div>
        <div className={styles.task_extrainfo}>
          <span>{task.date[1]} &nbsp;</span>
          <span>
            {task.date[0]}&nbsp;
            {task.date[2]}
          </span>
        </div>
      </div>
      <div className={styles.btnpair}>
        <button
          className={styles.edit}
          onClick={() => {
            setModalState({ modal: "open", type: "editForm", editId: task.id });
            setEditEnable(task.id);
          }}
        >
          <FiEdit size={24} />
        </button>
        <button
          className={styles.delete}
          onClick={() => dispatch({ type: "deleteTask", payload: task.id })}
        >
          <MdOutlineDeleteOutline size={24} />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;

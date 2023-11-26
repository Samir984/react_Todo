import { useTask } from "../context/TaskProvider";
import styles from "./TaskList.module.css";
import TaskItem from "./TaskItem";
import NoTask from "./NoTask";

function TaskList() {
  const { tasks } = useTask();

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      {tasks.length === 0 && <NoTask />}
    </ul>
  );
}

export default TaskList;

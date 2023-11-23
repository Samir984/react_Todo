import { useTask } from "../context/TaskProvider";
import styles from "./TaskList.module.css";
import TaskItem from "./TaskItem";
import NoTask from "./NoTask";

function TaskList() {
  const { filterTasks } = useTask();

  return (
    <ul className={styles.list}>
      {filterTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      {filterTasks.length === 0 && <NoTask />}
    </ul>
  );
}

export default TaskList;

import { useTask } from "../context/TaskProvider";

const style = {
  fontSize: "1.6rem",
  textAlign: "center",
  fontWeight: "bold",
  textTransform: "upperCase",
  color: "white",
};

function NoTask() {
  const { filterType, totalTodos } = useTask();

  return (
    <div style={style}>
      {filterType === "completed" && totalTodos !== 0
        ? "no task are completed till now"
        : filterType === "incomplete" && totalTodos !== 0
        ? "all task are completed"
        : "no task in shedule"}
    </div>
  );
}

export default NoTask;

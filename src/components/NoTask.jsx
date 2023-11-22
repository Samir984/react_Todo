import { useTask } from "../context/TaskProvider";

const style = {
  fontSize: "1.6rem",
  textAlign: "center",
  fontWeight: "bold",
  textTransform: "upperCase",
  color: "white",
};

function NoTask() {
  const { filter } = useTask();

  return (
    <div style={style}>
      {filter === "completed"
        ? "no task are completed till now"
        : filter === "incomplete"
        ? "all task are completed"
        : "no task in shedule"}
    </div>
  );
}

export default NoTask;

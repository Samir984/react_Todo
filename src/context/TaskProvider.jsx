/* eslint-disable react/prop-types */
// import { useContext } from "react"

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

function reducer(state, action) {
  switch (action.type) {
    case "addTask":
      return { ...state, toDo: [...state.toDo, action.payload] };

    case "deleteTask":
      return {
        ...state,
        toDo: state.toDo.filter((task) => task.id !== action.payload),
      };

    case "CheckToggle":
      return {
        ...state,
        toDo: state.toDo.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                status:
                  task.status === "completed" ? "incomplete" : "completed",
              }
            : { ...task }
        ),
      };

    case "editTask": {
      const editedTask = state.toDo.map((task) =>
        task.id === action.payload.id
          ? { ...action.payload, id: Date.now() }
          : task
      );

      return { ...state, toDo: [...editedTask] };
    }

    default:
      throw new Error("no action found");
  }
}
const KEY = "getTodoLocally";

const TaskContext = createContext();
function TaskProvider({ children }) {
  const [store, setStore] = useState(() => {
    const storeItem = localStorage.getItem(KEY);
    console.log("d");
    return storeItem ? JSON.parse(storeItem) : { toDo: [] };
  });

  console.log("t");
  const [{ toDo }, dispatch] = useReducer(reducer, store);

  useEffect(() => {
    const store = { toDo: toDo };
    console.log("sss");
    localStorage.setItem(KEY, JSON.stringify(store));
  }, [setStore, toDo]);

  const [editEnable, setEditEnable] = useState(null);
  const [filter, setFilter] = useState("all");

  let editTaskData = toDo.find((task) => task.id === editEnable);
  const showFilter =
    filter === "all" ? toDo : toDo.filter((task) => task.status === filter);

  return (
    <TaskContext.Provider
      value={{
        filterTasks: showFilter,
        dispatch,
        setEditEnable,
        editEnable,
        setFilter,
        filter,
        editTaskData,
        totalTodos: toDo.length,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const task = useContext(TaskContext);
  return task;
}

export default TaskProvider;

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
      return {
        ...state,
        toDo: [...state.toDo, action.payload],
        editId: null,
      };

    case "deleteTask":
      return {
        ...state,
        toDo: state.toDo.filter((task) => task.id !== action.payload),
        editId: null,
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
        editId: null,
      };

    case "editEnable": {
      return { ...state, editId: action.payload };
    }
    case "filterType":
      return { ...state, filterType: action.payload };

    case "updateTask": {
      return {
        ...state,
        toDo: state.toDo.map((task) =>
          task.id === state.editId ? action.payload : task
        ),
        editId: null,
      };
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
    return storeItem ? JSON.parse(storeItem) : { toDo: [], editId: null,filterType:'all' };
  });

  const [{ toDo, filterType, editId }, dispatch] = useReducer(reducer, store);

  useEffect(() => {
    const store = { toDo: toDo,filterType:'all',editId:null };
    localStorage.setItem(KEY, JSON.stringify(store));
  }, [setStore, toDo]);

  const showFilter =
    filterType === "all"
      ? toDo
      : toDo.filter((task) => task.status === filterType);

  return (
    <TaskContext.Provider
      value={{
        tasks: showFilter,
        dispatch,
        editId,
        totalTodos: toDo.length,
        filterType
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTask() {
  const task = useContext(TaskContext);
  return task;
}

export default TaskProvider;

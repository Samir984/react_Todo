import { useState } from "react";
import { useTask } from "../context/TaskProvider";
import Button from "./Button";

import styles from "./UserNav.module.css";

// eslint-disable-next-line react/prop-types
function UserNav() {
  const [select, setSelect] = useState("all");
  const { dispatch } = useTask();
  function handleSelect(e) {
    setSelect(() => e.target.value);
    dispatch({ type: "filterType", payload: e.target.value });
  }

  return (
    <div className={styles.nav}>
      <Button type="addForm">Add Task</Button>
      <select
        name="filter"
        value={select}
        className={`${styles.filter}`}
        onChange={handleSelect}
      >
        <option value="all">All</option>
        <option value="incomplete">Incompleted</option>
        <option value="completed">Complete</option>
      </select>
    </div>
  );
}

export default UserNav;

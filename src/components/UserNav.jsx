import { useState } from "react";
import { useTask } from "../context/TaskProvider";
import Button from "./Button";

import styles from "./UserNav.module.css";

// eslint-disable-next-line react/prop-types
function UserNav() {
  const [select, setSelect] = useState("all");
  const { setFilter } = useTask();
  function handleSelect(e) {
    setSelect(() => e.target.value);
    setFilter(e.target.value);
    // if (event === "all") {
    // const event = e.target.value;
    //   dispatch({
    //     type: `all`,
    //   });

    // } else {
    //   dispatch({
    //     type: `only${event[0].toUpperCase() + event.slice(1).toLowerCase()}`,
    //   });
    // }
  }

  return (
    <div className={styles.nav}>
      <Button type="addForm">Add Task</Button>
      <select
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

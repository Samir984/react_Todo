import { useState } from "react";
import styles from "./Header.module.css";
import { FaSun } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";

function Header() {
  const [theme, setTheme] = useState("light");

  const handelThemeChange = function () {
    const bodyEl = document.body;
    if (bodyEl.className === "light") {
      bodyEl.classList.remove("light");
      bodyEl.classList.add("dark");
      setTheme("dark");
    } else {
      bodyEl.classList.add("light");
      bodyEl.classList.remove("dark");
      setTheme("light");
    }
  };
  return (
    <div className={styles.header}>
      <div>
        <span>TODO</span>
      </div>
      <div>
        <button className={styles.theme} onClick={handelThemeChange}>
          {theme === "light" ? (
            <FaSun size={24} color="white" />
          ) : (
            <IoMoonOutline size={24} color="white" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;

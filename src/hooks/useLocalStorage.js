import { useEffect, useState } from "react";

export function useLocalStorage(KEY, initailValue) {
  const [storeValue, setStoredValue] = useState(() => {
    const storeItem = localStorage.getItem(KEY);
   
    return storeItem ? JSON.parse(storeItem) : { toDo: initailValue };
  });
  

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(storeValue));
  }, [KEY, storeValue]);

  return [storeValue, setStoredValue];
}

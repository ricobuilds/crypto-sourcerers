import { Dispatch, SetStateAction, useEffect, useState } from "react";
export const useDarkMode = (): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(localStorage.theme);

  const valueTheme: string = value === "dark" ? "light" : "dark";

  // const toggle = () => setValue(!value);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(valueTheme);
    root.classList.add(value);
    localStorage.setItem("theme", value);
  }, [value, valueTheme]);

  return [value, setValue];
};

import { useCallback, useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState("dark");
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  function themeToggler() {
    theme === "light" ? setMode("dark") : setMode("light");
  }

  const getInitialTheme = useCallback(() => {
    const isReturningUser = "dark" in localStorage;
    const savedTheme = localStorage.getItem("theme");
    const preferDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedTheme;
    } else if (preferDark) {
      return "dark";
    } else {
      return "light";
    }
  }, []);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode(getInitialTheme());
    setMountedComponent(true);
  }, [getInitialTheme]);

  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return [theme, themeToggler, mountedComponent];
}

export default useDarkMode;

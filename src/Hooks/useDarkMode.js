import React, { useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    if (!darkMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };
  return {
      darkMode,
      changeMode,
  };
};

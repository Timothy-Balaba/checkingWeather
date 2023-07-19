import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [color, setColor] = useState('Navy');

  const setTheme = (newColor) => {
    setColor(newColor);
  };

  return (
    <ThemeContext.Provider value={{ color, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };

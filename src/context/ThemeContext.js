import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const switchTheme = () => {
    theme === 'light-theme' ? setTheme('') : setTheme('light-theme');
  };

  const value = { theme, switchTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

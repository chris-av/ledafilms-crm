import { createContext, useContext, ReactNode, useState } from 'react';



type ThemeContextType = {
  theme: string | undefined;
  toggleTheme: (theme: "dark" | "light") => void;
}


const appContextDefaultValue = {
  theme: 'light',
  toggleTheme: (theme: "dark" | "light") => {}
}


export const ThemeContext = createContext<ThemeContextType>(appContextDefaultValue);


export const useThemeContext = () => {
  return useContext(ThemeContext);
}


export default function({ children } : { children: ReactNode }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (theme: "dark" | "light") => {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}


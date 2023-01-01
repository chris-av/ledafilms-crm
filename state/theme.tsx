import { createContext, useContext, ReactNode, useState } from 'react';



type ThemeContextType = {
  theme: "light" | "dark" | undefined;
  toggleTheme: () => void;
}


const appContextDefaultValue : ThemeContextType = {
  theme: "light",
  toggleTheme: () => {}
}


export const ThemeContext = createContext<ThemeContextType>(appContextDefaultValue);


export const useThemeContext = () => {
  return useContext(ThemeContext);
}


export default function({ children } : { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeContextType["theme"]>("light");

  const toggleTheme = () => {
    setTheme((prev : ThemeContextType["theme"]) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "light";
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}


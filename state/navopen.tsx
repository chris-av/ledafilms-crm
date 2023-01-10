import { createContext, useContext, ReactNode, useState } from 'react';



type NavContextType = {
  open: boolean;
  toggleOpen: () => void;
}


const appContextDefaultValue : NavContextType = {
  open: true,
  toggleOpen: () => {},
}


export const NavContext = createContext<NavContextType>(appContextDefaultValue);


export const useNavContext = () => {
  return useContext(NavContext);
}


export default function({ children } : { children: ReactNode }) {
  const [open, setOpen] = useState<NavContextType["open"]>(true);

  const toggleOpen = () => {
    setOpen((prev : NavContextType["open"]) => !prev);
  }

  return (
    <NavContext.Provider value={{ open, toggleOpen }}>
      { children }
    </NavContext.Provider>
  )
}



import { createContext } from 'react';
 
const DEFAULT_THEME = 'atlanta';
 
export const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  setTheme: (name: string) => {}
});

export default ThemeContext;

import React, { useContext } from 'react';
import ThemeContext from '../../themes/themeContext';
import './themeSelector.scss';

const THEMES = ['atlanta', 'serious', 'monokai', 'dracula'];

const ThemeSelector = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='themeSelector'>
      ✎ Choose Theme
      {THEMES.map((themeName) => (
        <button 
          key={themeName}
          onClick={() => setTheme(themeName)}
          className={`theme ${theme === themeName ? 'active' : ''}`}
        >
          {themeName}
        </button>
      ))}
    </div>
  )};

export default ThemeSelector;

import React from 'react';
import './header.css'

interface HeaderProps {
  title: string;
}
const Header = ({title} : HeaderProps) => 
<header>
  <h1 className='headerTitle'>{title}</h1>
</header>

export default Header;

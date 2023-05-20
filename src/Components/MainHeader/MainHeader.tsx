import React from 'react';
import { MainHeaderStyle, TitleHeader } from './MainHeaderStyled';

interface IMainHeaderProps {
}

const MainHeader: React.FC= () => {
  return(<MainHeaderStyle><TitleHeader>Mimos da Marcia</TitleHeader></MainHeaderStyle>)
}

export default MainHeader;

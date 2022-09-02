import React, { FC } from 'react';
import { HeaderPropsType } from './type';
import { Menu } from '../Menu';
import { MenuOffset, HeaderRoot } from './style';

export const Header: FC<React.PropsWithChildren<HeaderPropsType>> = () => (
    <HeaderRoot>
        <MenuOffset />
        <Menu />
    </HeaderRoot>
);

export default Header;

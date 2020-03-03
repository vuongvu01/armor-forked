import React, { FunctionComponent } from 'react';

import { DrawerContainer } from './style';

import { Props } from './type';

export const Drawer: FunctionComponent<Props> = ({ children }) => {
    return (
        <DrawerContainer>
            I am a demo Drawer!
            {children}
        </DrawerContainer>
    );
};

import React, { FunctionComponent } from 'react';

import { ButtonContainer } from './style';

import { Props } from './type';

export const Button: FunctionComponent<Props> = ({ children }) => {
    console.log('check');
    return <ButtonContainer>{children}</ButtonContainer>;
};

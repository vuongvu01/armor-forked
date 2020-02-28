import React, { FunctionComponent } from 'react';

import { ButtonContainer } from './style';

import { Props } from './type';

export const Button: FunctionComponent<Props> = ({ children }) => {
    return <ButtonContainer>{children}</ButtonContainer>;
};

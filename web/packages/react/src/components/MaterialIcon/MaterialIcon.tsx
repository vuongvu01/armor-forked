import React, { FunctionComponent } from 'react';
import { useTheme } from '../../styling';
import { MaterialIconRoot } from './style';
import { MaterialIconPropsType } from './type';

export const MaterialIcon: FunctionComponent<MaterialIconPropsType> = ({
    fontSize = 'inherit',
    ...restProps
}) => {
    const theme = useTheme();

    return (
        <MaterialIconRoot theme={theme} fontSize={fontSize} {...restProps} />
    );
};

import React, { FunctionComponent } from 'react';
import { useTheme } from '../../styling';
import { MaterialIconRoot } from './style';
import { MaterialIconPropsType } from './type';

/**
 * @deprecated
 * Use SVG icons instead
 */
export const MaterialIcon: FunctionComponent<MaterialIconPropsType> = ({
    fontSize = 'inherit',
    icon,
    children,
    ...restProps
}) => {
    const theme = useTheme();

    return (
        <MaterialIconRoot theme={theme} fontSize={fontSize} {...restProps}>
            {icon || children}
        </MaterialIconRoot>
    );
};

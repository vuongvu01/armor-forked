import React, { FunctionComponent } from 'react';
import { useTheme } from '../../themes';

import { ButtonRoot } from './style';
import { PropsButton } from './type';
import { useClassName } from '../../utils/hooks';
import { useStylesOverrideButton, useAttributesOverrideButton } from './utils';

const classPrefix = 'Button';

export const Button: FunctionComponent<PropsButton> = ({
    className,
    classNames,
    styles,
    attributes,
    primary,
    secondary,
    link,
    ...restProps
}) => {
    const theme = useTheme();
    const classNameRoot = useClassName(classPrefix, className, classNames);
    const stylesSafe = useStylesOverrideButton(styles);
    const attributesSafe = useAttributesOverrideButton(attributes);

    return (
        <ButtonRoot
            primary={primary}
            secondary={secondary}
            link={link}
            {...restProps}
            {...attributesSafe.root}
            theme={theme}
            className={classNameRoot}
            styles={stylesSafe.root}
        />
    );
};

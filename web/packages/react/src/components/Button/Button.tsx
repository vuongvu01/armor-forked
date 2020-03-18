import React, { FunctionComponent } from 'react';
import { useClassName, useObject } from '../../utils/hooks';
import { useTheme } from '../../themes';

import { ButtonRoot } from './style';
import { PropsButtonType } from './type';
import { useStylesOverrideButton } from './utils';

const classPrefix = 'Button';

export const Button: FunctionComponent<PropsButtonType> = ({
    className,
    classNames,
    styles,
    attributes,
    ...restProps
}) => {
    const theme = useTheme();
    const classNameRoot = useClassName(classPrefix, className, classNames);
    const stylesSafe = useStylesOverrideButton(styles);
    const attributesSafe = useObject(attributes);

    return (
        <ButtonRoot
            {...restProps}
            {...attributesSafe.root}
            theme={theme}
            className={classNameRoot}
            styles={stylesSafe.root}
        />
    );
};

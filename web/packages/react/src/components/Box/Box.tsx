import React, { FunctionComponent } from 'react';
import { useTheme } from '../../styling';
import { useClassName, useObject } from '../../utils/hooks';

import { BoxRoot } from './style';

import { BoxPropsType } from './type';
import { useStyleOverrideBox } from './utils';

const CLASS_PREFIX = 'Box';

export const Box: FunctionComponent<BoxPropsType> = ({
    className,
    classNames,
    styles,
    attributes,
    ...restProps
}) => {
    const theme = useTheme();
    const classNameRoot = useClassName(CLASS_PREFIX, className, classNames);
    const stylesSafe = useStyleOverrideBox(styles);
    const attributesSafe = useObject(attributes);

    return (
        <BoxRoot
            {...restProps}
            {...attributesSafe.root}
            theme={theme}
            className={classNameRoot}
            styles={stylesSafe.Root}
        />
    );
};

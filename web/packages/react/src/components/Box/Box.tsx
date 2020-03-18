import React, { FunctionComponent } from 'react';
import { useTheme } from '../../themes';
import { useClassName, useObject } from '../../utils/hooks';

import { BoxRoot } from './style';

import { PropsBoxType } from './type';
import { useStyleOverrideBox } from './utils';

const classPrefix = 'Box';

export const Box: FunctionComponent<PropsBoxType> = ({
    className,
    classNames,
    styles,
    attributes,
    ...restProps
}) => {
    const theme = useTheme();
    const classNameRoot = useClassName(classPrefix, className, classNames);
    const stylesSafe = useStyleOverrideBox(styles);
    const attributesSafe = useObject(attributes);

    return (
        <BoxRoot
            {...restProps}
            {...attributesSafe.root}
            theme={theme}
            className={classNameRoot}
            styles={stylesSafe.root}
        />
    );
};

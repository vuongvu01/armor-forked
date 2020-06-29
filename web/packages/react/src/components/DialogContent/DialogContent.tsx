import React, { FunctionComponent } from 'react';

import { useTheme } from 'src/styling';
import { useThemeOverride } from 'src/utils/hooks';
import {
    useDialogContentClassName,
    useDialogContentStylesOverride,
} from './utils';
import { DialogContentRoot } from './style';
import { DialogContentPropsType } from './type';
import { dialogContentDefaultTheme } from './theme';

const CLASS_PREFIX = 'DialogContent';

export const DialogContent: FunctionComponent<DialogContentPropsType> = ({
    className,
    classNames,
    styles,
    children,
    ...restProps
}) => {
    const theme = useTheme();
    useThemeOverride(CLASS_PREFIX, theme, dialogContentDefaultTheme);

    const classNameRoot = useDialogContentClassName(
        CLASS_PREFIX,
        className,
        classNames,
    );
    const stylesOverride = useDialogContentStylesOverride(styles);

    return (
        <DialogContentRoot
            theme={theme}
            {...restProps}
            className={classNameRoot}
            styles={stylesOverride.Root}
        >
            {children}
        </DialogContentRoot>
    );
};

/** Support of prop-types is here for project that don't use TypeScript */
DialogContent.propTypes = {};

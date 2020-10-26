import React, { FunctionComponent } from 'react';

import { useComponentTheme } from '../../utils/hooks';
import {
    useDialogContentClassName,
    useDialogContentStylesOverride,
} from './utils';
import { DialogContentRoot } from './style';
import { DialogContentPropsType } from './type';
import { dialogContentDefaultTheme } from './theme';
import { DIALOG_CONTENT_CLASS_PREFIX } from './constants';

const CLASS_PREFIX = 'DialogContent';

export const DialogContent: FunctionComponent<DialogContentPropsType> = ({
    className,
    classNames,
    styles,
    children,
    ...restProps
}) => {
    const theme = useComponentTheme(
        DIALOG_CONTENT_CLASS_PREFIX,
        dialogContentDefaultTheme,
    );

    const classNameRoot = useDialogContentClassName(
        CLASS_PREFIX,
        className,
        classNames,
    );
    const stylesOverride = useDialogContentStylesOverride(styles);

    return (
        <DialogContentRoot
            {...restProps}
            theme={theme}
            className={classNameRoot}
            styles={stylesOverride.Root}
        >
            {children}
        </DialogContentRoot>
    );
};

DialogContent.defaultProps = {
    enableVerticalScroll: true,
};

/** Support of prop-types is here for project that don't use TypeScript */
DialogContent.propTypes = {};

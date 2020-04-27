import React, { FunctionComponent } from 'react';
// import PropTypes from 'prop-types';
import { useTheme } from '../../styling';

import {
    useDialogContentClassName,
    useDialogContentStylesOverride,
} from './utils';
import { DialogContentRoot } from './style';
import { DialogContentPropsType } from './type';

const CLASS_PREFIX = 'DialogContent';

export const DialogContent: FunctionComponent<DialogContentPropsType> = ({
    className,
    classNames,
    styles,
    children,
    ...restProps
}) => {
    const theme = useTheme();
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

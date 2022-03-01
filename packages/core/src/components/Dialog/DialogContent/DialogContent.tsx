import React, { FunctionComponent } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useDialogContentClassName } from './utils/useDialogContentClassName';
import { DialogContentRoot } from './style';
import { DialogContentPropsType } from './type';
import { DIALOG_CONTENT_CLASS_PREFIX } from './constants';

const CLASS_PREFIX = 'DialogContent';

/**
 * @armor-docs-component
 */
export const DialogContent: FunctionComponent<DialogContentPropsType> = ({
    className,
    children,
    ...restProps
}) => {
    const theme = useComponentTheme(DIALOG_CONTENT_CLASS_PREFIX);

    const classNameRoot = useDialogContentClassName(CLASS_PREFIX, className);

    return (
        <DialogContentRoot
            {...restProps}
            theme={theme}
            className={classNameRoot}
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

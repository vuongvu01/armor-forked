import React, { FC } from 'react';

import { useDialogContentClassName } from './utils/useDialogContentClassName';
import { DialogContentRoot } from './style';
import { DialogContentPropsType } from './type';

const CLASS_PREFIX = 'DialogContent';

/**
 * @armor-docs-component
 */
export const DialogContent: FC<DialogContentPropsType> = ({
    className,
    children,
    ...restProps
}) => {
    const classNameRoot = useDialogContentClassName(CLASS_PREFIX, className);

    return (
        <DialogContentRoot {...restProps} className={classNameRoot}>
            {children}
        </DialogContentRoot>
    );
};

DialogContent.defaultProps = {
    enableVerticalScroll: true,
};

/** Support of prop-types is here for project that don't use TypeScript */
DialogContent.propTypes = {};

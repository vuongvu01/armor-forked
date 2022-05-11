import React, { FC, memo } from 'react';

import { useDialogContentClassName } from './utils/useDialogContentClassName';
import { DialogContentRoot } from './style';
import { DialogContentPropsType } from './type';
import { DIALOG_CONTENT_CLASS_PREFIX as CLASS_PREFIX } from './constants';

/**
 * # COMPONENT
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/451847-dialog/b/09d7b1)
 *
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

export const MemoizedDialogContent = memo(DialogContent);

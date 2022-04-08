import React, { FC } from 'react';

import { useDialogActionsClassName } from './utils/useDialogActionsClassName';
import { DialogActionsRoot } from './style';
import { DialogActionsPropsType } from './type';

const CLASS_PREFIX = 'DialogActions';

/**
 * @armor-docs-component
 */
export const DialogActions: FC<DialogActionsPropsType> = ({
    className,
    ...restProps
}) => {
    const classNameRoot = useDialogActionsClassName(CLASS_PREFIX, className);

    return <DialogActionsRoot {...restProps} className={classNameRoot} />;
};

DialogActions.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
DialogActions.propTypes = {};

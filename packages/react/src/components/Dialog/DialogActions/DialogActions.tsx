import React, { FunctionComponent } from 'react';

import { useComponentTheme } from '../../../utils/hooks';
import { useDialogActionsClassName } from './utils/useDialogActionsClassName';
import { DialogActionsRoot } from './style';
import { DialogActionsPropsType } from './type';
import { dialogActionsDefaultTheme } from './theme';
import { DIALOG_ACTIONS_CLASS_PREFIX } from './constants';

const CLASS_PREFIX = 'DialogActions';

export const DialogActions: FunctionComponent<DialogActionsPropsType> = ({
    className,
    ...restProps
}) => {
    const theme = useComponentTheme(
        DIALOG_ACTIONS_CLASS_PREFIX,
        dialogActionsDefaultTheme,
    );

    const classNameRoot = useDialogActionsClassName(CLASS_PREFIX, className);

    return (
        <DialogActionsRoot
            {...restProps}
            theme={theme}
            className={classNameRoot}
        />
    );
};

DialogActions.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
DialogActions.propTypes = {};
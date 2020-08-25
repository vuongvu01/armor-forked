import React, { FunctionComponent } from 'react';

import { useTheme } from '../../styling';
import { useThemeOverride } from '../../utils/hooks';
import {
    useDialogActionsClassName,
    useDialogActionsStylesOverride,
} from './utils';
import { DialogActionsRoot } from './style';
import { DialogActionsPropsType } from './type';
import { dialogActionsDefaultTheme } from './theme';

const CLASS_PREFIX = 'DialogActions';

export const DialogActions: FunctionComponent<DialogActionsPropsType> = ({
    className,
    classNames,
    styles,
    ...restProps
}) => {
    const theme = useTheme();
    useThemeOverride(CLASS_PREFIX, theme, dialogActionsDefaultTheme);

    const classNameRoot = useDialogActionsClassName(
        CLASS_PREFIX,
        className,
        classNames,
    );
    const stylesOverride = useDialogActionsStylesOverride(styles);

    return (
        <DialogActionsRoot
            theme={theme}
            {...restProps}
            className={classNameRoot}
            styles={stylesOverride.Root}
        />
    );
};

DialogActions.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
DialogActions.propTypes = {};

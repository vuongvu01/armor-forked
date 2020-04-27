import React, { FunctionComponent } from 'react';
// import PropTypes from 'prop-types';
import { useTheme } from '../../styling';

import {
    useDialogActionsClassName,
    useStylesOverrideDialogActions,
} from './utils';
import { DialogActionsRoot } from './style';
import { DialogActionsPropsType } from './type';

const CLASS_PREFIX = 'DialogActions';

export const DialogActions: FunctionComponent<DialogActionsPropsType> = ({
    className,
    classNames,
    styles,
    ...restProps
}) => {
    const theme = useTheme();
    const classNameRoot = useDialogActionsClassName(
        CLASS_PREFIX,
        className,
        classNames,
    );
    const stylesOverride = useStylesOverrideDialogActions(styles);

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

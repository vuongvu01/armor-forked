import React, { forwardRef, memo } from 'react';

import PropTypes from 'prop-types';
import { useClearButton, useClearButtonClassNames } from './hooks';
import { ClearButtonRoot } from './style';
import { ClearButtonPropsType } from './type';
import {
    CLEAR_BUTTON_CLASS_PREFIX,
    CLEAR_BUTTON_DEFAULT_STATE,
    CLEAR_BUTTON_DEFAULT_TYPE,
    CLEAR_BUTTON_DEFAULT_SIZE,
} from './constants';
import { warnWhenTypeAndIconSizeAreNotSupported } from './util';

/**
 * # ClearButton
 *
 * @internal
 *
 */
export const ClearButton = forwardRef<HTMLButtonElement, ClearButtonPropsType>(
    function ClearButton({ className, ...props }, ref) {
        const { rootProps, iconProps, Icon, type, state, iconSize, size } =
            useClearButton<HTMLButtonElement>(props, ref);

        const classNames = useClearButtonClassNames(
            CLEAR_BUTTON_CLASS_PREFIX,
            className,
            type,
            state,
            iconSize,
            size,
        );

        return (
            <ClearButtonRoot
                {...rootProps}
                type="button"
                className={classNames.Root}
            >
                <Icon {...iconProps} className={classNames.Icon} />
            </ClearButtonRoot>
        );
    },
);

ClearButton.defaultProps = {
    type: CLEAR_BUTTON_DEFAULT_TYPE,
    state: CLEAR_BUTTON_DEFAULT_STATE,
    size: CLEAR_BUTTON_DEFAULT_SIZE,
};

ClearButton.propTypes = {
    type: PropTypes.oneOf(['circle-filled', 'thin']),
    state: PropTypes.oneOf(['enabled', 'hover', 'pressed', 'disabled']),
    iconSize: warnWhenTypeAndIconSizeAreNotSupported,
    size: PropTypes.oneOf(['medium', 'large']),
};

ClearButton.displayName = CLEAR_BUTTON_CLASS_PREFIX;

export const MemoizedClearButton = memo(ClearButton);

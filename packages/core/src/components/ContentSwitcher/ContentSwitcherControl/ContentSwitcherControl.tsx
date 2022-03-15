import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useContentSwitcherControlClassNames } from './hooks/useContentSwitcherControlClassNames';
import { useContentSwitcherControl } from './hooks/useContentSwitcherControl';
import { ContentSwitcherControlRoot } from './style';
import { ContentSwitcherControlPropsType } from './type';
import {
    ContentSwitcherControlRootTestId,
    SWITCH_CONTROL_CLASS_PREFIX,
} from './constants';

/**
 * @armor-docs-component
 */
export const ContentSwitcherControl = forwardRef<
    HTMLButtonElement,
    ContentSwitcherControlPropsType
>(function Switch({ className, children, ...restProps }, ref) {
    const classNames = useContentSwitcherControlClassNames(
        SWITCH_CONTROL_CLASS_PREFIX,
        className,
    );
    const { rootProps } = useContentSwitcherControl<HTMLButtonElement>(
        restProps,
        ref,
    );

    return (
        <ContentSwitcherControlRoot
            {...rootProps}
            className={classNames.Root}
            data-testid={ContentSwitcherControlRootTestId}
        >
            {children}
        </ContentSwitcherControlRoot>
    );
});

ContentSwitcherControl.propTypes = {
    /** String value that will be passed as argument in
     * callback function upon switch change */
    switchName: PropTypes.string.isRequired,
    /** Reserved - Sets a flag on switch as selected */
    selected: PropTypes.bool,
    /** Reserved - Sets the flag on the next switch that comes after selected switch */
    afterSelected: PropTypes.bool,
};

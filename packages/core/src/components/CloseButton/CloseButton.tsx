import React, { forwardRef } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { CloseButtonEffectivePropsType } from './type';
import { useCloseButtonClassName } from './hooks/useCloseButtonClassName';
import { CLOSE_BUTTON_CLASS_PREFIX } from './constants';
import { CloseButtonIcon, CloseButtonRoot } from './style';

/**
 * @armor-docs-component
 */
export const CloseButton = forwardRef<
    HTMLDivElement,
    CloseButtonEffectivePropsType
>(function CloseButton({ className, ...restProps }, ref) {
    const classNameComponents = useCloseButtonClassName(
        CLOSE_BUTTON_CLASS_PREFIX,
        className,
    );
    const theme = useComponentTheme(CLOSE_BUTTON_CLASS_PREFIX);

    return (
        <CloseButtonRoot
            {...restProps}
            ref={ref}
            className={classNameComponents.Root}
            theme={theme}
        >
            <CloseButtonIcon
                className={classNameComponents.Icon}
                theme={theme}
            />
        </CloseButtonRoot>
    );
});

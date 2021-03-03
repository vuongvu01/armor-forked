import React, { forwardRef, FunctionComponent } from 'react';

import { CloseButtonEffectivePropsType } from './type';
import { useComponentTheme } from '../../utils/hooks';
import { useCloseButtonClassName } from './utils/useCloseButtonClassName';
import { CLOSE_BUTTON_CLASS_PREFIX } from './constants';
import { CloseButtonIcon, CloseButtonRoot } from './style';

export const CloseButton: FunctionComponent<CloseButtonEffectivePropsType> = forwardRef(
    function CloseButton({ className, ...restProps }, ref) {
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
                <CloseButtonIcon theme={theme} />
            </CloseButtonRoot>
        );
    },
);

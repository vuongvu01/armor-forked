import React, { forwardRef, memo } from 'react';

import { CloseButtonEffectivePropsType } from './type';
import { useCloseButtonClassName } from './hooks/useCloseButtonClassName';
import { CLOSE_BUTTON_CLASS_PREFIX } from './constants';
import { CloseButtonIcon, CloseButtonRoot } from './style';

/**
 * # CloseButton
 *
 * # 🚨🚨🚨 Important: this functionality is internal! It can be changed without prior notice and without backward compatibility support. Please don't use it in the code of your own project.
 *
 * @internal
 * @armor-docs-component
 */
export const CloseButton = memo(
    forwardRef<HTMLDivElement, CloseButtonEffectivePropsType>(
        function CloseButton({ className, ...restProps }, ref) {
            const classNameComponents = useCloseButtonClassName(
                CLOSE_BUTTON_CLASS_PREFIX,
                className,
            );

            return (
                <CloseButtonRoot
                    {...restProps}
                    ref={ref}
                    className={classNameComponents.Root}
                    tabIndex={0}
                >
                    <CloseButtonIcon className={classNameComponents.Icon} />
                </CloseButtonRoot>
            );
        },
    ),
);

CloseButton.displayName = CLOSE_BUTTON_CLASS_PREFIX;

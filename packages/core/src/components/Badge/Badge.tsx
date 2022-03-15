import React, { forwardRef } from 'react';

import { BadgePropsType } from './type';
import { BadgeRoot } from './style';
import { useBadgeClassName } from './utils';
import { BADGE_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const Badge = forwardRef<HTMLDivElement, BadgePropsType>(function Badge(
    { className, children, ...restProps },
    ref,
) {
    const classOverride = useBadgeClassName(BADGE_CLASS_PREFIX, className);

    return (
        <BadgeRoot {...restProps} className={classOverride.Root} ref={ref}>
            {children}
        </BadgeRoot>
    );
});

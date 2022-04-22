import React, { forwardRef, memo } from 'react';

import { BadgePropsType } from './type';
import { BadgeRoot } from './style';
import { useBadgeClassName } from './hooks/useBadgeClassName';
import { BADGE_CLASS_PREFIX } from './constants';

/**
 * # Badge
 *
 * Mostly used in tabs to display the number of items needing user's attention.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/166a81-badge/b/282244)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Badge } from '@deliveryhero/armor';
 *
 * <Badge>This is a badge</Badge>
 * ```
 * ***
 *
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

export const MemoizedBadge = memo(Badge);

import React, { forwardRef, FunctionComponent } from 'react';

import { BadgePropsType } from './type';
import { BadgeRoot } from './style';
import { useBadgeClassName } from './utils';
import { BADGE_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../utils/hooks';

export const Badge: FunctionComponent<BadgePropsType> = forwardRef(
    function Badge({ className, children, ...restProps }, ref) {
        const theme = useComponentTheme(BADGE_CLASS_PREFIX);

        const classOverride = useBadgeClassName(BADGE_CLASS_PREFIX, className);

        return (
            <BadgeRoot
                {...restProps}
                className={classOverride.Root}
                theme={theme}
                ref={ref}
            >
                {children}
            </BadgeRoot>
        );
    },
);

import { useCallback, MouseEvent } from 'react';
import { HeaderNavigationLinkHookPropsType } from '../type';
import { getWindow } from '../../../../../system/util/globals';

export const useHeaderNavigationLink = ({
    headerNavigationLinksContext,
    name,
    onClick,
    to,
    href,
    isActive,
    ...restProps
}: HeaderNavigationLinkHookPropsType) => {
    const {
        onLinkClick,
        locationTracking,
        pathname,
    } = headerNavigationLinksContext;

    const handleLinkClick = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            if (onClick) {
                onClick(event);
                if (event.isPropagationStopped()) {
                    return;
                }
            }

            if (onLinkClick && name) {
                onLinkClick(name);
            }
        },
        [onClick, onLinkClick, name],
    );

    const url = to || href;
    let isReallyActive = false;
    if (isActive !== undefined) {
        isReallyActive = isActive;
    } else if (locationTracking && url) {
        const win = getWindow();
        let currentPathname = pathname;
        if (currentPathname === undefined && win) {
            currentPathname = win.location.pathname;
        }
        if (currentPathname) {
            isReallyActive = currentPathname.startsWith(url);
        }
    }

    return {
        isActive: isReallyActive,
        onClick: handleLinkClick,
        restRootProps: {
            to,
            href,
            ...restProps,
        },
    };
};
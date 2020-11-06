import { useCallback, MouseEvent } from 'react';
import { HeaderNavigationLinkPropsType } from '../type';

export const useHeaderNavigationLink = ({
    headerNavigationLinksContext,
    name,
    onClick,
    to,
    href,
    isActive,
    ...restProps
}: HeaderNavigationLinkPropsType) => {
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
        let currentPathname = pathname;
        if (currentPathname === undefined && window) {
            currentPathname = window.location.pathname;
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

import { useMemo } from 'react';
import {
    HeaderNavigationLinksContextType,
    HeaderNavigationLinksPropsType,
} from '../type';

export const useHeaderNavigationLinks = ({
    onLinkClick,
    locationTracking,
    pathname,
    ...restProps
}: HeaderNavigationLinksPropsType) => {
    const headerNavigationLinksContextValue = useMemo<
        HeaderNavigationLinksContextType
    >(() => ({ onLinkClick, locationTracking, pathname }), [
        onLinkClick,
        locationTracking,
        pathname,
    ]);

    return {
        result: {
            headerNavigationLinksContextValue,
        },
        restProps,
    };
};

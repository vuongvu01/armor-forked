import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type HeaderNavigationLinksEffectivePropsType = Partial<{
    onLinkClick: (linkName: string) => void;
    locationTracking: boolean;
    pathname: string;
}> &
    HTMLAttributes<HTMLDivElement> &
    MarginPropsType;

export type HeaderNavigationLinksPropsType = HeaderNavigationLinksEffectivePropsType;

export type HeaderNavigationLinksRootPropsType = HeaderNavigationLinksPropsType &
    ComponentElementStylePropsType;

export type HeaderNavigationLinksContextType = Pick<
    HeaderNavigationLinksEffectivePropsType,
    'onLinkClick' | 'locationTracking' | 'pathname'
>;

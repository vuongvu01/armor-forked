import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';
import { ComponentElementStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type HeaderNavigationLinksEffectivePropsType = Indexed<{
    onLinkClick?: (linkName: string) => void;
    locationTracking?: boolean;
    pathname?: string;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationLinksPropsType = HeaderNavigationLinksEffectivePropsType;

export type HeaderNavigationLinksRootPropsType = HeaderNavigationLinksPropsType &
    ComponentElementStylePropsType;

export type HeaderNavigationLinksContextType = Indexed<
    Pick<
        HeaderNavigationLinksEffectivePropsType,
        'onLinkClick' | 'locationTracking' | 'pathname'
    >
>;

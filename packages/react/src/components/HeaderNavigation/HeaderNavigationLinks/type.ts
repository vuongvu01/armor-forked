import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';
import { ClassNamesType, NodeStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
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
    NodeStylePropsType<HeaderNavigationLinksPropsType>;

export type HeaderNavigationLinksContextType = Indexed<
    Pick<
        HeaderNavigationLinksEffectivePropsType,
        'onLinkClick' | 'locationTracking' | 'pathname'
    >
>;

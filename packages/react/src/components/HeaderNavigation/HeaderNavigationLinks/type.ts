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
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationLinksPropsType = HeaderNavigationLinksEffectivePropsType;

export type HeaderNavigationLinksRootPropsType = HeaderNavigationLinksPropsType &
    NodeStylePropsType<HeaderNavigationLinksPropsType>;

export type HeaderNavigationLinksContextType = Indexed<{
    onLinkClick?: (linkName: string) => void;
}>;

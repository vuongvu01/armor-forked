import { HTMLAttributes } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';

type PageNavigationEffectivePropsType = Indexed<{
    itemCount?: number;
    pageNumber?: number;
    pageSize?: number;
    displayRange?: number;
    onPageSelect?: (pageNumber: number) => void;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* PageNavigation component prop type */
export type PageNavigationPropsType = PageNavigationEffectivePropsType &
    StylePropsType<{
        Root?: string;
        PageButton?: string;
        // add custom className for other nodes here
    }>;

/* PageNavigation Root node prop type */
export type PageNavigationRootPropsType = PropsWithNodeStylePropsType<
    PageNavigationEffectivePropsType
>;

/* PageNavigation Button node prop type */
export type PageNavigationPageButtonPropsType = PropsWithNodeStylePropsType<{
    arrow?: boolean;
    disabled?: boolean;
    selected?: boolean;
}>;

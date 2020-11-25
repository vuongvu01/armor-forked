import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
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
    ComponentStylePropsType;

/* PageNavigation Root node prop type */
export type PageNavigationRootPropsType = PageNavigationEffectivePropsType &
    ComponentElementStylePropsType;

/* PageNavigation Button node prop type */
export type PageNavigationPageButtonPropsType = {
    arrow?: boolean;
    disabled?: boolean;
    selected?: boolean;
} & ComponentElementStylePropsType;

import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system/attributes';
import { ObjectLiteralType, ScalarType } from '../../type';

type PageNavigationPageSizeListItemType = {
    label: ScalarType;
    value: number;
};

type PageNavigationEffectivePropsType = Partial<{
    itemCount: number;
    pageNumber: number;
    displayRange: number;
    onPageSelect: (pageNumber: number) => void;

    // page size
    pageSize: number;
    enablePageSizeSelector: boolean;
    pageSizeList: PageNavigationPageSizeListItemType[];
    onPageSizeChange: (pageSize: number) => void;

    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType &
    ObjectLiteralType;

/* PageNavigation component prop type */
export type PageNavigationPropsType = PageNavigationEffectivePropsType &
    ComponentStylePropsType;

/* PageNavigation Root node prop type */
export type PageNavigationRootPropsType = PageNavigationEffectivePropsType &
    ComponentElementStylePropsType;

/* PageNavigation Buttons node prop type */
export type PageNavigationButtonsPropsType = ComponentElementStylePropsType;

/* PageNavigation Button node prop type */
export type PageNavigationPageButtonPropsType = {
    arrow?: boolean;
    disabled?: boolean;
    selected?: boolean;
} & ComponentElementStylePropsType;

/* PageNavigation Size node prop type */
export type PageNavigationSizePropsType = ComponentElementStylePropsType;

import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system';
import { ScalarType } from '../../type';

export type PageNavigationPageSizeListItemType = {
    /** Displayed label of the page size */
    label: ScalarType;
    /** Actual value of the page size */
    value: number;
};

/** 👉 PROPS TYPE */
type PageNavigationEffectivePropsType = Partial<{
    /** Total item count. This value is needed to calculate the amount of pages, and usually comes from an API endpoint */
    itemCount: number;
    /** Currently selected page number. Starts from 1 */
    pageNumber: number;
    /**
     * Is called when a user navigates to another page
     */
    onPageNumberChange: (newPageNumber: number) => void;
    /** The amount of page numbers to be displayed to the left and to the right of the currently selected page number */
    displayRange: number;

    // page size
    /** Defines the size of a page */
    pageSize: number;
    /** If set to true, enables the page size selector */
    enablePageSizeSelector: boolean;
    /**
     * A list of page sizes to show in the page size selector
     * @armor-docs-expand PageNavigationPageSizeListItemType
     */
    pageSizeList: PageNavigationPageSizeListItemType[];
    /** Is called when a user selects a page size from the list */
    onPageSizeChange: (pageSize: number) => void;

    /**
     * Is called when a user navigates to another page
     * @deprecated
     * @see onPageNumberChange
     */
    onPageSelect: (pageNumber: number) => void;
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

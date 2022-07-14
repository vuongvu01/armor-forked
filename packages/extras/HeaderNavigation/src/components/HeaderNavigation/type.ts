import { HTMLAttributes, ReactNode } from 'react';
import { MarginPropsType, ScalarType } from '@deliveryhero/armor-system';

import {
    DropdownSelectedOptionType,
    DropdownValueType,
    OptionFormatType,
    OptionItemType,
} from '@deliveryhero/armor';
import { ObjectLiteralType } from '../../type';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';

export type JustifyContentType =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

export type SuggestionObjectType = {
    label: string;
    value: ScalarType;
} & ObjectLiteralType;

export type HeaderNavigationSelectOnSelectType = (
    selectedOption: DropdownSelectedOptionType,
    itemIndex?: number,
) => void;

export type HeaderNavigationSelectOnChangeEventType = {
    target: {
        value?: DropdownValueType;
        name?: string;
    };
};

export type NavigationSelectorParamsType = {
    label?: string;
    isMultiselect?: boolean;
    isExpanded?: boolean;
    disabled?: boolean;
    defaultValue?: ScalarType | ReadonlyArray<ScalarType>;
    formatOption?: OptionFormatType;
    value?: ScalarType | ReadonlyArray<ScalarType>;
    options?:
        | string[]
        | { label: string; value: ScalarType; [key: string]: any }[]
        | OptionItemType[];
};

/** 👉 PROPS TYPE */
type HeaderNavigationEffectivePropsType = Partial<{
    /** React node that is displayed on left most part containing title logo */
    title: ReactNode;
    /** React node that is displayed on right most part containing selector dropdowns */
    selector: ReactNode;
    /** Color for top border of navigation */
    brandColor: string;
    /** Profile area content */
    profile: ReactNode;
    /** Show border at bottom of header navigation */
    showBottomBorder: boolean;
}> &
    Omit<HTMLAttributes<HTMLElement>, 'title'> &
    MarginPropsType;

export type HeaderNavigationPropsType = HeaderNavigationEffectivePropsType &
    ComponentStylePropsType;

export type HeaderNavigationRootPropsType = HeaderNavigationEffectivePropsType &
    ComponentElementStylePropsType;

export type HeaderNavigationTitleRootPropsType =
    HeaderNavigationEffectivePropsType & ComponentElementStylePropsType;

export type HeaderNavigationSelectorRootPropsType =
    HeaderNavigationEffectivePropsType & ComponentElementStylePropsType;

export type NavigationItemPropsType = HeaderNavigationEffectivePropsType &
    ComponentElementStylePropsType;

import { HTMLAttributes, MouseEvent } from 'react';
import {
    MarginPropsType,
    ScalarType,
    ComponentBehaviourPortalType,
    ComponentBehaviourOverlayType,
    WidthPropsType,
} from '@deliveryhero/armor-system';

import {
    HeaderNavigationSelectOnChangeEventType,
    HeaderNavigationSelectOnSelectType,
    NavigationSelectorParamsType,
} from '../type';
import { ComponentElementStylePropsType } from '../../type';
import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
} from '../../Dropdown/type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type HeaderNavigationSelectorEffectivePropsType = {
    /** Set the dropdown selector params */
    navigationSelectorParams: NavigationSelectorParamsType;
    /** Is called when a user selects an option */
    onOptionSelect?: HeaderNavigationSelectOnSelectType;
    /** Is called when selector value changes */
    onChange?: (event: HeaderNavigationSelectOnChangeEventType) => void;
    /** Is called when a user clicks on the selector */
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    /** Set render display string from selected value */
    onRenderSelectedValue?: (
        value: DropdownInternalValueType,
        options: DropdownInternalOptionType,
    ) => string;
    /** If set to false, the component will not render the top border line. Otherwise, it is enabled by default. */
    separator?: boolean;
    /** Enable select all options with multiple selections */
    enableSelectAllOption?: boolean;
    /** Enable search filter */
    enableSearchOption?: boolean;
    /** The z-index attribute of the dropdown container */
    zIndex?: number;
    /** Set the dropdown container width, fit-content by default */
    dropdownWidth?: ScalarType;
    /** If set, the dropdown width will never exceed this value */
    maxDropdownWidth?: ScalarType;
    /** If set, the dropdown width will never be smaller than this value */
    minDropdownWidth?: ScalarType;
} & HTMLAttributes<HTMLElement> &
    MarginPropsType &
    ComponentBehaviourPortalType &
    ComponentBehaviourOverlayType;

export type HeaderNavigationSelectorPropsType =
    HeaderNavigationSelectorEffectivePropsType;

export type HeaderNavigationSelectorRootPropsType = {
    isOptionListShown?: boolean;
    separator?: boolean;
    zIndex?: number;
} & ComponentElementStylePropsType &
    WidthPropsType;

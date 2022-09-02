import { HTMLAttributes, ReactChild } from 'react';
import { MarginPropsType, PaddingPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import {
    FilterConditionSchemaElementOrGroupType,
    FilterConditionValueType,
    FilterConditionValueElementOrGroupType,
} from '../type';
import { FilterBaseConditionType } from '../conditionTypes/FilterBaseConditionType';

export type FilterViewerRenderFunctionType = (
    condition: FilterConditionSchemaElementOrGroupType,
    conditionType: FilterBaseConditionType,
    conditionValue: FilterConditionValueElementOrGroupType | undefined,
) => ReactChild | ReactChild[];

/** 👉 PROPS TYPE */
type FilterViewerEffectivePropsType = Partial<{
    schema: FilterConditionSchemaElementOrGroupType;

    value: FilterConditionValueType;
    onValueChange: (newValue: FilterConditionValueType) => void;
    defaultValue: FilterConditionValueType;

    types: FilterBaseConditionType[];

    /** InitialValue gets applied when they press the "Clear all" button (right now it just dumps everything). Note that initialValue is not the same as defaultValue, because we can have the filter in the controlled mode, but we might still be interested in the "initialValue" as well. */
    initialValue: FilterConditionValueType;
    /** Is called when a user clicks on the "Edit filter" button */
    onFilterOpenButtonClick: () => void;
    /** If set to true or false, indicates the filter editor to be opened or closed */
    filterOpen: boolean;
    /** If defined, will cause the message about the amount of results to appear */
    resultCount: number;
    /** If defined, will cause the message about the total amount of results to appear */
    resultTotalCount: number;

    /**
     * @deprecated Use `afterFilterActions` instead
     * Additional controls rendered to the right of the "Edit filters" and "Clear all" buttons
     * */
    filterActions: ReactChild;

    /**
     * Additional controls rendered before "Edit filters" and "Clear all" buttons
     * */
    beforeFilterActions: ReactChild;

    /**
     * Additional controls rendered after "Edit filters" and "Clear all" buttons
     * */
    afterFilterActions: ReactChild;

    /**
     * Additional controls rendered after "Add filters" button
     * */
    afterAddFilterButton: ReactChild;

    /** Is called when a user clicks on the "Clear all" button */
    onClearAllFilterButtonClick: () => void;

    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    PaddingPropsType &
    MarginPropsType;

export type FilterViewerPropsType = FilterViewerEffectivePropsType &
    ComponentStylePropsType;

export type FilterViewerRootPropsType = FilterViewerEffectivePropsType &
    ComponentElementStylePropsType;

export type FilterViewerTopBarPropsType = ComponentElementStylePropsType;

export type FilterViewerTopBarSummaryPropsType = ComponentElementStylePropsType;

export type FilterViewerActionsPropsType = ComponentElementStylePropsType;

export type FilterViewConditionsPropsType = ComponentElementStylePropsType;

export type FilterViewerAddFilterHintPropsType = ComponentElementStylePropsType;

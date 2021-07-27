import { HTMLAttributes, ReactChild } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType, PaddingAttributesType } from '../../../system';
import { FilterConditionSchemaType, FilterConditionValueType } from '../type';
import { FilterBaseConditionType } from '../conditionTypes/FilterBaseConditionType';

export type FilterViewerRenderFunctionType = (
    condition: FilterConditionSchemaType,
    conditionType: FilterBaseConditionType,
    conditionValue: FilterConditionValueType | undefined,
) => ReactChild | ReactChild[];

/** 👉 PROPS TYPE */
type FilterViewerEffectivePropsType = Partial<{
    schema: FilterConditionSchemaType;

    value: FilterConditionValueType;
    onValueChange: (newValue: FilterConditionValueType) => void;
    defaultValue: FilterConditionValueType;

    types: Array<FilterBaseConditionType>;

    // initialValue gets applied when they press the "Clear all" button (right now it just dumps everything)
    // Note that initialValue is not the same as defaultValue, because we can have the filter in the controlled mode,
    // but we might still be interested in the "initialValue" as well.
    initialValue: FilterConditionValueType;
    onFilterOpenButtonClick: () => void;
    filterOpen: boolean;

    resultCount: number;
    resultTotalCount: number;

    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    PaddingAttributesType &
    MarginAttributesType;

export type FilterViewerPropsType = FilterViewerEffectivePropsType &
    ComponentStylePropsType;

export type FilterViewerRootPropsType = FilterViewerEffectivePropsType &
    ComponentElementStylePropsType;

export type FilterViewerTopBarPropsType = ComponentElementStylePropsType;

export type FilterViewerTopBarSummaryPropsType = ComponentElementStylePropsType;

export type FilterViewerActionsPropsType = ComponentElementStylePropsType;

export type FilterViewConditionsPropsType = ComponentElementStylePropsType;

export type FilterViewerAddFilterHintPropsType = ComponentElementStylePropsType;

import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType, PaddingAttributesType } from '../../../system';
import {
    FilterConditionValueNewValueType,
    FilterConditionSchemaType,
    FilterConditionValueType,
} from '../type';
import { FilterBaseConditionType } from '../conditionTypes/base';

export type FilterEditorConditionPropsType = {
    // things considering a particular field
    condition: FilterConditionSchemaType;
    conditionType: FilterBaseConditionType;
    conditionValue: FilterConditionValueType | undefined;
    onConditionValueChange: (
        newValue: FilterConditionValueNewValueType,
    ) => void;

    // global-wide things
    schema?: FilterConditionSchemaType; // todo: future-reserved
    value?: FilterConditionValueType; // todo: future-reserved
    onValueChange?: unknown; // todo: future-reserved: one field change can potentially affect other field in the filter
};

/** 👉 PROPS TYPE */
type FilterEditorEffectivePropsType = Partial<{
    schema: FilterConditionSchemaType;
    onSchemaChange: (newSchema: FilterConditionSchemaType) => void; // todo: future-reserved for the dynamic schemas
    defaultSchema: FilterConditionSchemaType; // todo: future-reserved for the dynamic schemas

    value: FilterConditionValueType;
    onValueChange: (newValue: FilterConditionValueType) => void;
    defaultValue: FilterConditionValueType;

    types: Array<FilterBaseConditionType>;

    // initialValue gets applied when they press the "Clear all" button (right now it just dumps everything)
    // Note that initialValue is not the same as defaultValue, because we can have the filter in the controlled mode,
    // but we might still be interested in the "initialValue" as well.
    initialValue: FilterConditionValueType;
    onClose: () => void;

    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    PaddingAttributesType &
    MarginAttributesType;

export type FilterEditorPropsType = FilterEditorEffectivePropsType &
    ComponentStylePropsType;

export type FilterEditorRootPropsType = ComponentElementStylePropsType;

export type FilterEditorHeaderPropsType = ComponentElementStylePropsType;

export type FilterEditorFieldsPropsType = ComponentElementStylePropsType;

export type FilterEditorActionsPropsType = ComponentElementStylePropsType;

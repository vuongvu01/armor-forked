import { HTMLAttributes } from 'react';
import { MarginPropsType, PaddingPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import {
    FilterConditionValueNewValueType,
    FilterConditionSchemaElementOrGroupType,
    FilterConditionValueElementOrGroupType,
    FilterConditionSchemaType,
    FilterConditionValueType,
} from '../type';
import { FilterBaseConditionType } from '../conditionTypes/FilterBaseConditionType';

export type FilterEditorConditionPropsType = {
    // things considering a particular field
    condition: FilterConditionSchemaElementOrGroupType;
    conditionType: FilterBaseConditionType;
    conditionValue: FilterConditionValueElementOrGroupType | undefined;
    onConditionValueChange: (
        newValue: FilterConditionValueNewValueType,
    ) => void;

    // global-wide things
    schema?: FilterConditionSchemaElementOrGroupType; // todo: future-reserved
    value?: FilterConditionValueElementOrGroupType; // todo: future-reserved
    onValueChange?: unknown; // todo: future-reserved: one field change can potentially affect other field in the filter
};

/** 👉 PROPS TYPE */
type FilterEditorEffectivePropsType = Partial<{
    /**
     * Sets a value of a **schema** and enables the *controlled* mode. If the **schema** property is not defined, then the component works in the uncontrolled mode.
     */
    schema: FilterConditionSchemaType;
    /**
     * This callback gets called on each value update of the **schema**.
     * @ignore
     */
    onSchemaChange: (newSchema: FilterConditionSchemaType) => void; // todo: future-reserved for the dynamic schemas
    /**
     * Sets the initial value of a **schema**. This property is ignored if the component works is in the *controlled mode*.
     * @ignore
     */
    defaultSchema: FilterConditionSchemaType; // todo: future-reserved for the dynamic schemas

    /**
     * Sets a value of a **value** and enables the *controlled* mode. If the **value** property is not defined, then the component works in the uncontrolled mode.
     */
    value: FilterConditionValueType;
    /**
     * This callback gets called on each value update of the **value**.
     */
    onValueChange: (newValue: FilterConditionValueType) => void;
    /**
     * Sets the initial value of a **value**. This property is ignored if the component works is in the *controlled mode*.
     */
    defaultValue: FilterConditionValueType;

    /**
     * Sets a value of a **value candidate** and enables the *controlled* mode. If the **value candidate** property is not defined, then the component works in the uncontrolled mode.
     */
    valueCandidate: FilterConditionValueType;
    /**
     * This callback gets called on each value update of the **value candidate**.
     */
    onValueCandidateChange: (
        newValueCandidate: FilterConditionValueType,
    ) => void;
    /**
     * Sets the initial value of a **value candidate**. This property is ignored if the component works is in the *controlled mode*.
     */
    defaultValueCandidate: FilterConditionValueType;

    /**
     * Declares a list of custom types to be used in the filter.
     */
    types: FilterBaseConditionType[];

    /**
     * Is applied when a user hits the "Clear all" button.
     * Note that initialValue is not the same as defaultValue, because we can have the filter in the *controlled mode*, but we might still be interested in the **initialValue** as well.
     */
    initialValue: FilterConditionValueType;
    /**
     * Is called when a user clicks on the "Close filter" or "Apply filter" buttons.
     */
    onClose: () => void;

    /**
     * If set to false, the "Close" button will not be rendered.
     */
    enableCloseButton: boolean;
    /**
     * If set to false, the "Clear all" button will not be rendered.
     */
    enableClearAllButton: boolean;
    /**
     * If set to false, the actions will not be rendered.
     */
    enableActions: boolean;
    /**
     * If set to false, the title will not be rendered.
     */
    enableHeader: boolean;
    /**
     * Defines which kind of layout is used for the Editor.
     */
    layout: 'horizontal' | 'vertical';
    /**
     * If set to false, the "apply" action will not trigger the "close" action.
     */
    enableCloseOnApply: boolean;

    /**
     * If defined, shows the displayed amount of results filtered by the filter.
     */
    resultCount: number;
    /**
     * If defined, shows the total amount of results filtered by the filter.
     */
    resultTotalCount: number;
}> &
    HTMLAttributes<HTMLDivElement> &
    PaddingPropsType &
    MarginPropsType;

export type FilterEditorPropsType = FilterEditorEffectivePropsType &
    ComponentStylePropsType;

export type FilterEditorRootPropsType = ComponentElementStylePropsType;

export type FilterEditorHeaderPropsType = {
    leftAligned: boolean;
} & ComponentElementStylePropsType;

export type FilterEditorConditionsPropsType = {
    vertical: boolean;
} & ComponentElementStylePropsType;

export type FilterEditorActionsPropsType = ComponentElementStylePropsType;

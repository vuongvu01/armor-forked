import cloneDeep from 'clone-deep';
import { useCallback } from 'react';
import { FilterEditorPropsType } from '../type';
import { RefType } from '../../../../type';
import {
    useControlledState,
    useGuidedState,
    useRootRef,
} from '../../../../system';
import {
    FilterConditionValueNewValueType,
    FilterConditionSchemaType,
    FilterConditionValueType,
} from '../../type';
import { FILTER_EMPTY, SCHEMA_EMPTY } from '../../constants';

export const useFilterEditor = <E extends HTMLElement>(
    {
        schema,
        onSchemaChange,
        defaultSchema,

        value,
        onValueChange,
        defaultValue,

        initialValue,
        onCloseButtonClick,

        ...restProps
    }: FilterEditorPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    const [externalSchema] = useControlledState<FilterConditionSchemaType>(
        defaultSchema,
        schema,
        onSchemaChange,
    );
    // const [internalSchema] = useGuidedState<FilterConditionSchemaType>(
    //     () => cloneDeep(externalSchema),
    //     [externalSchema],
    // );

    const [externalValue, setExternalValue] = useControlledState<
        FilterConditionValueType
    >(defaultValue, value, onValueChange);
    const [internalValue, setInternalValue] = useGuidedState<
        FilterConditionValueType
    >(() => cloneDeep(externalValue), [externalValue]);

    // todo: refactor this mess
    const externalSchemaSafe =
        externalSchema && externalSchema.conditions
            ? externalSchema
            : SCHEMA_EMPTY;

    // todo: refactor this mess
    const internalValueSafe =
        internalValue && internalValue.conditions
            ? internalValue
            : FILTER_EMPTY;

    const onClearFilterButtonClick = useCallback(() => {
        setInternalValue(initialValue ? cloneDeep(initialValue) : FILTER_EMPTY);
    }, [initialValue]);

    const onApplyFilterButtonClick = useCallback(() => {
        setExternalValue(internalValue);
        if (onCloseButtonClick) {
            onCloseButtonClick();
        }
    }, [setExternalValue, internalValue, onCloseButtonClick]);

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        getConditionProps: (
            condition: FilterConditionSchemaType,
            path: string,
        ) => {
            // todo: This whole approach only works with a flat schema (which we only support for now),
            // todo: and will not work otherwise.

            // todo: use _.get(realValue, path) later when we have a nested structure
            // todo: also, use memoization, be more clever than this!
            const conditionValue = internalValueSafe.conditions!.find(
                item => item.fieldName === path,
            );

            const onConditionValueChange = (
                newFieldValue: FilterConditionValueNewValueType,
            ) => {
                let nextValue = cloneDeep(internalValue);
                nextValue = nextValue || {};
                nextValue.conditions = nextValue.conditions || [];

                // todo: use _.get(nextValue, path) later when we have a nested structure
                const nextConditionValue = nextValue.conditions?.find(
                    conditionValueItem => conditionValueItem.fieldName === path,
                );
                if (nextConditionValue) {
                    if ('value' in newFieldValue) {
                        nextConditionValue.value = newFieldValue.value;
                    }
                    if ('op' in newFieldValue) {
                        nextConditionValue.op = newFieldValue.op;
                    }
                } else {
                    nextValue.conditions.push({
                        fieldName: condition.fieldName as string,
                        value: newFieldValue.value,
                        op: newFieldValue.op,
                    });
                }

                setInternalValue(nextValue);
            };

            return {
                condition,
                conditionValue,
                onConditionValueChange,
            };
        },
        schema: externalSchemaSafe,
        clearFilterButtonProps: {
            onClick: onClearFilterButtonClick,
        },
        applyFilterButtonProps: {
            onClick: onApplyFilterButtonClick,
        },
        closeButtonProps: {
            onClick: onCloseButtonClick,
        },
    };
};

import cloneDeep from 'clone-deep';
import { useCallback } from 'react';
import { FilterEditorPropsType } from '../type';
import { RefType } from '../../../../type';
import {
    useControlledState,
    useDerivedState,
    useRootRef,
} from '../../../../system';
import {
    FilterConditionValueNewValueType,
    FilterConditionSchemaType,
    FilterConditionValueType,
} from '../../type';
import { FILTER_EMPTY, SCHEMA_EMPTY } from '../../constants';
import { useTypeIndex } from '../../hooks/useTypeIndex';
import { getConditionType } from '../../utils/getConditionType';
import { FILTER_EDITOR_LAYOUT_HORIZONTAL } from '../constants';
import { useFilterEditorSettings } from './useFilterEditorSettings';
import { useFilterEditorEvents } from './useFilterEditorEvents';

export const useFilterEditor = <E extends HTMLElement>(
    {
        schema,
        onSchemaChange,
        defaultSchema,

        value,
        onValueChange,
        defaultValue,

        types,

        initialValue,
        onClose,

        enableCloseButton,
        enableClearAllButton,
        enableActions,
        enableHeader,
        enableCloseOnApply,
        layout,

        resultCount,
        resultTotalCount,

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
    // const [internalSchema] = useDerivedState<FilterConditionSchemaType>(
    //     () => cloneDeep(externalSchema),
    //     [externalSchema],
    // );

    const typeIndex = useTypeIndex(types);

    const [externalValue, setExternalValue] = useControlledState<
        FilterConditionValueType
    >(defaultValue, value, onValueChange);
    const [internalValue, setInternalValue] = useDerivedState<
        FilterConditionValueType
    >(() => cloneDeep(externalValue), [externalValue]);

    const {
        showClearFilterButton,
        showActions,
        showHeader,
    } = useFilterEditorSettings({
        enableClearAllButton,
        enableActions,
        enableHeader,
    });

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

    const onApplyFilterButtonClick = useCallback(() => {
        setExternalValue(internalValue);
        if (enableCloseOnApply !== false) {
            onClose?.();
        }
    }, [setExternalValue, internalValue, onClose, enableCloseOnApply]);

    const onClearFilterButtonClick = useCallback(() => {
        setInternalValue(initialValue ? cloneDeep(initialValue) : FILTER_EMPTY);
    }, [initialValue]);

    useFilterEditorEvents(onApplyFilterButtonClick, onClearFilterButtonClick);

    const layoutHorizontal = layout === FILTER_EDITOR_LAYOUT_HORIZONTAL;
    const layoutVertical = layout !== FILTER_EDITOR_LAYOUT_HORIZONTAL;

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        getHeaderProps: () => ({
            leftAligned: layoutHorizontal,
            marginBottom: 8,
            onClearFilterButtonClick,
            showClearFilterButton,
        }),
        conditionsProps: {
            vertical: layoutVertical,
        },
        getConditionType: (condition: FilterConditionSchemaType) =>
            getConditionType(condition, typeIndex),
        getConditionProps: (
            condition: FilterConditionSchemaType,
            path: string,
        ) => {
            const conditionType = getConditionType(condition, typeIndex);
            const conditionId = condition.id!;

            // todo: This whole approach only works with a flat schema (which we only support for now),
            // todo: and will not work otherwise.

            // todo: use _.get(realValue, path) later when we have a nested structure
            // todo: also, use memoization, be more clever than this!
            const conditionValue = internalValueSafe.conditions!.find(
                item => item.name === path,
            );

            const onConditionValueChange = (
                newFieldValue: FilterConditionValueNewValueType,
            ) => {
                let nextValue = cloneDeep(internalValue);
                nextValue = nextValue || {};
                nextValue.conditions = nextValue.conditions || [];

                // todo: use _.get(nextValue, path) later when we have a nested structure
                const nextConditionValue = nextValue.conditions?.find(
                    conditionValueItem => conditionValueItem.name === path,
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
                        id: conditionId,
                        name: condition.name || conditionId,
                        value: newFieldValue.value,
                        op: newFieldValue.op,
                    });
                }

                setInternalValue(nextValue);
            };

            return {
                condition,
                conditionType,
                conditionValue,
                onConditionValueChange,
            };
        },
        schema: externalSchemaSafe,
        getApplyFilterButtonProps: () => ({
            onClick: onApplyFilterButtonClick,
        }),

        showSeparatedActions: showActions && layoutVertical,
        showInlineActions: showActions && layoutHorizontal,

        showResultCount: resultCount !== undefined,
        showResultTotalCount: resultTotalCount !== undefined,
        resultCountFormatted:
            resultCount !== undefined
                ? new Intl.NumberFormat().format(resultCount)
                : 0,
        resultTotalCountFormatted:
            resultTotalCount !== undefined
                ? new Intl.NumberFormat().format(resultTotalCount)
                : 0,
        getResultCountProps: () => ({
            paragraph: true,
            medium: true,
            tag: 'div',
            color: 'neutral.05',
            marginTop: 6,
        }),
        getActionProps: () => ({
            showCloseButton: enableCloseButton !== false,
            onCloseButtonClick: onClose,
            onApplyFilterButtonClick,
            marginTop: 8,
        }),
        showHeader,
    };
};

import { useCallback } from 'react';
import cloneDeep from 'clone-deep';
import { useControlledState, useRootRef } from '@deliveryhero/armor-system';

import { FilterEditorPropsType } from '../type';
import { RefType } from '../../../../type';
import {
    FilterConditionValueNewValueType,
    FilterConditionSchemaElementOrGroupType,
    FilterConditionValueType,
    FilterConditionSchemaType,
} from '../../type';
import { SCHEMA_EMPTY } from '../../constants';
import { useTypeIndex } from '../../hooks/useTypeIndex';
import { getConditionType } from '../../utils/getConditionType';
import { FILTER_EDITOR_LAYOUT_HORIZONTAL } from '../constants';
import { useFilterEditorSettings } from './useFilterEditorSettings';
import { useFilterEditorEvents } from './useFilterEditorEvents';
import { formatNumber } from '../../utils/formatNumber';
import { getInitialValue } from '../utils/getInitialValue';

export const useFilterEditor = <E extends HTMLElement>(
    {
        schema,
        onSchemaChange,
        defaultSchema,

        value,
        onValueChange,
        defaultValue,

        valueCandidate,
        onValueCandidateChange,
        defaultValueCandidate,

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
        onClearAllFilterButtonClick,

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

    // currently applied value, controlled or uncontrolled
    const [actualValue, setActualValue] =
        useControlledState<FilterConditionValueType>(
            defaultValue,
            value,
            onValueChange,
        );
    // next value candidate, controlled or uncontrolled. If not set, then initially taken from the applied value
    const [actualValueCandidate, setActualValueCandidate] =
        useControlledState<FilterConditionValueType>(
            defaultValueCandidate,
            valueCandidate ?? actualValue,
            onValueCandidateChange,
        );

    const { showClearFilterButton, showActions, showHeader } =
        useFilterEditorSettings({
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
    const actualValueSafe =
        actualValueCandidate && actualValueCandidate.conditions
            ? actualValueCandidate
            : getInitialValue(externalSchemaSafe);

    const onApplyFilterButtonClick = useCallback(() => {
        setActualValue(actualValueCandidate!); // todo: fix this !
        if (enableCloseOnApply !== false) {
            onClose?.();
        }
    }, [setActualValue, actualValueCandidate, onClose, enableCloseOnApply]);

    const onClearFilterButtonClick = useCallback(() => {
        const nextValue = initialValue
            ? cloneDeep(initialValue)
            : getInitialValue(externalSchemaSafe);
        setActualValueCandidate(nextValue);
        onClearAllFilterButtonClick?.();
    }, [
        initialValue,
        externalSchemaSafe,
        setActualValueCandidate,
        onClearAllFilterButtonClick,
    ]);

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
        getConditionType: (
            condition: FilterConditionSchemaElementOrGroupType,
        ) => getConditionType(condition, typeIndex),
        getConditionProps: (
            condition: FilterConditionSchemaElementOrGroupType,
            path: string,
        ) => {
            const conditionType = getConditionType(condition, typeIndex);
            const conditionId = condition.id!;

            // todo: This whole approach only works with a flat schema (which we only support for now),
            // todo: and will not work otherwise.

            // todo: use _.get(realValue, path) later when we have a nested structure
            // todo: also, use memoization, be more clever than this!
            const conditionValue = actualValueSafe.conditions!.find(
                (item) => item.name === path,
            );

            const onConditionValueChange = (
                newFieldValue: FilterConditionValueNewValueType,
            ) => {
                let nextValue = actualValueCandidate
                    ? cloneDeep(actualValueCandidate)
                    : {
                          conditions: [],
                      };
                nextValue = nextValue || {};
                nextValue.conditions = nextValue.conditions || [];

                // todo: use _.get(nextValue, path) later when we have a nested structure
                const nextConditionValue = nextValue.conditions?.find(
                    (conditionValueItem) => conditionValueItem.name === path,
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

                setActualValueCandidate(nextValue);
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
        resultCountFormatted: formatNumber(resultCount),
        resultTotalCountFormatted: formatNumber(resultTotalCount),
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

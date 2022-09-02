import { useCallback, useMemo, MouseEvent, ForwardedRef } from 'react';
import cloneDeep from 'clone-deep';
import {
    extractDataAttribute,
    useControlledState,
    useFlagState,
    useRootRef,
} from '@deliveryhero/armor-system';

import { FilterViewerPropsType } from '../type';
import {
    FilterConditionSchemaElementType,
    FilterConditionSchemaElementOrGroupType,
    FilterConditionValueType,
} from '../../type';
import { getValueRenderFunction } from '../utils/getValueRenderFunction';
import { isConditionValueEmpty } from '../utils/isConditionValueEmpty';
import { FILTER_EMPTY, SCHEMA_EMPTY } from '../../constants';
import { useTypeIndex } from '../../hooks/useTypeIndex';
import { getConditionType } from '../../utils/getConditionType';
import { formatNumber } from '../../utils/formatNumber';

export const useFilterViewer = <E extends HTMLElement>(
    {
        onFilterOpenButtonClick,
        schema,
        value,
        types,
        defaultValue,
        onValueChange,
        initialValue,
        filterOpen,
        resultCount,
        resultTotalCount,
        onClearAllFilterButtonClick,
        filterActions,
        beforeFilterActions,
        afterFilterActions,
        afterAddFilterButton,
        ...restProps
    }: FilterViewerPropsType,
    ref: ForwardedRef<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    const [realValue, setRealValue] =
        useControlledState<FilterConditionValueType>(
            defaultValue,
            value,
            onValueChange,
        );

    const [dialogOpen, setDialogOpen, setDialogOpenTrue, setDialogCloseFalse] =
        useFlagState(false);

    const onClearFilterConfirmButtonClick = useCallback(() => {
        setDialogCloseFalse();
        setRealValue(initialValue ? cloneDeep(initialValue) : FILTER_EMPTY);
        onClearAllFilterButtonClick?.();
    }, [
        setDialogCloseFalse,
        setRealValue,
        initialValue,
        onClearAllFilterButtonClick,
    ]);

    const typeIndex = useTypeIndex(types);

    const rootConditionsCount = useMemo(() => {
        let count = 0;

        if (schema && schema.conditions) {
            schema.conditions.forEach((condition) => {
                const conditionType = getConditionType(condition, typeIndex);

                if (
                    conditionType &&
                    !isConditionValueEmpty(
                        condition,
                        conditionType,
                        condition.name || condition.id,
                        realValue,
                    )
                ) {
                    count += 1;
                }
            });
        }
        return count;
    }, [schema, realValue, typeIndex]);

    // todo: refactor this mess
    const schemaSafe = schema && schema.conditions ? schema : SCHEMA_EMPTY;

    // todo: refactor this mess
    const realValueSafe =
        realValue && realValue.conditions ? realValue : FILTER_EMPTY;

    const empty = !rootConditionsCount;

    const onCloseTagButtonClick = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            const path = extractDataAttribute(event, 'path');

            const schemaCondition = schemaSafe.conditions.find(
                (condition) => condition.name === path,
            );
            const conditionInitialValue = schemaCondition?.initialValue;

            // todo: this function will not work with nested schemas
            const newValue = realValue
                ? cloneDeep(realValue)
                : {
                      conditions: [],
                  };
            if (newValue.conditions) {
                if (conditionInitialValue !== undefined) {
                    // set that initial value
                    newValue.conditions = newValue.conditions.map((condition) =>
                        condition.name === path
                            ? {
                                  ...condition,
                                  value: conditionInitialValue,
                              }
                            : condition,
                    );
                } else {
                    // remove the condition completely
                    newValue.conditions = newValue.conditions.filter(
                        (condition) => condition.name !== path,
                    );
                }
            }
            setRealValue(newValue);
        },
        [realValue, setRealValue, schemaSafe],
    );

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        getOpenFilterButtonProps: () => ({
            onClick: onFilterOpenButtonClick,
        }),
        getEditFilterButtonProps: () => ({
            onClick: onFilterOpenButtonClick,
        }),
        clearFilterButtonProps: {
            onClick: setDialogOpenTrue,
        },
        confirmationDialogProps: {
            clearFilterContextMenuProps: {
                open: dialogOpen,
                onOpenChange: (newValue: boolean) => setDialogOpen(newValue),
            },
            clearFilterCancelButtonProps: {
                onClick: setDialogCloseFalse,
            },
            clearFilterConfirmButtonProps: {
                onClick: onClearFilterConfirmButtonClick,
            },
        },
        rootConditionsCount,
        showAddFilterButton: filterOpen ? false : empty,
        showAddFilterHint: !filterOpen ? false : empty,
        showSelectedFilter: !empty,
        showResultCount: resultCount !== undefined,
        showResultTotalCount: resultTotalCount !== undefined,
        resultCountFormatted: formatNumber(resultCount),
        resultTotalCountFormatted: formatNumber(resultTotalCount),
        schema: schemaSafe,
        filterActions,
        beforeFilterActions,
        afterFilterActions,
        afterAddFilterButton,
        isConditionValueEmpty: (
            condition: FilterConditionSchemaElementOrGroupType,
            path: string,
        ) => {
            const conditionType = getConditionType(condition, typeIndex);
            if (!conditionType) {
                return true;
            }

            return isConditionValueEmpty(
                condition,
                conditionType,
                path,
                realValueSafe,
            );
        },
        getTagProps: (
            condition: FilterConditionSchemaElementOrGroupType,
            path: string,
        ) => {
            const {
                typeId = 'string',
                label,
                name,
                removable,
            } = condition as FilterConditionSchemaElementType;
            const conditionType = typeIndex[typeId];

            // todo: This whole approach only works with a flat schema (which we only support for now),
            // todo: and will not work otherwise.

            // todo: use _.get(realValue, path) later when we have a nested structure
            // todo: also, use memoization, be more clever than this!
            const conditionValue = realValueSafe.conditions!.find(
                (conditionValueItem) => conditionValueItem.name === path,
            );

            const renderValue = getValueRenderFunction(
                getConditionType(condition, typeIndex),
            );
            const tagValue = renderValue(
                condition,
                conditionType,
                conditionValue,
            );

            return {
                label: label ?? name,
                enableCloseIcon: removable !== false,
                value: tagValue,
                onCloseButtonClick: onCloseTagButtonClick,
                path,
            };
        },
    };
};

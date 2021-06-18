import { useCallback, useMemo, MouseEvent } from 'react';
import cloneDeep from 'clone-deep';
import { FilterViewerPropsType } from '../type';
import { RefType } from '../../../../type';
import {
    extractDataAttribute,
    useControlledState,
    useFlagState,
    useRootRef,
} from '../../../../system';
import {
    FilterConditionSchemaType,
    FilterConditionValueType,
} from '../../type';
import { getValueRenderFunction } from '../utils/getValueRenderFunction';
import { isConditionValueEmpty } from '../utils/isConditionValueEmpty';
import { FILTER_EMPTY, SCHEMA_EMPTY } from '../../constants';
import { useTypeIndex } from '../../hooks/useTypeIndex';
import { getConditionType } from '../../utils/getConditionType';

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
        ...restProps
    }: FilterViewerPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    const [realValue, setRealValue] = useControlledState<
        FilterConditionValueType
    >(defaultValue, value, onValueChange);

    const [
        dialogOpen,
        setDialogOpen,
        setDialogOpenTrue,
        setDialogCloseFalse,
    ] = useFlagState(false);

    const onClearFilterConfirmButtonClick = useCallback(() => {
        setDialogCloseFalse();
        setRealValue(initialValue ? cloneDeep(initialValue) : FILTER_EMPTY);
    }, [setDialogOpenTrue, setRealValue, initialValue]);

    const typeIndex = useTypeIndex(types);

    const rootConditionsCount = useMemo(() => {
        let count = 0;

        if (schema && schema.conditions) {
            schema.conditions.forEach(condition => {
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

    const onCloseTagButtonClick = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            const path = extractDataAttribute(event, 'path');

            // todo: this function will not work with nested schemas
            const newValue = { ...realValue };
            if (newValue.conditions) {
                newValue.conditions = newValue.conditions.filter(
                    condition => condition.name !== path,
                );
            }
            setRealValue(newValue);
        },
        [realValue, setRealValue],
    );

    // todo: refactor this mess
    const schemaSafe = schema && schema.conditions ? schema : SCHEMA_EMPTY;

    // todo: refactor this mess
    const realValueSafe =
        realValue && realValue.conditions ? realValue : FILTER_EMPTY;

    const empty = !rootConditionsCount;

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
            open: dialogOpen,
            onOpenChange: (newValue: boolean) => setDialogOpen(newValue),
        },
        clearFilterCancelButtonProps: {
            onClick: setDialogCloseFalse,
        },
        clearFilterConfirmButtonProps: {
            onClick: onClearFilterConfirmButtonClick,
        },
        rootConditionsCount,
        empty,
        showAddFilterButton: filterOpen ? false : empty,
        showAddFilterHint: !filterOpen ? false : empty,
        schema: schemaSafe,
        isConditionValueEmpty: (
            condition: FilterConditionSchemaType,
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
        getTagProps: (condition: FilterConditionSchemaType, path: string) => {
            const conditionTypeId = condition.typeId || 'string';
            const conditionType = typeIndex[conditionTypeId];

            // todo: This whole approach only works with a flat schema (which we only support for now),
            // todo: and will not work otherwise.

            // todo: use _.get(realValue, path) later when we have a nested structure
            // todo: also, use memoization, be more clever than this!
            const conditionValue = realValueSafe.conditions!.find(
                conditionValueItem => conditionValueItem.name === path,
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
                label: condition.label || condition.name,
                value: tagValue,
                onCloseButtonClick: onCloseTagButtonClick,
                path,
            };
        },
    };
};

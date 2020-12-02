import { MouseEvent, useCallback, useMemo, useState } from 'react';
import {
    DataTableColumnType,
    DataTableDataType,
    DataTablePropsType,
} from '../type';
import { ObjectLiteralType, ScalarType } from '../../../type';

export const renderExpandableSectionEmpty = (data: DataTableDataType) => '';

export const useDataTableExpandableSections = (
    columnsSafe: DataTableColumnType[],
    {
        renderExpandableSection,
        expandableSectionControllerColumnId,
        expandedSectionIds,
        defaultExpandedSectionIds,
        onSectionExpansionChange,
        ...restProps
    }: DataTablePropsType,
) => {
    const expandableSectionControllers = useMemo(() => {
        const result: ObjectLiteralType<boolean> = {};
        if (expandableSectionControllerColumnId) {
            result[expandableSectionControllerColumnId] = true;
        }

        columnsSafe.forEach(column => {
            if (column.expandableSectionController) {
                result[column.id] = true;
            }
        });

        return result;
    }, [columnsSafe, expandableSectionControllerColumnId]);

    const enableExpandableSections =
        !!renderExpandableSection &&
        !!Object.keys(expandableSectionControllers).length;

    const [
        expandedSectionIdsInternal,
        setExpandedSectionIdsInternal,
    ] = useState<ScalarType[]>(defaultExpandedSectionIds || []); // controllable & uncontrollable
    const expandedSectionIdsActual =
        expandedSectionIds || expandedSectionIdsInternal;

    const onExpansionChangeInternal = useCallback(
        (expansion: ScalarType[]) => {
            // controllable & uncontrollable
            if (!expandedSectionIds) {
                setExpandedSectionIdsInternal(expansion);
            }
            if (onSectionExpansionChange) {
                onSectionExpansionChange(expansion);
            }
        },
        [onSectionExpansionChange, expandedSectionIds],
    );

    // const rowIds = useMemo(() => dataSafe.map(item => item.id), [dataSafe]);

    const onExpansionSectionControllerButtonClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            if (!enableExpandableSections) {
                return;
            }

            const rowId = event.currentTarget.getAttribute('data-rowid');

            if (!rowId) {
                return;
            }

            const expanded = expandedSectionIdsActual.includes(rowId);

            onExpansionChangeInternal(
                expanded
                    ? expandedSectionIdsActual.filter(id => id !== rowId)
                    : [rowId, ...expandedSectionIdsActual],
            );
        },
        [
            expandedSectionIdsActual,
            onExpansionChangeInternal,
            enableExpandableSections,
        ],
    );

    return {
        result: {
            enableExpandableSections,
            renderExpandableSection:
                renderExpandableSection || renderExpandableSectionEmpty,
            expandableSectionControllers,
            expandedSectionIds: expandedSectionIdsActual,
            onExpansionSectionControllerButtonClick,
        },
        restProps,
    };
};

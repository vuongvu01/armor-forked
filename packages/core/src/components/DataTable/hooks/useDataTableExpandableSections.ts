import { MouseEvent, useCallback, useMemo, useState } from 'react';
import { ScalarType } from '@deliveryhero/armor-system';

import {
    DataTableColumnType,
    DataTableDataType,
    DataTablePropsType,
} from '../type';
import { ObjectLiteralType } from '../../../type';

export const renderExpandableSectionEmpty = (data: DataTableDataType) => '';
export const renderExpandableTriggerEmpty = (data: DataTableDataType) =>
    undefined;

export const useDataTableExpandableSections = (
    columnsSafe: DataTableColumnType[],
    {
        enableExpandableSections,
        renderExpandableSection,
        expandableSectionControllerColumnId,
        expandedSectionIds,
        defaultExpandedSectionIds,
        onSectionExpansionChange,
        ...restProps
    }: DataTablePropsType,
) => {
    const expandableSectionControllers = useMemo(() => {
        const controllers: ObjectLiteralType<boolean> = {};
        if (expandableSectionControllerColumnId) {
            controllers[expandableSectionControllerColumnId] = true;
        }

        columnsSafe.forEach((column) => {
            if (column.expandableSectionController) {
                controllers[column.id] = true;
            }
        });

        // backward-compatibility-enforcing spaghetti
        if (
            enableExpandableSections !== undefined &&
            !controllers.length &&
            columnsSafe.length
        ) {
            // nothing was selected as a controller, then use the first column
            controllers[columnsSafe[0].id] = true;
        }

        return controllers;
    }, [
        columnsSafe,
        expandableSectionControllerColumnId,
        enableExpandableSections,
    ]);

    // backward-compatibility-enforcing spaghetti
    let reallyEnableExpandableSections = false;
    if (enableExpandableSections === undefined) {
        reallyEnableExpandableSections =
            !!renderExpandableSection &&
            !!Object.keys(expandableSectionControllers).length;
    } else {
        reallyEnableExpandableSections = enableExpandableSections;
    }

    const [expandedSectionIdsInternal, setExpandedSectionIdsInternal] =
        useState<ScalarType[]>(defaultExpandedSectionIds || []); // controllable & uncontrollable
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

    const onExpansionSectionControllerTriggerClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            if (!reallyEnableExpandableSections) {
                return;
            }

            const rowId = event.currentTarget.getAttribute('data-rowid');

            if (!rowId) {
                return;
            }

            const expanded = expandedSectionIdsActual.includes(rowId);

            onExpansionChangeInternal(
                expanded
                    ? expandedSectionIdsActual.filter((id) => id !== rowId)
                    : [rowId, ...expandedSectionIdsActual],
            );
        },
        [
            expandedSectionIdsActual,
            onExpansionChangeInternal,
            reallyEnableExpandableSections,
        ],
    );

    return {
        result: {
            enableExpandableSections: reallyEnableExpandableSections,
            renderExpandableSection:
                renderExpandableSection || renderExpandableSectionEmpty,
            expandableSectionControllers,
            expandedSectionIds: expandedSectionIdsActual,
            onExpansionSectionControllerTriggerClick,
        },
        restProps,
    };
};

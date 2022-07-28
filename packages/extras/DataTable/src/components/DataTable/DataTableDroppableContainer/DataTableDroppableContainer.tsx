import React, { FC, ReactElement, useCallback, useState } from 'react';
import {
    DndContext,
    DndContextProps,
    closestCenter,
    DragOverlay,
} from '@dnd-kit/core';
import {
    restrictToFirstScrollableAncestor,
    restrictToVerticalAxis,
} from '@dnd-kit/modifiers';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Table } from '@deliveryhero/armor';
import { DataTableDraggableRowPresenter } from '../DataTableDraggableRowPresenter';
import { DataTablePropsType } from '../type';
import { DragAndDropTableBody } from './style';

type DataTableDroppableContainerProps = {
    enableRowReordering: DataTablePropsType['enableRowReordering'];
    data: DataTablePropsType['data'];
    tableProps: Record<string, unknown>;
    renderRow: (activeId: string) => () => ReactElement;
    onRowOrderChange: DataTablePropsType['onRowOrderChange'];
};

const dndModifiers = [
    restrictToVerticalAxis,
    restrictToFirstScrollableAncestor,
];

export const DataTableDroppableContainer: FC<
    React.PropsWithChildren<DataTableDroppableContainerProps>
> = ({
    children,
    enableRowReordering,
    data,
    tableProps,
    renderRow,
    onRowOrderChange,
}) => {
    const [activeId, setActiveId] = useState<string | null>(null);

    const handleDragStart: DndContextProps['onDragStart'] = useCallback(
        (event) => {
            const { active } = event;

            setActiveId(active.id);
        },
        [],
    );

    const handleDragEnd: DndContextProps['onDragEnd'] = useCallback(
        (event) => {
            const { active, over } = event;

            if (data && over && active.id !== over.id) {
                const areEqual = (
                    originalId: string | number,
                    stringId: string,
                ) => String(originalId) === stringId;

                const oldIndex = data.findIndex(({ id }) =>
                    areEqual(id, active.id),
                );
                const newIndex = data.findIndex(({ id }) =>
                    areEqual(id, over.id),
                );

                if (oldIndex < 0 || newIndex < 0) {
                    return;
                }

                const updatedData = arrayMove(data, oldIndex, newIndex);
                onRowOrderChange?.(updatedData, oldIndex, newIndex);
            }

            setActiveId(null);
        },
        [data, onRowOrderChange],
    );

    if (!enableRowReordering) {
        return <>{children}</>;
    }

    return (
        <DndContext
            modifiers={dndModifiers}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={data?.map(({ id }) => String(id)) ?? []}
                strategy={verticalListSortingStrategy}
            >
                {children}
            </SortableContext>
            <DragOverlay>
                {activeId ? (
                    <DataTableDraggableRowPresenter>
                        <Table {...tableProps}>
                            <DragAndDropTableBody className="DataTableDroppableContainer--TableBody">
                                {renderRow(activeId)()}
                            </DragAndDropTableBody>
                        </Table>
                    </DataTableDraggableRowPresenter>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
};

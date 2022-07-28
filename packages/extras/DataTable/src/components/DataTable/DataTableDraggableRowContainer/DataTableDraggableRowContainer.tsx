import React, { FC, ReactElement, useMemo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DataTableDraggableRowPresenter } from '../DataTableDraggableRowPresenter';
import { DataTablePropsType } from '../type';

type DataTableDraggableRowContainerProps = {
    children: (dragHandlerProps: unknown) => ReactElement;
    enableRowReordering: DataTablePropsType['enableRowReordering'];
    id: string;
};

export const DataTableDraggableRowContainer: FC<
    React.PropsWithChildren<DataTableDraggableRowContainerProps>
> = ({ children, enableRowReordering, id }) => {
    const { attributes, listeners, transform, transition, setNodeRef } =
        useSortable({ id });

    const style = useMemo(
        () => ({
            transform: CSS.Transform.toString(transform),
            transition,
            position: 'relative',
        }),
        [transform, transition],
    );

    if (!enableRowReordering) {
        return <>{children({})}</>;
    }

    return (
        <DataTableDraggableRowPresenter ref={setNodeRef} style={style}>
            {children({ ...attributes, ...listeners })}
        </DataTableDraggableRowPresenter>
    );
};

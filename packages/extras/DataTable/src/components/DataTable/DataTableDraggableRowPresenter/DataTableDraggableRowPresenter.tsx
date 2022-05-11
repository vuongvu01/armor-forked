import { cloneElement, forwardRef, ReactElement } from 'react';

type DataTableDraggableRowPresenterProps = {
    children: ReactElement;
    style?: Record<string, string | undefined>;
};

export const DataTableDraggableRowPresenter = forwardRef<
    HTMLTableRowElement,
    DataTableDraggableRowPresenterProps
>(({ children, ...props }, ref) => {
    return cloneElement(children, { ...props, ref });
});

DataTableDraggableRowPresenter.displayName = 'DataTableDraggableRowPresenter';

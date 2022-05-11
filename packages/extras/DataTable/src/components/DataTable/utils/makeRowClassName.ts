type DataTableClassNamesType = {
    Row: string;
    RowFirst: string;
    RowLast: string;
    RowEven: string;
    RowOdd: string;
};

// todo: add memoization here
export const makeRowClassName = (
    rowNumber: number,
    displayedItemCount: number,
    classNames: DataTableClassNamesType,
) => {
    const even = !(rowNumber % 2);
    const { Row, RowFirst, RowLast, RowEven, RowOdd } = classNames;

    return `${Row} ${!rowNumber ? RowFirst : ''} ${
        rowNumber === displayedItemCount - 1 ? RowLast : ''
    } ${even ? RowEven : ''} ${!even ? RowOdd : ''}`.trim();
};

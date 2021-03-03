import { MouseEvent, useCallback } from 'react';
import { TableCheckboxCellPropsType } from '../type';
import { ReferenceType } from '../../../../type';
import { tableCheckboxCellRootTestId } from '../constants';

export const useTableCheckboxCell = (
    {
        checked,
        checkedIcon,
        isHeader,
        ...restProps
    }: TableCheckboxCellPropsType,
    ref: ReferenceType,
) => {
    const onCheckboxClick = useCallback(
        (e: MouseEvent<HTMLLabelElement>) => e.preventDefault(),
        [],
    );

    return {
        rootProps: {
            'data-testid': tableCheckboxCellRootTestId,
            ...restProps,
            contentAlignX: 'center',
            ref,
            isHeader,
        },
        checkboxProps: {
            checked,
            checkedIcon,
            onClick: onCheckboxClick,
        },
    };
};

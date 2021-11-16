import { MouseEvent, useCallback } from 'react';

import { TableCheckboxCellPropsType } from '../type';
import { RefType } from '../../../../type';
import { tableCheckboxCellRootTestId } from '../constants';
import { TableCellEffectivePropsType } from '../../TableCell/type';

export const useTableCheckboxCell = <E extends HTMLTableCellElement>(
    {
        checked,
        checkedIcon,
        isHeader,
        ...restProps
    }: TableCheckboxCellPropsType,
    ref: RefType<E>,
) => {
    const onCheckboxClick = useCallback(
        (e: MouseEvent<HTMLLabelElement>) => e.preventDefault(),
        [],
    );

    return {
        rootProps: {
            'data-testid': tableCheckboxCellRootTestId,
            ...restProps,
            contentAlignX: 'center' as TableCellEffectivePropsType['contentAlignX'],
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

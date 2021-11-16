import { ComponentBehaviourCustomTagPropertyType } from '@deliveryhero/armor-system';

import { TableCellPropsType } from '../type';
import { tableCellRootTestId } from '../constants';

export const useTableCell = ({
    isHeader,
    ...restProps
}: TableCellPropsType) => {
    const tagName = isHeader ? 'th' : 'td';

    return {
        rootProps: {
            'data-testid': tableCellRootTestId,
            ...restProps,
            isHeader,
        },
        Tag: tagName as ComponentBehaviourCustomTagPropertyType,
    };
};

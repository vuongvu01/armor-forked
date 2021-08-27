import { TableCellPropsType } from '../type';
import { tableCellRootTestId } from '../constants';
import { ComponentBehaviourCustomTagPropertyType } from '../../../../system/types/ComponentBehaviourCustomTagType';

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

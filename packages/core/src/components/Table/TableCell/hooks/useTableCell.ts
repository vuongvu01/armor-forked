import { ComponentBehaviourCustomTagPropertyType } from '@deliveryhero/armor-system';

import { TableCellPropsType } from '../type';
import { tableCellRootTestId } from '../constants';

export const useTableCell = ({
    isHeader,
    maxLines,
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
        isShowTruncatedText: Boolean(maxLines),
        truncatedTextProps: {
            truncated: true,
            numOfLines: maxLines,
            typographyProps: {
                paragraph: true,
                large: true,
            },
        },
    };
};

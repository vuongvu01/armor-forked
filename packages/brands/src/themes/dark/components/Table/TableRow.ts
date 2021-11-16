import { css } from 'styled-components';
import { colorGrey70 } from '@deliveryhero/armor-system';

type TableRowRootPropsType = Partial<{
    isHeader: boolean;
}>;

export const getTableRowOverride = ({ isHeader }: TableRowRootPropsType) => {
    let result = {};

    if (!isHeader) {
        result = css`
            &:hover td {
                background-color: ${colorGrey70};
            }
        `;
    }

    return result;
};

import { css } from 'styled-components';
import {
    colorGrey70,
    colorGrey80,
    colorGrey60,
} from '@deliveryhero/armor-system';

type TableRowRootPropsType = Partial<{
    isHeader: boolean;
}>;

export const getTableRowOverride = ({ isHeader }: TableRowRootPropsType) => {
    let result = css`
        background-color: ${colorGrey80};
        border-bottom-color: ${colorGrey60};
    `;

    if (!isHeader) {
        result = css`
            ${result}

            &:hover td {
                background-color: ${colorGrey70};
            }
        `;
    }

    return result;
};

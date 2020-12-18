import { css } from 'styled-components';
import { colorGrey70 } from '../../../../../tokens';
import { TableRowRootPropsType } from '../../../../../components/Table/TableRow/type';

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

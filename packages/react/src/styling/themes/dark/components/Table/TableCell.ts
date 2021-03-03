import { css } from 'styled-components';
import { colorGrey70 } from '../../../../../tokens';
import { TableCellRootPropsType } from '../../../../../components/Table/TableCell/type';

export const getTableCellOverride = ({
    stickyVisible,
    stickyTop,
    stickyAlignment,
}: TableCellRootPropsType) => {
    let result = {};

    if (stickyVisible && (stickyTop || stickyAlignment)) {
        result = css`
            ${result};
            background-color: ${colorGrey70};
        `;
    }

    return result;
};

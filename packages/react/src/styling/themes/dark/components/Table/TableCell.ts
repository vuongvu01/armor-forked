import { css } from 'styled-components';
import { colorGrey60, colorGrey70 } from '../../../../../tokens';
import { TableCellRootPropsType } from '../../../../../components/Table/TableCell/type';

export const getTableCellOverride = ({
    isHeader,
    stickyVisible,
    stickyTop,
    stickyAlignment,
}: TableCellRootPropsType) => {
    let result = {};

    if (isHeader) {
        result = css`
            &:hover {
                background-color: ${colorGrey60};
            }
        `;
    }

    if (stickyVisible && (stickyTop || stickyAlignment)) {
        result = css`
            ${result};
            background-color: ${colorGrey70};
        `;
    }

    return result;
};

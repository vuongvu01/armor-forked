import { css } from 'styled-components';
import { colorGrey70 } from '@deliveryhero/armor-system';
import { TableCellPropsType } from '@deliveryhero/armor';

export const getTableCellOverride = ({
    stickyVisible,
    stickyTop,
    stickyAlignment,
}: TableCellPropsType) => {
    let result = {};

    if (stickyVisible && (stickyTop || stickyAlignment)) {
        result = css`
            ${result};
            background-color: ${colorGrey70};
        `;
    }

    return result;
};

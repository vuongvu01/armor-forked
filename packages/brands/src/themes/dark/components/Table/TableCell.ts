import { css } from 'styled-components';
import { colorGrey70, RIGHT } from '@deliveryhero/armor-system';
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

    if (!stickyTop && stickyAlignment === RIGHT && stickyVisible) {
        result = css`
            ${result};

            &::before {
                background-color: ${colorGrey70};
            }

            .TableRow--hovered &:not(th)::before {
                background-color: ${colorGrey70};
            }
        `;
    }

    return result;
};

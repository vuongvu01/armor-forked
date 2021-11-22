import styled, { css } from 'styled-components';
import {
    color,
    getComponentOverride,
    makeBEM,
    durationNormal,
} from '@deliveryhero/armor-system';

import { TableHeadCellRootPropsType } from './type';
import { TableCell } from '../TableCell';
import { TABLE_HEAD_CELL_CLASS_PREFIX } from './constants';

const getRootStyle = ({ sortingEnabled }: TableHeadCellRootPropsType) => {
    let result = {};

    if (sortingEnabled) {
        result = css`
            ${result};
            cursor: pointer;
            user-select: none;
        `;
    }

    return result;
};

const alphabeticalIconClassName = makeBEM(
    TABLE_HEAD_CELL_CLASS_PREFIX,
    'AlphabeticalIcon',
);
const numericalIconClassName = makeBEM(
    TABLE_HEAD_CELL_CLASS_PREFIX,
    'NumericalIcon',
);

/** 👉 ROOT ELEMENT */
export const TableHeadCellRoot = styled(TableCell)<TableHeadCellRootPropsType>`
    .${alphabeticalIconClassName}, .${numericalIconClassName} {
        opacity: 0;
        transition: opacity ${durationNormal}ms ease;
    }
    &:hover {
        .${alphabeticalIconClassName}, .${numericalIconClassName} {
            opacity: 1;
        }
        background-color: ${color('primary.lightest')};
    }

    ${getRootStyle};
    ${getComponentOverride('TableHeadCell')};
`;

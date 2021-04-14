import styled, { css } from 'styled-components';
import { TableHeadCellRootPropsType } from './type';
import {
    color,
    paddingAttributes,
    getComponentOverride,
} from '../../../system';
import { makeBEM } from '../../../utils';
import { TableCell } from '../TableCell';
import { transitionDurationInSec } from '../../../constants';
import { TABLE_HEAD_CELL_CLASS_PREFIX } from './constants';

const getRootDynamicStyle = ({
    theme,
    sortingEnabled,
}: TableHeadCellRootPropsType) => {
    const {
        componentOverrides: { TableHeadCell },
    } = theme;

    let result = TableHeadCell.Root.base;

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

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableHeadCellRoot = styled(TableCell)<TableHeadCellRootPropsType>`
    .${alphabeticalIconClassName}, .${numericalIconClassName} {
        opacity: 0;
        transition: opacity ${transitionDurationInSec}s ease;
    }
    &:hover {
        .${alphabeticalIconClassName}, .${numericalIconClassName} {
            opacity: 1;
        }
        background-color: ${color('primary.lightest')};
    }

    ${getRootDynamicStyle};
    ${getComponentOverride('TableHeadCell')};
    ${paddingAttributes};
`;

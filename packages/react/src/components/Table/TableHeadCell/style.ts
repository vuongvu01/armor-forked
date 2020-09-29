import styled, { css } from 'styled-components';
import { TableHeadCellRootPropsType } from './type';
import { marginAttributes } from '../../../system/attributes';
import { makeBEM, shouldForwardProp } from '../../../utils';
import { TableCell } from '../TableCell';
import { makePropList } from '../../../utils/makePropList';
import { transitionDurationInSec } from '../../../constants';
import { TABLE_HEAD_CELL_CLASS_PREFIX } from './constants';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    'sortingEnabled',
    'sortable',
    'columnId',
    'sortType',
]);

const getRootBaseStyle = ({ theme }: TableHeadCellRootPropsType) =>
    theme.componentOverrides.TableHeadCell.Root.base;

const getRootDynamicStyle = ({
    theme,
    sortingEnabled,
}: TableHeadCellRootPropsType) => {
    const {
        componentOverrides: { TableHeadCell },
    } = theme;

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

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableHeadCellRoot = styled(TableCell).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TableHeadCellRootPropsType>`
    .${alphabeticalIconClassName}, .${numericalIconClassName} {
        opacity: 0;
        transition: opacity ${transitionDurationInSec}s ease;
    }
    &:hover {
        .${alphabeticalIconClassName}, .${numericalIconClassName} {
            opacity: 1;
        }
    }

    ${getRootBaseStyle}
    ${getRootDynamicStyle}
    ${marginAttributes}
`;

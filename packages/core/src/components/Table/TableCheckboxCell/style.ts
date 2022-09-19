import styled from 'styled-components';
import {
    color,
    getComponentOverride,
    spacing,
} from '@deliveryhero/armor-system';

import { Checkbox } from '../../Checkbox';
import { TableCell } from '../TableCell';
import { TABLE_CHECKBOX_CELL_WIDTH } from './constants';

/** 👉 ROOT ELEMENT */
export const TableCheckboxCellRoot = styled(TableCell)`
    cursor: pointer;
    width: ${TABLE_CHECKBOX_CELL_WIDTH}px;

    &:hover {
        background-color: ${color('primary.lightest')};
    }

    & + .TableCell-Root {
        padding-left: ${spacing(2)};
    }

    ${getComponentOverride('TableCheckboxCell')};
`;

export const TableCheckboxCellCheckbox = styled(Checkbox)`
    display: block;
    margin-top: ${spacing(0.5)};
`;

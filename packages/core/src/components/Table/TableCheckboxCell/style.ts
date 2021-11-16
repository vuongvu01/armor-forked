import styled from 'styled-components';
import { color, getComponentOverride } from '@deliveryhero/armor-system';

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
    ${getComponentOverride('TableCheckboxCell')};
`;

export const TableCheckboxCellCheckbox = styled(Checkbox)`
    display: block;
    margin-top: 2px;
`;

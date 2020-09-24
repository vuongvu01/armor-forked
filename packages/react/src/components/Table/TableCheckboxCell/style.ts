import styled from 'styled-components';
import { Checkbox } from '../../Checkbox';
import { TableCell } from '../TableCell';
import { TABLE_CHECKBOX_CELL_WIDTH } from './constants';

export const TableCheckboxCellRoot = styled(TableCell)`
    cursor: pointer;
    width: ${TABLE_CHECKBOX_CELL_WIDTH};
`;

export const TableCheckboxCellCheckbox = styled(Checkbox)`
    margin-top: 2px;
`;

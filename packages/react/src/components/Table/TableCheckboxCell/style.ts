import styled from 'styled-components';
import { Checkbox } from '../../Checkbox';
import { TableCell } from '../TableCell';
import { TABLE_CHECKBOX_CELL_WIDTH } from './constants';
import { TableCheckboxCellPropsType } from './type';

export const TableCheckboxCellRoot = styled(TableCell)`
    cursor: pointer;
    width: ${TABLE_CHECKBOX_CELL_WIDTH}px;
`;

export const TableCheckboxCellCheckbox = styled(Checkbox)<
    Pick<TableCheckboxCellPropsType, 'isHeader'>
>`
    display: block;
    margin-top: 2px;
`;

import styled from 'styled-components';
import { Checkbox } from '../../Checkbox';
import { TableCell } from '../TableCell';
import { TABLE_CHECKBOX_CELL_WIDTH } from './constants';
import { getPropsBlocker } from '../../../utils';

export const TableCheckboxCellRoot = styled(TableCell).withConfig(
    getPropsBlocker({}, false),
)`
    cursor: pointer;
    width: ${TABLE_CHECKBOX_CELL_WIDTH}px;
`;

export const TableCheckboxCellCheckbox = styled(Checkbox).withConfig(
    getPropsBlocker({}, false),
)`
    display: block;
    margin-top: 2px;
`;

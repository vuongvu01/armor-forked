import styled from 'styled-components';
import { Checkbox } from '../../Checkbox';
import { TableCell } from '../TableCell';
import { TABLE_CHECKBOX_CELL_WIDTH } from './constants';
import { getPropsBlocker } from '../../../utils';
import { color } from '../../../system';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';

export const TableCheckboxCellRoot = styled(TableCell).withConfig(
    getPropsBlocker({}, false),
)`
    cursor: pointer;
    width: ${TABLE_CHECKBOX_CELL_WIDTH}px;
    &:hover {
        background-color: ${color('primary.lightest')};
    }
    ${getComponentOverride('TableCheckboxCell')};
`;

export const TableCheckboxCellCheckbox = styled(Checkbox).withConfig(
    getPropsBlocker({}, false),
)`
    display: block;
    margin-top: 2px;
`;

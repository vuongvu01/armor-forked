import styled from 'styled-components';
import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
    spacing,
} from '../../system';
import { getPropsBlocker } from '../../utils';
import { DataTableFooterPropsType, DataTableRootPropsType } from './type';

export const DataTableRoot = styled.div.withConfig(getPropsBlocker())<
    DataTableRootPropsType
>`
    box-sizing: border-box;

    ${sizeAttributes}
    ${paddingAttributes}
    ${marginAttributes}
`;

export const DataTableFooter = styled.div<DataTableFooterPropsType>`
    margin-top: ${spacing(3)};
    display: flex;
    justify-content: flex-end;
`;

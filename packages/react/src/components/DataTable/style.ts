import styled from 'styled-components';
import {
    marginAttributes,
    paddingAttributes,
    propsBlocker,
    sizeAttributes,
    spacing,
} from '../../system';
import { DataTableFooterPropsType, DataTableRootPropsType } from './type';

export const DataTableRoot = styled.div.withConfig(propsBlocker)<
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

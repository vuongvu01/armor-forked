import styled from 'styled-components';
import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
} from '../../system/attributes';
import { getPropsBlocker } from '../../utils';
import { DataTableFooterPropsType, DataTableRootPropsType } from './type';
import { spacing } from '../../system/mixins';

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

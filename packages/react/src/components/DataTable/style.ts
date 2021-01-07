import styled from 'styled-components';
import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
} from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { DataTableFooterPropsType, DataTableRootPropsType } from './type';
import { spacing } from '../../system/mixins';

export const DataTableRoot = styled.div.withConfig({
    shouldForwardProp: property =>
        shouldForwardProp(property, { horizontalScroll: true }),
})<DataTableRootPropsType>`
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

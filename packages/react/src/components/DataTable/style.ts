import styled from 'styled-components';
import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
} from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { DataTableRootPropsType } from './type';

export const DataTableRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<DataTableRootPropsType>`
    box-sizing: border-box;

    ${sizeAttributes}
    ${paddingAttributes}
    ${marginAttributes}
`;

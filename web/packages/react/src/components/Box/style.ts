import styled from 'styled-components';
import { BoxRootPropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
    textAlignmentAttributes,
} from '../../system/attributes';

export const BoxRoot = styled.div<BoxRootPropsType>`
    ${marginAttributes}
    ${paddingAttributes}
    ${sizeAttributes}
    ${textAlignmentAttributes}
    ${(props: BoxRootPropsType) => props.styles(props)}
`;

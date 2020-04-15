import styled from 'styled-components';
import { BoxRootStylePropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
    textAlignmentAttributes,
} from '../../system/attributes';

export const BoxRoot = styled.div<BoxRootStylePropsType>`
    ${marginAttributes}
    ${paddingAttributes}
    ${sizeAttributes}
    ${textAlignmentAttributes}
    ${props => props.styles(props)}
`;

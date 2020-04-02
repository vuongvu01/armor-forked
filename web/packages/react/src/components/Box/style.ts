import styled from 'styled-components';
import { BoxRootStylePropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
} from '../../system/attributes';

export const BoxRoot = styled.div<BoxRootStylePropsType>`
    ${marginAttributes}
    ${paddingAttributes}
    ${sizeAttributes}
    ${props => props.styles(props)}
`;

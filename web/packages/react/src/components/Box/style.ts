import styled from 'styled-components';
import { RootStylePropertiesBoxType } from './type';
import {
    spanOuterAttributes,
    spanInnerAttributes,
    sizeAttributes,
} from '../../system/attributes';

export const BoxRoot = styled.div<RootStylePropertiesBoxType>`
    ${spanOuterAttributes}
    ${spanInnerAttributes}
    ${sizeAttributes}
    ${props => props.styles(props)}
`;

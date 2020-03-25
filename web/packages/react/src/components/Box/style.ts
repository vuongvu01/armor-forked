import styled from 'styled-components';
import { RootStylePropertiesBoxType } from './type';
import {
    spacingOuterAttributes,
    spacingInnerAttributes,
    sizingAttributes,
} from '../../system/attributes';

export const BoxRoot = styled.div<RootStylePropertiesBoxType>`
    ${spacingOuterAttributes}
    ${spacingInnerAttributes}
    ${sizingAttributes}
    ${props => props.styles(props)}
`;

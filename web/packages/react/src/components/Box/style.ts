import styled from 'styled-components';
import { ThemeType } from '../../themes';
import { StylesFunctionBoxType } from './type';
import {
    spacingOuterAttributes,
    spacingInnerAttributes,
    sizingAttributes,
} from '../../system/attributes';

export const BoxRoot = styled.div<{
    theme: ThemeType;
    styles: StylesFunctionBoxType;
}>`
    ${props => props.styles(props)}
    ${spacingOuterAttributes}
    ${spacingInnerAttributes}
    ${sizingAttributes}
`;

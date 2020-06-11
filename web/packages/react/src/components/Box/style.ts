import styled from 'styled-components';
import { BoxRootPropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
    textAlignmentAttributes,
} from '../../system/attributes';
import { shouldForwardProp } from '../../utils';

export const BoxRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<BoxRootPropsType>`
    ${marginAttributes}
    ${paddingAttributes}
    ${sizeAttributes}
    ${textAlignmentAttributes}
    ${(props: BoxRootPropsType) => props.styles(props)}
`;

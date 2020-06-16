import styled from 'styled-components';
import { BoxRootPropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
    textAlignmentAttributes,
    displayAttributes,
} from '../../system/attributes';
import { shouldForwardProp } from '../../utils';

export const BoxRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<BoxRootPropsType>`
    ${marginAttributes}
    ${paddingAttributes}
    ${sizeAttributes}
    ${textAlignmentAttributes}
    ${displayAttributes}
    ${(props: BoxRootPropsType) => props.styles(props)}
`;

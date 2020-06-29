import styled from 'styled-components';

import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
    textAlignmentAttributes,
    displayAttributes,
} from 'src/system/attributes';
import { shouldForwardProp } from 'src/utils';
import { BoxRootPropsType } from './type';

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

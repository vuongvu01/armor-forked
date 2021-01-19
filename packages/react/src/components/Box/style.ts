import styled from 'styled-components';

import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
    textAlignmentAttributes,
    displayAttributes,
    colorAttributes,
} from '../../system/attributes';
import { getPropsBlocker } from '../../utils';
import { BoxRootPropsType } from './type';

export const BoxRoot = styled.div.withConfig(getPropsBlocker())<
    BoxRootPropsType
>`
    ${marginAttributes}
    ${paddingAttributes}
    ${sizeAttributes}
    ${textAlignmentAttributes}
    ${displayAttributes}
    ${colorAttributes}
`;

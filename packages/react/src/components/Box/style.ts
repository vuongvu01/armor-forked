import styled from 'styled-components';

import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
    textAlignmentAttributes,
    displayAttributes,
    colorAttributes,
    propsBlocker,
} from '../../system';
import { BoxRootPropsType } from './type';

export const BoxRoot = styled.div.withConfig(propsBlocker)<BoxRootPropsType>`
    ${marginAttributes};
    ${paddingAttributes};
    ${sizeAttributes};
    ${textAlignmentAttributes};
    ${displayAttributes};
    ${colorAttributes};
`;

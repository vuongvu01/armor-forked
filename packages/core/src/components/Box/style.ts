import styled from 'styled-components';
import {
    marginProps,
    paddingProps,
    sizeProps,
    textAlignmentProps,
    displayProps,
    colorProps,
    propsBlocker,
} from '@deliveryhero/armor-system';

import { BoxRootPropsType } from './type';

export const BoxRoot = styled.div.withConfig(propsBlocker)<BoxRootPropsType>`
    ${marginProps};
    ${paddingProps};
    ${sizeProps};
    ${textAlignmentProps};
    ${displayProps};
    ${colorProps};
`;

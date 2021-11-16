import styled from 'styled-components';
import {
    marginProps,
    paddingProps,
    sizeProps,
    propsBlocker,
    spacing,
} from '@deliveryhero/armor-system';

import { ContainerRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const ContainerRoot = styled.div.withConfig(propsBlocker)<
    ContainerRootPropsType
>`
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding: 0 ${spacing(2)};
    ${sizeProps}
    ${paddingProps}
    ${marginProps}
`;

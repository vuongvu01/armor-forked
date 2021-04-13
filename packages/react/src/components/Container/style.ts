import styled from 'styled-components';
import { ContainerRootPropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
    propsBlocker,
    spacing,
} from '../../system';

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const ContainerRoot = styled.div.withConfig(propsBlocker)<
    ContainerRootPropsType
>`
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding: 0 ${spacing(2)};
    ${sizeAttributes}
    ${paddingAttributes}
    ${marginAttributes}
`;

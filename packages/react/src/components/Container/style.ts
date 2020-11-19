import styled from 'styled-components';
import { ContainerRootPropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
} from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { spacing } from '../../system/mixins';

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const ContainerRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<ContainerRootPropsType>`
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding: 0 ${spacing(2)};
    ${sizeAttributes}
    ${paddingAttributes}
    ${marginAttributes}
`;

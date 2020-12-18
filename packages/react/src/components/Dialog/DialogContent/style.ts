import styled from 'styled-components';
import { DialogContentRootPropsType } from './type';
import { makePropList, shouldForwardProp } from '../../../utils';

const propertyList = makePropList(['enableVerticalScroll']);

export const DialogContentRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<DialogContentRootPropsType>`
    ${({ enableVerticalScroll }) =>
        enableVerticalScroll ? 'overflow-y: auto;' : ''}
    ${({ theme }) => theme.componentOverrides.DialogContent.Root.base}
`;

import styled from 'styled-components';
import { DialogContentRootPropsType } from './type';
import { makePropList, shouldForwardProp } from '../../../utils';
import { typography } from '../../../system/mixins';

const propertyList = makePropList(['enableVerticalScroll']);

export const DialogContentRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<DialogContentRootPropsType>`
    ${typography('paragraphLarge')};
    ${({ enableVerticalScroll }) =>
        enableVerticalScroll ? 'overflow-y: auto;' : ''}
    ${({ theme }) => theme.componentOverrides.DialogContent.Root.base}
`;

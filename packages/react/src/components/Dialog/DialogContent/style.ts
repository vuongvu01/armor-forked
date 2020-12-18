import styled from 'styled-components';
import { DialogContentRootPropsType } from './type';
import { makePropList, shouldForwardProp } from '../../../utils';
import { Typography } from '../../Typography';

const propertyList = makePropList(['enableVerticalScroll']);

export const DialogContentRoot = styled(Typography).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<DialogContentRootPropsType>`
    ${({ enableVerticalScroll }) =>
        enableVerticalScroll ? 'overflow-y: auto;' : ''}
    ${({ theme }) => theme.componentOverrides.DialogContent.Root.base}
`;

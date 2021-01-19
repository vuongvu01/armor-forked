import styled from 'styled-components';
import { DialogContentRootPropsType } from './type';
import { getPropsBlocker, makePropList } from '../../../utils';
import { typography } from '../../../system/mixins';

const propertyList = makePropList(['enableVerticalScroll']);

export const DialogContentRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DialogContentRootPropsType>`
    ${typography('paragraphLarge')};
    ${({ enableVerticalScroll }) =>
        enableVerticalScroll ? 'overflow-y: auto;' : ''}
    ${({ theme }) => theme.componentOverrides.DialogContent.Root.base}
`;

import styled from 'styled-components';
import { DialogContentRootPropsType } from './type';
import { getPropsBlocker } from '../../../utils';
import { typography, paddingAttributes, spacing } from '../../../system';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';

const propertyList = {
    enableVerticalScroll: true,
};

export const DialogContentRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DialogContentRootPropsType>`
    ${typography('paragraphLarge')};
    ${({ enableVerticalScroll }) =>
        enableVerticalScroll ? 'overflow-y: auto;' : ''}

    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: ${spacing(6)};
    padding-right: ${spacing(6)};
    &:first-child {
        padding-top: ${spacing(8)};
    }
    &:last-child {
        padding-bottom: ${spacing(8)};
    }

    ${({ theme }) => theme.componentOverrides.DialogContent.Root.base}
    ${getComponentOverride('DialogContent')};
    ${paddingAttributes};
`;

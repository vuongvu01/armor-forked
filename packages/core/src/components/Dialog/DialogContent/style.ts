import styled from 'styled-components';
import {
    typography,
    paddingProps,
    spacing,
    propsBlocker,
    getComponentOverride,
} from '@deliveryhero/armor-system';

import { DialogContentRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const DialogContentRoot = styled.div.withConfig(propsBlocker)<
    DialogContentRootPropsType
>`
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
    ${paddingProps};
`;

import styled from 'styled-components';
import {
    color,
    getComponentOverride,
    spacing,
    typography,
    token,
} from '@deliveryhero/armor-system';

import { SideSheetFooterRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const SideSheetFooterRoot = styled.div<SideSheetFooterRootPropsType>`
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    display: flex;
    height: 64px;
    border-top: 1px solid ${color('neutral.03')};
    padding-top: ${spacing(6)};
    margin: 0 ${spacing(6)} ${spacing(6)} ${spacing(6)};
    ${getComponentOverride('SideSheetFooter')};
`;

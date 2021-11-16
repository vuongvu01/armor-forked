import styled from 'styled-components';
import {
    color,
    getComponentOverride,
    spacing,
    typography,
    componentSpacing06,
} from '@deliveryhero/armor-system';

import { SideSheetFooterRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const SideSheetFooterRoot = styled.div<SideSheetFooterRootPropsType>`
    ${typography('paragraphMedium')};
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    display: flex;
    height: 64px;
    margin: 0;
    border-top: 1px solid ${color('neutral.03')};
    padding-top: ${spacing(componentSpacing06)};
    margin: 0 ${spacing(componentSpacing06)} ${spacing(componentSpacing06)}
        ${spacing(componentSpacing06)};
    ${getComponentOverride('SideSheetFooter')};
`;

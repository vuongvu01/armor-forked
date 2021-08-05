import styled from 'styled-components';

import { SideSheetFooterRootPropsType } from './type';
import {
    color,
    getComponentOverride,
    spacing,
    typography,
} from '../../../system';
import { componentSpacing06 } from '../../../tokens';

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
    ${getComponentOverride('SideSheetFooter')};
`;

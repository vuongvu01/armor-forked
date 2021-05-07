import styled from 'styled-components';

import { SideSheetFooterRootPropsType } from './type';
import { Typography } from '../../Typography';
import { color, getComponentOverride, spacing } from '../../../system';
import { componentSpacing06 } from '../../../tokens';

/** 👉 ROOT ELEMENT */
export const SideSheetFooterRoot = styled(Typography)<
    SideSheetFooterRootPropsType
>`
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

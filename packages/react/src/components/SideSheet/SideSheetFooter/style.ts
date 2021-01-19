import styled from 'styled-components';

import { SideSheetFooterPropsType } from './type';
import { Typography } from '../../Typography';
import { getPropsBlocker } from '../../../utils';

const footerStyle = ({ theme }: SideSheetFooterPropsType) => {
    const SideSheet = theme?.componentOverrides?.SideSheet;
    return SideSheet.Footer.base;
};

export const SideSheetFooter = styled(Typography).withConfig(
    getPropsBlocker({}, false),
)<SideSheetFooterPropsType>`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 64px;
    margin: 0;

    ${footerStyle}
`;

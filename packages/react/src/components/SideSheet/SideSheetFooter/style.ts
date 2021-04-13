import styled from 'styled-components';

import { SideSheetFooterPropsType } from './type';
import { Typography } from '../../Typography';

const footerStyle = ({ theme }: SideSheetFooterPropsType) => {
    const SideSheet = theme?.componentOverrides?.SideSheet;
    return SideSheet.Footer.base;
};

export const SideSheetFooter = styled(Typography)<SideSheetFooterPropsType>`
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    display: flex;
    height: 64px;
    margin: 0;

    ${footerStyle};
`;

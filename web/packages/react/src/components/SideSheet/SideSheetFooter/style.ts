import styled from 'styled-components';

import { SideSheetFooterPropsType } from './type';

const footerStyle = ({ theme }: SideSheetFooterPropsType) => {
    const SideSheet = theme?.componentOverrides?.SideSheet;
    return SideSheet.Footer.base;
};

export const SideSheetFooter = styled.div<SideSheetFooterPropsType>`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 64px;

    ${footerStyle}
`;

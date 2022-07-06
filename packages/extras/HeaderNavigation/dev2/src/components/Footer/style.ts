import styled from 'styled-components';
import {
    muiTypography,
    muiColor,
    muiSpacing,
    contentAlignment,
} from '@gannochenko/ui.styled-components';

// @ts-ignore
export const FooterRoot = styled.footer`
    position: relative;
    margin: 0;
    padding: ${muiSpacing(5)};
    ${contentAlignment('center', 'center', 'column')};
    background-color: ${muiColor('primary.main')};
    color: ${muiColor('primary.contrastText')};
    ${muiTypography('body2')};
`;

export const FooterInfo = styled.div`
    &:not(:first-child) {
        padding-top: ${muiSpacing(2)};
    }
    text-align: center;
`;

export const FooterNoWrap = styled.span`
    white-space: nowrap;
`;

export const CICDLink = styled.a`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20px;
    height: 20px;
    cursor: default;
`;

export const AnalyticsLink = styled.a`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    cursor: default;
`;

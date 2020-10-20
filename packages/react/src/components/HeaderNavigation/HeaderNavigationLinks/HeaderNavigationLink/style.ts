import styled, { css } from 'styled-components';
import {
    HeaderNavigationLinkHrefLinkRootPropsType,
    HeaderNavigationLinkRootPropsType,
} from './type';
import { PackItem } from '../../../Pack';
import { colorGrey90 } from '../../../../tokens';

const navigationLinkRootStyle = ({
    isActive,
    href,
    theme: {
        componentOverrides: { HeaderNavigationLink },
    },
}: HeaderNavigationLinkRootPropsType) => {
    let result = HeaderNavigationLink.Root.base;

    if (isActive) {
        result = css`
            ${result};
            padding-bottom: 10px;
            border-bottom-width: 2px;
            border-bottom-style: solid;
            ${HeaderNavigationLink.Root.active}
        `;
    }

    if (href) {
        result = css`
            ${result};
            text-decoration: none;
            ${HeaderNavigationLink.Root.href}
        `;
    }

    return result;
};

export const HeaderNavigationLinkRoot = styled(PackItem)<
    HeaderNavigationLinkRootPropsType
>`
    cursor: pointer;
    text-decoration: none;

    ${navigationLinkRootStyle}
`;

const hrefLinkRootStyle = ({
    isActive,
    theme: {
        componentOverrides: { HeaderNavigationLink },
    },
}: HeaderNavigationLinkRootPropsType) => {
    let result = HeaderNavigationLink.Href.base;

    if (isActive) {
        result = css`
            ${result};
            height: 46px;
        `;
    }

    return result;
};

export const HrefLinkRoot = styled.a<HeaderNavigationLinkHrefLinkRootPropsType>`
    text-decoration: none;
    border: none;
    box-sizing: border-box;
    display: inline-flex;

    ${hrefLinkRootStyle}
`;

export const reactRouterLinkStyle = {
    textDecoration: 'none',
    color: colorGrey90,
};

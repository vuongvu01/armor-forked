import styled, { css } from 'styled-components';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    color,
    widthProps,
    borderRadius,
    token,
} from '@deliveryhero/armor-system';
import { ContentSwitcherRootPropsType } from './type';

const getRootStyle = () => {
    const result = css`
        display: inline-flex;
        border: 1px solid ${color('neutral.03')};
        border-radius: ${borderRadius('soft')};
        background-color: ${color('neutral.00')};
    `;

    return result;
};

/** 👉 ROOT ELEMENT */
export const ContentSwitcherRoot = styled.div.withConfig(
    propsBlocker,
)<ContentSwitcherRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    ${getRootStyle};
    ${getComponentOverride('ContentSwitcher')};
    ${marginProps};
    ${widthProps}
`;

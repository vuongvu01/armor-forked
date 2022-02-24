import styled, { css } from 'styled-components';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    color,
    sizeProps,
    transition,
} from '@deliveryhero/armor-system';

import {
    FilterLayoutRootPropsType,
    FilterLayoutLeftBarPropsType,
    FilterLayoutLeftBarContainerPropsType,
    FilterLayoutMainPropsType,
} from './type';

const getRootStyle = ({ enableTopSeparator }: FilterLayoutRootPropsType) => {
    let result = {};

    if (enableTopSeparator !== false) {
        result = css`
            ${result};
            border-top: 1px solid ${color('neutral.03')};
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const FilterLayoutRoot = styled.div.withConfig(
    propsBlocker,
)<FilterLayoutRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    display: flex;

    ${getRootStyle}
    ${getComponentOverride('FilterLayout')};
    ${marginProps};
    ${sizeProps};
`;

export const FilterLayoutLeftBar = styled.div.withConfig(
    propsBlocker,
)<FilterLayoutLeftBarPropsType>`
    flex: 0 0 ${({ open }) => spacing(open ? 84 : 0)}; // (8 + 280 + 24 + 24) / 4 = 84
    ${transition({ 'flex-basis': true })};
    overflow-x: hidden;
`;

export const FilterLayoutLeftBarContainer = styled.div.withConfig(
    propsBlocker,
)<FilterLayoutLeftBarContainerPropsType>`
    margin-right: ${spacing(6)};
    border-right: 1px solid ${color('neutral.03')};
    height: 100%;
`;

export const FilterLayoutMain = styled.div.withConfig(
    propsBlocker,
)<FilterLayoutMainPropsType>`
    flex: 1 1 auto;
`;

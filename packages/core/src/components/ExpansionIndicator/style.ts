import styled, { css } from 'styled-components';
import { ArrowDownIcon } from '@deliveryhero/armor-icons';
import {
    marginProps,
    color,
    transition,
    propsBlocker,
    expansion,
    getComponentOverride,
    paddingProps,
} from '@deliveryhero/armor-system';

import {
    ExpansionIndicatorContentPropsType,
    ExpansionIndicatorIconPropsType,
    ExpansionIndicatorRootPropsType,
} from './type';

const getRootStyle = ({ disabled }: ExpansionIndicatorRootPropsType) => {
    let result = {};

    if (disabled) {
        result = css`
            ${result};
            cursor: not-allowed;
            color: ${color('neutral.05')};
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const ExpansionIndicatorRoot = styled.div.withConfig(
    propsBlocker,
)<ExpansionIndicatorRootPropsType>`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    outline: none;

    ${getRootStyle};
    ${getComponentOverride('ExpansionIndicator')};
    ${marginProps};
    ${paddingProps};
`;

export const ExpansionIndicatorContent = styled.div.withConfig(
    propsBlocker,
)<ExpansionIndicatorContentPropsType>`
    align-items: center;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: transparent;
    display: flex;
    height: calc(100% - 16px);
    justify-content: center;
    width: 100%;
`;

export const ExpansionIndicatorIcon = styled(
    ArrowDownIcon,
)<ExpansionIndicatorIconPropsType>`
    ${transition({ transform: true })};
    ${expansion(180)};
`;

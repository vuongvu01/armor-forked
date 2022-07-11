import styled, { css } from 'styled-components';
import {
    marginProps,
    color,
    spacing,
    borderRadius,
    token,
    propsBlocker,
    getComponentOverride,
    colorProps,
    durationNormal,
    focus,
} from '@deliveryhero/armor-system';

import { IconButtonRootPropsType } from './type';

const getRootStyle = ({
    light,
    visible,
    disabled,
}: IconButtonRootPropsType) => {
    let result = {};

    if (light) {
        result = css`
            ${result};
            &:hover {
                background-color: ${color(
                    light ? 'neutral.02' : 'primary.lightest',
                )};
            }
        `;
    }

    if (visible === false) {
        result = css`
            ${result};
            visibility: hidden;
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            cursor: not-allowed;
            svg {
                color: ${color('neutral.05')};
            }
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const IconButtonRoot = styled.button.withConfig(
    propsBlocker,
)<IconButtonRootPropsType>`
    box-sizing: border-box;
    border-radius: ${borderRadius('soft')};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    appearance: none;
    border: 0 none;
    padding: 0;
    width: ${spacing(8)};
    height: ${spacing(8)};

    transition: background-color ${durationNormal}ms ease-in;
    background-color: transparent;
    color: ${token('body.color')};

    ${getRootStyle};
    ${getComponentOverride('IconButton')};
    ${focus()};
    ${marginProps};
    ${colorProps};
`;

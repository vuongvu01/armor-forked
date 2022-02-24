import styled, { css } from 'styled-components';
import {
    marginProps,
    getComponentOverride,
    propsBlocker,
    mouseCursor,
    getOutlineFocusStyleFromColor,
    transition,
    color,
    token,
} from '@deliveryhero/armor-system';

import {
    RadioMarkPropsType,
    RadioInputPropsType,
    RadioRootPropsType,
} from './type';

const sizes = {
    container: {
        side: 16,
    },
    dot: {
        side: 8,
        offset: 4,
    },
};

const getContainerStyle = ({ disabled }: RadioInputPropsType) => {
    if (disabled) {
        return css`
            background-color: ${color('neutral.02')};
        `;
    }

    return css`
        background-color: ${color('neutral.00')};
    `;
};

const getDotStyle = ({ disabled }: RadioInputPropsType) => {
    if (disabled) {
        return css`
            background-color: ${color('neutral.03')};
        `;
    }

    return css`
        background-color: ${color('primary.main')};
    `;
};

/** 👉 ROOT ELEMENT */
export const RadioRoot = styled.div.withConfig(
    propsBlocker,
)<RadioRootPropsType>`
    ${getComponentOverride('Radio')};
    ${marginProps};
`;

export const RadioMark = styled.label.withConfig(
    propsBlocker,
)<RadioMarkPropsType>`
    cursor: pointer;
    display: inline-flex;
    padding-left: ${sizes.container.side}px;
    position: relative;

    &:before,
    &:after {
        ${transition({
            outline: true,
            'background-color': true,
            'border-color': true,
            transform: true,
            opacity: true,
        })}
    }

    ${mouseCursor};
`;

export const RadioInput = styled.input.withConfig(
    propsBlocker,
)<RadioInputPropsType>`
    height: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    width: 0;

    &:not(:checked) + ${RadioMark}:before, &:checked + ${RadioMark}:before {
        border-style: solid;
        border-width: 1px;
        bottom: 0;
        box-sizing: border-box;
        content: '';
        height: ${sizes.container.side}px;
        left: 0;
        margin: auto;
        position: absolute;
        top: 0;
        width: ${sizes.container.side}px;
        border-radius: ${token('shape.borderRadius.pill')};
        border-color: ${color('neutral.03')};
        ${getContainerStyle};
    }

    &:not(:checked) + ${RadioMark}:after, &:checked + ${RadioMark}:after {
        bottom: 0;
        content: '';
        height: ${sizes.dot.side}px;
        left: ${sizes.dot.offset}px;
        margin: auto;
        position: absolute;
        top: 0;
        width: ${sizes.dot.side}px;
        border-radius: ${token('shape.borderRadius.pill')};
        ${getDotStyle};
    }

    &:not(:checked) + ${RadioMark}:after {
        opacity: 0;
        transform: scale(0);
    }

    &:checked + ${RadioMark}:after {
        opacity: 1;
        transform: scale(1);
    }

    &:not(:disabled):checked + ${RadioMark}:before {
        border-color: ${color('primary.main')};
    }

    &:not(:disabled):checked
        + ${RadioMark}:hover:before,
        &:not(:disabled):not(:checked)
        + ${RadioMark}:hover:before {
        border-color: ${color('primary.light')};
    }

    &:not(:disabled):checked + ${RadioMark}:hover:after {
        background-color: ${color('primary.light')};
    }

    &:focus-visible + ${RadioMark}:before {
        ${getOutlineFocusStyleFromColor('primary.07')}
        border-color: ${color('primary.light')};
    }
`;

import styled, { css } from 'styled-components';
import {
    mouseCursor,
    pointerEvents,
    getComponentOverride,
    propsBlocker,
    getFocusStyleFromColor,
    transition,
} from '@deliveryhero/armor-system';

import {
    SwitchCheckboxInputPropsType,
    SwitchRootPropsType,
    SwitchTogglePropsType,
} from './type';
import { color } from '../../compatibility';

const sizes = {
    dimensions: {
        width: 32,
        height: 18,
        padding: 2,
    },
    toggle: {
        side: 14,
    },
};

const getDisabledToggleStyle = ({
    checked,
    defaultChecked,
}: SwitchCheckboxInputPropsType) =>
    !(checked || defaultChecked)
        ? css`
              background-color: ${color('neutral.02')};
          `
        : '';

/** 👉 ROOT ELEMENT */
export const SwitchRoot = styled.label.withConfig(
    propsBlocker,
)<SwitchRootPropsType>`
    display: inline-flex;
    align-items: center;
    ${getComponentOverride('Switch')};
    ${mouseCursor};
`;

export const SwitchToggle = styled.span.withConfig(
    propsBlocker,
)<SwitchTogglePropsType>`
    position: relative;
    display: inline-flex;
    border-radius: 9999px;
    ${transition({ all: true })};
    width: ${sizes.dimensions.width}px;
    height: ${sizes.dimensions.height}px;

    &::after {
        content: '';
        position: absolute;
        bottom: ${sizes.dimensions.padding}px;
        left: ${sizes.dimensions.padding}px;
        width: ${sizes.toggle.side}px;
        height: ${sizes.toggle.side}px;
        border-radius: 9999px;
        ${transition({ all: true })};
        background-color: ${color('neutral.00')};
    }

    ${pointerEvents};
    background-color: ${color('neutral.07')};
    ${mouseCursor};
`;

export const SwitchCheckboxInput = styled.input.withConfig(
    propsBlocker,
)<SwitchCheckboxInputPropsType>`
    opacity: 0;
    margin: 0;
    width: 0;
    height: 0;
    pointer-events: none;
    position: absolute;

    &:checked + ${SwitchToggle} {
        background-color: ${color('primary.main')};
    }

    &:checked + ${SwitchToggle}:hover {
        background-color: ${color('primary.light')};
    }

    &:checked + ${SwitchToggle}:after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }

    &:disabled + ${SwitchToggle} {
        background-color: ${color('neutral.03')};
    }

    &:disabled:checked + ${SwitchToggle} {
        background-color: ${color('primary.lightest')};
    }

    &:disabled + ${SwitchToggle}:after {
        ${getDisabledToggleStyle};
    }

    &:focus-visible + ${SwitchToggle} {
        ${getFocusStyleFromColor('primary.07', 'neutral.00')}
    }
`;

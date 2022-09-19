import styled from 'styled-components';
import {
    mouseCursor,
    pointerEvents,
    getComponentOverride,
    propsBlocker,
    getFocusStyleFromColor,
    transition,
    marginProps,
    round,
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

/** 👉 ROOT ELEMENT */
export const SwitchRoot = styled.label.withConfig(
    propsBlocker,
)<SwitchRootPropsType>`
    display: inline-flex;
    align-items: center;
    ${getComponentOverride('Switch')};
    ${mouseCursor};
    ${marginProps};
`;

export const SwitchToggle = styled.span.withConfig(
    propsBlocker,
)<SwitchTogglePropsType>`
    position: relative;
    display: inline-flex;
    ${round};
    ${transition({ all: true })};
    width: ${sizes.dimensions.width}px;
    height: ${sizes.dimensions.height}px;
    background-color: ${color('neutral.07')};

    &::after {
        content: '';
        position: absolute;
        bottom: ${sizes.dimensions.padding}px;
        left: ${sizes.dimensions.padding}px;
        width: ${sizes.toggle.side}px;
        height: ${sizes.toggle.side}px;
        ${round};
        ${transition({ all: true })};
        background-color: ${color('neutral.00')};
    }

    ${pointerEvents};
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
        background-color: ${color('primary.07')};

        &:after {
            left: calc(100% - 2px);
            transform: translateX(-100%);
        }
    }

    &:checked + ${SwitchToggle}:hover {
        background-color: ${color('primary.05')};
    }

    &:not(:checked) + ${SwitchToggle}:hover {
        background-color: ${color('neutral.05')};
    }

    &:disabled + ${SwitchToggle} {
        background-color: ${color('neutral.03')};
    }

    &:disabled:checked + ${SwitchToggle} {
        background-color: ${color('primary.02')};

        &:after {
            background-color: ${color('neutral.02')};
        }
    }

    &:focus-visible + ${SwitchToggle} {
        ${getFocusStyleFromColor('primary.07', 'neutral.00')}
    }
`;

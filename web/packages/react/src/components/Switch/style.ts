import styled from 'styled-components';

import { shouldForwardProp } from '../../utils';
import { mouseCursor, pointerEvents } from '../../styling';
import { transitionDurationInSec } from '../../constants';
import { SwitchCheckboxInputPropsType, SwitchLabelPropsType } from './type';

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

const switchColor = ({
    theme: {
        componentOverrides: { Switch },
    },
}: SwitchLabelPropsType) => Switch.Label.base;

const toggleDefault = ({
    theme: {
        componentOverrides: { Switch },
    },
}: SwitchLabelPropsType) => Switch.Toggle.base;

const disabledToggle = ({
    theme: {
        componentOverrides: { Switch },
    },
    checked,
    defaultChecked,
}: SwitchCheckboxInputPropsType) =>
    !(checked || defaultChecked) ? Switch.Toggle.disabled__checked : '';

const checkedBackground = ({
    theme: {
        componentOverrides: { Switch },
    },
}: SwitchCheckboxInputPropsType) => Switch.Label.checked;

const checkedHover = ({
    theme: {
        componentOverrides: { Switch },
    },
}: SwitchCheckboxInputPropsType) => Switch.Label.hover;

const disabledBackground = ({
    theme: {
        componentOverrides: { Switch },
    },
}: SwitchCheckboxInputPropsType) => Switch.Label.disabled;

const disabledCheckedBackground = ({
    theme: {
        componentOverrides: { Switch },
    },
}: SwitchCheckboxInputPropsType) => Switch.Label.disabled__checked;

export const SwitchRoot = styled.label.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, {}),
})<SwitchLabelPropsType>`
    display: inline-flex;
    align-items: center;

    ${mouseCursor}
`;

export const SwitchToggle = styled.span<SwitchLabelPropsType>`
    position: relative;
    display: inline-flex;
    border-radius: 9999px;
    transition: all ${transitionDurationInSec}s ease;
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
        transition: all ${transitionDurationInSec}s ease;

        ${toggleDefault}
    }

    ${pointerEvents}
    ${switchColor}
    ${mouseCursor}
`;

export const SwitchCheckboxInput = styled.input<SwitchCheckboxInputPropsType>`
    opacity: 0;
    margin: 0;
    width: 0;
    height: 0;
    pointer-events: none;
    position: absolute;

    &:checked + ${SwitchToggle} {
        ${checkedBackground}
    }

    &:checked + ${SwitchToggle}:hover {
        ${checkedHover}
    }

    &:checked + ${SwitchToggle}:after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }

    &:disabled + ${SwitchToggle} {
        ${disabledBackground}
    }

    &:disabled:checked + ${SwitchToggle} {
        ${disabledCheckedBackground}
    }

    &:disabled + ${SwitchToggle}:after {
        ${disabledToggle}
    }
`;
import styled from 'styled-components';

import { shouldForwardProp } from '../../utils';
import { mouseCursor } from '../../styling';
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
    !(checked || defaultChecked) ? Switch.Toggle.disabled_checked : '';

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

export const SwitchRoot = styled.p.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, {}),
})<SwitchLabelPropsType>`
    display: flex;
    align-items: center;
`;

// TODO (nmelnikov 2020-07-06): add a disabled state here as well
export const SwitchLabel = styled.span<SwitchLabelPropsType>`
    padding-left: 16px;
`;

export const SwitchToggle = styled.label<SwitchLabelPropsType>`
    position: relative;
    display: inline-flex;
    border-radius: 9999px;
    transition: ${transitionDurationInSec}s;
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
        transition: ${transitionDurationInSec}s;

        ${toggleDefault}
    }

    ${mouseCursor}
    ${switchColor}
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

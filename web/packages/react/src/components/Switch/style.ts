import styled, { css } from 'styled-components';

import { shouldForwardProp } from '../../utils';
import { mouseCursor } from '../../styling';
import { ObjectLiteralType } from '../../type';
import { SwitchCheckboxInputPropsType, SwitchLabelPropsType } from './type';

const propertyList = {
    // add custom properties here
} as ObjectLiteralType;

const transitionDurationInSec = 0.2;

const sizeBase = ({
    theme: {
        componentOverrides: { Switch },
    },
}: SwitchLabelPropsType) => Switch.Label.base;

const visualStyle = ({
    theme: {
        componentOverrides: { Switch },
    },
    disabled,
    checked,
    defaultChecked,
}: SwitchLabelPropsType) => {
    if (disabled) {
        return checked || defaultChecked
            ? Switch.Root.checked.disabled
            : Switch.Root.disabled;
    }

    if (checked || defaultChecked) {
        return Switch.Root.checked.base;
    }

    return Switch.Root.base;
};

export const SwitchRoot = styled.p.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<SwitchLabelPropsType>`
    display: flex;
    align-items: center;
`;

// TODO (nmelnikov 2020-07-06): add a disabled state here as well
export const SwitchLabel = styled.span<SwitchLabelPropsType>`
    padding-left: 16px;
`;

export const SwitchToggle = styled.label.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<SwitchLabelPropsType>`
    position: relative;
    display: inline-flex;
    border-radius: 9999px;
    transition: ${transitionDurationInSec}s;

    background: grey;

    &::after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        background: #fff;
        border-radius: 9999px;
        transition: ${transitionDurationInSec}s;
    }

    ${mouseCursor}
    ${sizeBase}
`;

export const SwitchCheckboxInput = styled.input<SwitchCheckboxInputPropsType>`
    opacity: 0;
    margin: 0;
    width: 0;
    height: 0;
    pointer-events: none;
    position: absolute;

    &:checked + ${SwitchToggle} {
        background: #1e91d6;
    }

    &:checked + ${SwitchToggle}:after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }

    &:disabled + ${SwitchToggle} {
        background: #c2c2c2;
    }

    &:disabled:checked + ${SwitchToggle} {
        background: #92baf6;
    }

    &:disabled + ${SwitchToggle}:after {
        background: #efefef;
    }
`;

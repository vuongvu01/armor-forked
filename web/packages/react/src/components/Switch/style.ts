import styled, { css } from 'styled-components';

import { marginAttributes } from 'src/system/attributes';
import { shouldForwardProp } from 'src/utils';
import { mouseCursor } from 'src/styling';
import { ObjectLiteralType } from 'src/type';
import {
    SwitchCheckboxInputPropsType,
    SwitchLabelPropsType,
    SwitchRootPropsType,
    SwitchSliderPropsType,
} from './type';

const propertyList = {
    // add custom properties here
} as ObjectLiteralType;

const transitionDurationInSec = 0.2;

const sizeBase = ({
    theme: {
        componentOverrides: { Switch },
    },
}: SwitchRootPropsType) => Switch.Label.base;

const visualStyle = ({
    theme: {
        componentOverrides: { Switch },
    },
    disabled,
    checked,
    defaultChecked,
}: SwitchRootPropsType) => {
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

const switchToggleLook = ({
    disabled,
    theme: {
        componentOverrides: { Switch },
    },
}: SwitchRootPropsType) => {
    const highlighting = disabled ? Switch.Toggle.disabled : Switch.Toggle.base;

    return {
        ...Switch.Slider.base,
        ...highlighting,
    };
};

const switchToggleAnimation = ({
    checked,
    theme: {
        componentOverrides: { Switch },
    },
}: SwitchRootPropsType) => (checked ? Switch.Slider.translated : css``);

export const SwitchRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<SwitchRootPropsType>`
    position: relative;
    display: inline-flex;

    ${marginAttributes}
`;

export const SwitchLabel = styled.label<SwitchLabelPropsType>`
    position: relative;
    display: inline-block;
    border-radius: 9999px;
    transition: ${transitionDurationInSec}s;
    
    ${sizeBase}
    ${visualStyle}
    ${mouseCursor}
`;

export const SwitchCheckboxInput = styled.input<SwitchCheckboxInputPropsType>`
    opacity: 0;
    margin: 0;
    pointer-events: none;
`;

export const SwitchSlider = styled.span<SwitchSliderPropsType>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: ${transitionDurationInSec}s;

    :before {
        position: absolute;
        content: '';
        transition: ${transitionDurationInSec}s;
        border-radius: 50%;
        ${switchToggleLook}
        ${switchToggleAnimation}
    }
`;

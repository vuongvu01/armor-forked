import styled from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { mouseCursor } from '../../styling';
import { transitionDurationInSec } from '../../constants';
import {
    RadioLabelPropsType,
    RadioInputPropsType,
    RadioRootPropsType,
} from './type';

const sizes = {
    container: {
        side: 16,
    },
    dot: {
        side: 8,
        offset: 5,
    },
};

const containerStyle = ({
    theme: {
        componentOverrides: { Radio },
    },
    disabled,
}: RadioInputPropsType) =>
    disabled ? Radio.Container.disabled : Radio.Container.base;

const containerStyleHighlighted = ({
    theme: {
        componentOverrides: { Radio },
    },
}: RadioInputPropsType) => Radio.Container.highlighted;

const containerStyleOnHover = ({
    theme: {
        componentOverrides: { Radio },
    },
}: RadioInputPropsType) => Radio.Container.hover;

const dotStyleOnHover = ({
    theme: {
        componentOverrides: { Radio },
    },
}: RadioInputPropsType) => Radio.Dot.hover;

const dotStyle = ({
    theme: {
        componentOverrides: { Radio },
    },
    disabled,
}: RadioInputPropsType) => (disabled ? Radio.Dot.disabled : Radio.Dot.base);

export const RadioRoot = styled.p.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<RadioRootPropsType>`
    ${marginAttributes}
`;

export const RadioLabel = styled.label<RadioLabelPropsType>`
    position: relative;
    padding-left: ${2 * sizes.container.side}px;
    cursor: pointer;
    display: inline-block;

    ${mouseCursor}
`;

export const RadioInput = styled.input<RadioInputPropsType>`
    height: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    width: 0;

    &:not(:checked) + ${RadioLabel}:before, &:checked + ${RadioLabel}:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: ${sizes.container.side}px;
        height: ${sizes.container.side}px;
        border-style: solid;
        border-width: 1px;

        ${containerStyle}
    }

    &:not(:checked) + ${RadioLabel}:after, &:checked + ${RadioLabel}:after {
        content: '';
        position: absolute;
        width: ${sizes.dot.side}px;
        height: ${sizes.dot.side}px;
        top: ${sizes.dot.offset}px;
        left: ${sizes.dot.offset}px;
        transition: all ${transitionDurationInSec}s ease;

        ${dotStyle}
    }

    &:not(:checked) + ${RadioLabel}:after {
        opacity: 0;
        transform: scale(0);
    }

    &:checked + ${RadioLabel}:after {
        opacity: 1;
        transform: scale(1);
    }

    &:not(:disabled):checked + ${RadioLabel}:before {
        ${containerStyleHighlighted}
    }

    &:not(:disabled):checked
        + ${RadioLabel}:hover:before,
        &:not(:disabled):not(:checked)
        + ${RadioLabel}:hover:before {
        ${containerStyleOnHover}
    }

    &:not(:disabled):checked + ${RadioLabel}:hover:after {
        ${dotStyleOnHover}
    }
`;

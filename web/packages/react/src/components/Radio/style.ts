import styled from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { mouseCursor } from '../../styling';
import { transitionDurationInSec } from '../../constants';
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

export const RadioMark = styled.label<RadioMarkPropsType>`
    cursor: pointer;
    display: inline-flex;
    padding-left: ${sizes.container.side}px;
    position: relative;

    ${mouseCursor}
`;

export const RadioInput = styled.input<RadioInputPropsType>`
    height: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    width: 0;

    &:not(:checked) + ${RadioMark}:before, &:checked + ${RadioMark}:before {
        border-style: solid;
        border-width: 1px;
        box-sizing: border-box;
        content: '';
        height: ${sizes.container.side}px;
        left: 0;
        position: absolute;
        top: 0;
        width: ${sizes.container.side}px;

        ${containerStyle}
    }

    &:not(:checked) + ${RadioMark}:after, &:checked + ${RadioMark}:after {
        content: '';
        height: ${sizes.dot.side}px;
        left: ${sizes.dot.offset}px;
        position: absolute;
        top: ${sizes.dot.offset}px;
        transition: all ${transitionDurationInSec}s ease;
        width: ${sizes.dot.side}px;

        ${dotStyle}
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
        ${containerStyleHighlighted}
    }

    &:not(:disabled):checked
        + ${RadioMark}:hover:before,
        &:not(:disabled):not(:checked)
        + ${RadioMark}:hover:before {
        ${containerStyleOnHover}
    }

    &:not(:disabled):checked + ${RadioMark}:hover:after {
        ${dotStyleOnHover}
    }
`;

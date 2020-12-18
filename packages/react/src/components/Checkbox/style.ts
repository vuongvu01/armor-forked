import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { mouseCursor, pointerEvents } from '../../styling';
import { transitionDurationInSec } from '../../constants';
import {
    CheckboxCheckmarkPropsType,
    CheckboxInputPropsType,
    CheckboxRootPropsType,
} from './type';
import { spacing } from '../../system/mixins';
import { fontWeightRegular } from '../../tokens';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

const sizes = {
    checkbox: {
        side: 16,
    },
};

const checkmarkRotation = ({ checkedIcon }: CheckboxInputPropsType) => css`
    transform: ${checkedIcon === 'tick' ? ' rotate(45deg)' : ''};
`;

const checkedBefore = ({
    theme: {
        componentOverrides: { Checkbox },
    },
}: CheckboxInputPropsType) => Checkbox.Root.checked.base;

const checkedHover = ({
    theme: {
        componentOverrides: { Checkbox },
    },
}: CheckboxInputPropsType) => Checkbox.Root.checked.hover;

const uncheckedHover = ({
    theme: {
        componentOverrides: { Checkbox },
    },
}: CheckboxInputPropsType) => Checkbox.Root.unchecked.hover;

const disabledBefore = ({
    theme: {
        componentOverrides: { Checkbox },
    },
}: CheckboxInputPropsType) => Checkbox.Root.checked.disabled;

const checkmarkBox = ({
    theme: {
        componentOverrides: { Checkbox },
    },
}: CheckboxCheckmarkPropsType) => Checkbox.Root.checkmark.box;

const checkmarkStyle = ({
    theme: {
        componentOverrides: { Checkbox },
    },
    checkedIcon,
    disabled,
}: CheckboxRootPropsType) => {
    const checkmarkColor = disabled
        ? Checkbox.Root.checkmark.disabled
        : Checkbox.Root.checkmark.base;

    const tickStyle =
        checkedIcon === 'tick'
            ? `
                  left: 5px;
                  top: 3px;
                  width: 4px;
                  height: 7px;
                  border-width: 0 1px 1px 0;
                  border-style: solid;
                  transform: rotate(45deg);
              `
            : `
                  left: 4px;
                  top: 7px;
                  width: 8px;
                  height: 1px;
                  border-style: solid;
                  border-width: 0 0 1px 0;
                  transform: rotate(0);
              `;

    return css`${checkmarkColor}${tickStyle}`;
};

export const CheckboxRoot = styled.label.withConfig({
    shouldForwardProp: property =>
        shouldForwardProp(property, { reallyChecked: true }),
})<CheckboxRootPropsType>`
    display: inline-flex;
    margin: 0;
    font-weight: ${fontWeightRegular};

    ${mouseCursor}
    ${getComponentOverride('Checkbox')};
    ${marginAttributes}
`;

export const CheckboxCheckmark = styled.div<CheckboxCheckmarkPropsType>`
    position: relative;
    width: ${sizes.checkbox.side}px;
    height: ${sizes.checkbox.side}px;

    ${({ hasLabel }: CheckboxCheckmarkPropsType) =>
        hasLabel
            ? css`
                  margin-top: ${spacing(1)};
              `
            : ''}

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: ${sizes.checkbox.side}px;
        height: ${sizes.checkbox.side}px;
        border-radius: 4px;
        box-sizing: border-box;
        ${checkmarkBox}
        transition: all ${transitionDurationInSec}s ease;
    }

    &::after {
        content: '';
        position: absolute;
        transition: all ${transitionDurationInSec}s ease;

        ${checkmarkStyle}
    }

    ${pointerEvents}
`;

export const CheckboxInput = styled.input<CheckboxInputPropsType>`
    opacity: 0;
    position: absolute;
    margin: 0;
    height: 0;
    width: 0;

    &:not(:checked)
        + ${CheckboxCheckmark}:hover:before,
        &:not(:checked)
        + ${CheckboxCheckmark}:active:before {
        border-width: 1px;
        border-style: solid;
        ${uncheckedHover}
    }

    &:checked
        + ${CheckboxCheckmark}:hover:before,
        &:not(:checked)
        + ${CheckboxCheckmark}:active:before {
        ${checkedHover}
    }

    &:checked + ${CheckboxCheckmark}:after {
        opacity: 1;
        transform: scale(1);
        ${checkmarkRotation}
    }

    &:checked + ${CheckboxCheckmark}:before {
        opacity: 1;
        box-sizing: border-box;
        ${checkedBefore}
    }

    &:disabled + ${CheckboxCheckmark}:before {
        box-shadow: none;
        border-width: 1px;
        border-style: solid;
        box-sizing: border-box;
        ${disabledBefore}
    }

    &:not(:checked) + ${CheckboxCheckmark}:after {
        opacity: 0;
    }
`;

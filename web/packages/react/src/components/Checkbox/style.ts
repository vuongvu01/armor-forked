import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { mouseCursor } from '../../styling';
import { ObjectLiteralType } from '../../type';
import {
    CheckboxCheckmarkPropsType,
    CheckboxInputPropsType,
    CheckboxRootPropsType,
} from './type';

const propertyList = {
    // add other custom properties here
} as ObjectLiteralType;

const visualStyle = ({
    theme: {
        componentOverrides: { Checkbox },
    },
    disabled,
    checked,
}: CheckboxRootPropsType) => {
    if (disabled && !checked) {
        return css`${Checkbox.Root.base}${Checkbox.Root.disabled}`;
    }

    if (checked) {
        return css`${Checkbox.Root.base}${
            disabled
                ? Checkbox.Root.checked.disabled
                : Checkbox.Root.checked.base
        }`;
    }

    return css`${Checkbox.Root.base}${Checkbox.Root.primary}`;
};

const checkmarkRotation = ({ checkedIcon }: CheckboxInputPropsType) => css`
    transform: ${checkedIcon === 'tick' ? ' rotate(45deg)' : ''};
`;

const checkmarkStyle = ({ checkedIcon, disabled }: CheckboxRootPropsType) => {
    const checkmarkColor = `
        color: ${disabled ? '#707070' : 'white'};
    `;

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

export const CheckboxRoot = styled.p.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<CheckboxRootPropsType>`
    ${marginAttributes}
`;

export const CheckboxCheckmark = styled.label<CheckboxCheckmarkPropsType>`
    position: relative;
    padding-left: 32px;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 16px;
        height: 16px;
        border-radius: 4px;
        background: white;
        border: #c2c2c2;
        border-width: 1px;
        box-sizing: border-box;
        border-style: solid;
    }

    &::after {
        content: '';
        position: absolute;
        transition: all 0.2s;

        ${checkmarkStyle}
    }

    ${mouseCursor}
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
        border: #0042a5;
        border-width: 1px;
        border-style: solid;
    }

    &:checked
        + ${CheckboxCheckmark}:hover:before,
        &:not(:checked)
        + ${CheckboxCheckmark}:active:before {
        background: #0b53bf;
        border: #0b53bf;
    }

    &:checked + ${CheckboxCheckmark}:after {
        opacity: 1;
        transform: scale(1);
        ${checkmarkRotation}
    }

    &:checked + ${CheckboxCheckmark}:before {
        opacity: 1;
        background: #0042a5;
        border: #0042a5;
        box-sizing: border-box;
    }

    &:disabled + ${CheckboxCheckmark}:before {
        box-shadow: none;
        border-color: #e1e1e1;
        border-width: 1px;
        border-style: solid;
        background: #f5f5f5;
        box-sizing: border-box;
    }

    &:not(:checked) + ${CheckboxCheckmark}:after {
        opacity: 0;
    }
`;

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
        if (disabled) {
            return css`${Checkbox.Root.base}${Checkbox.Root.checked.disabled}`;
        }

        return css`
            background-repeat: no-repeat;
            box-sizing: border-box;
            background-positionx: left;
            background-positiony: top;
            border-width: 1px;
            border-style: solid;
            ${Checkbox.Root.base}
            ${Checkbox.Root.checked.base}
        `;
    }

    return css`${Checkbox.Root.base}${Checkbox.Root.primary}`;
};

const checkmarkStyle = ({ checkedIcon }: CheckboxRootPropsType) =>
    checkedIcon === 'tick'
        ? css`
              left: 5px;
              top: 3px;
              width: 4px;
              height: 7px;
              border-width: 0 1px 1px 0;
              transform: rotate(45deg);
          `
        : css`
              left: 4px;
              top: 7px;
              width: 8px;
              height: 1px;
              border-width: 0 0 1px 0;
          `;

export const CheckboxRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<CheckboxRootPropsType>`
    ${marginAttributes}
`;

export const CheckboxInput = styled.input<CheckboxInputPropsType>`
    opacity: 0;
    margin: 0;
    height: 0;
    width: 0;
    pointer-events: none;
`;

export const CheckboxCheckmark = styled.span<CheckboxCheckmarkPropsType>`
    ${visualStyle}
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    vertical-align: middle;
    box-sizing: content-box;
    background-repeat: no-repeat;
    background-positionx: 'left';
    background-positiony: 'top';
    border-width: 1px;
    border-style: solid;

    &::after {
        content: '';
        position: absolute;
        border-style: solid;
        ${checkmarkStyle}
    }
    ${mouseCursor}
`;

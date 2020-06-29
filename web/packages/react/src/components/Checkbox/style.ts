import styled, { css } from 'styled-components';

import { marginAttributes } from 'src/system/attributes';
import { shouldForwardProp } from 'src/utils';
import { mouseCursor } from 'src/styling';
import { ObjectLiteralType } from 'src/type';
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
    pointer-events: none;
`;

export const CheckboxCheckmark = styled.span<CheckboxCheckmarkPropsType>`
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    vertical-align: middle;
    box-sizing: border-box;

    &::after {
        content: '';
        position: absolute;
        border-style: solid;
        ${checkmarkStyle}
    }

    ${visualStyle}
    ${mouseCursor}
`;

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

const checkmarkDisabledBefore = ({ disabled }: CheckboxRootPropsType) =>
    disabled
        ? css`
              box-shadow: none;
              border-color: #bbb;
              background-color: #ddd;
          `
        : css``;

const checkmarkDisabledAfter = ({ disabled }: CheckboxRootPropsType) =>
    disabled
        ? css`
              color: #999;
          `
        : css``;

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

export const CheckboxRoot = styled.p.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<CheckboxRootPropsType>`
    ${marginAttributes}
`;

export const CheckboxCheckmark = styled.label<CheckboxCheckmarkPropsType>`
    position: relative;
    padding-left: 1.95em;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1.25em;
        height: 1.25em;
        border: 2px solid #ccc;
        background: #fff;
        border-radius: 4px;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
        background-color: 'white';
        border: 'blue';
        background-repeat: 'no-repeat';
        background-positionx: 'left';
        background-positiony: 'top';
        border-width: '1px';
        border-style: 'solid';
        ${checkmarkDisabledBefore}
    }

    &::after {
        content: '\\2713\\0020';
        position: absolute;
        top: 0.15em;
        left: 0.22em;
        font-size: 1.3em;
        line-height: 0.8;
        color: #09ad7e;
        transition: all 0.2s;
        font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', Arial;
        ${checkmarkDisabledAfter}
        ${checkmarkStyle}
    }

    ${mouseCursor}

    // display: inline-block;
    // position: relative;
    // width: 16px;
    // height: 16px;
    // border-radius: 2px;
    // vertical-align: middle;
    // box-sizing: border-box;
    //
    // &::after {
    //     content: '';
    //     position: absolute;
    //     border-style: solid;
    //     ${checkmarkStyle}
    // }
    //
    // ${visualStyle}
    // ${mouseCursor}
`;

export const CheckboxInput = styled.input<CheckboxInputPropsType>`
    opacity: 0;
    position: absolute;
    margin: 0;
    height: 0;
    width: 0;

    &:checked + ${CheckboxCheckmark}:after {
        opacity: 1;
        transform: scale(1);
    }

    &:not(:checked) + ${CheckboxCheckmark}:after {
        opacity: 0;
        transform: scale(0);
    }
`;

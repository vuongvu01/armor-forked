import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { transitionDurationInSec } from '../../constants';
import { colorGrey00, colorGrey30 } from '../../tokens';
import { shouldForwardProp } from '../../utils';
import {
    SelectActionItemPropsType,
    SelectOptionItemPropsType,
    SelectOptionListPropsType,
    SelectRootPropsType,
} from './type';

const optionItemStyle = ({
    isSelected,
    theme: {
        componentOverrides: { Select },
    },
}: SelectOptionItemPropsType) => {
    if (isSelected) {
        return css`
            ${Select.OptionItem.base} ${Select.OptionItem.selected}
        `;
    }
    return Select.OptionItem.base;
};

const actionItemContainerStyle = ({
    disabled,
    theme: {
        componentOverrides: { Select },
    },
}: SelectActionItemPropsType) => css`
    ${disabled ? Select.ActionItem.disabled : ''}
`;

const actionItemStyle = ({
    disabled,
    isOptionListShown,
    theme: {
        componentOverrides: { Select },
    },
}: SelectActionItemPropsType) =>
    css`
        ${Select.ActionItem.base} ${
        disabled ? Select.ActionItem.disabled : ''
    } ${isOptionListShown ? Select.ActionItem.rotate : ''}
    `;

const optionListStyle = ({
    isOptionListShown,
    theme: {
        componentOverrides: { Select },
    },
}: SelectOptionListPropsType) => {
    return css`
        ${Select.OptionList.base}
        ${isOptionListShown ? Select.OptionList.displayed : ''}
    `;
};

const actionSeparator = ({
    isActionSeparatorDisplayed,
    theme: {
        componentOverrides: { Select },
    },
}: SelectActionItemPropsType) => css`
    ${isActionSeparatorDisplayed ? Select.ActionItem.separator : ''}
`;

export const SelectWrapper = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<SelectRootPropsType>`
    display: flex;
    height: 60px;
`;

export const SelectContainer = styled.div<SelectRootPropsType>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 0;
    min-height: -webkit-calc(110%);
    min-width: 150px;

    ${marginAttributes}
`;

export const SelectOptionListContainer = styled.div<SelectRootPropsType>`
    box-sizing: border-box;
    margin: 4px 2px;
    position: relative;
`;

export const SelectOptionList = styled.div<SelectOptionListPropsType>`
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 0;
    left: 0;
    max-height: 400px;
    overflow: auto;
    padding-bottom: 0;
    padding-top: 0;
    position: absolute;
    right: 0;
    transition: ${transitionDurationInSec}s;
    z-index: 1024;

    ${optionListStyle}
`;

export const SelectOptionItem = styled.div<SelectOptionItemPropsType>`
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    padding: 8px 16px;
    white-space: nowrap;

    ${optionItemStyle}
`;

export const SelectActionContainer = styled.div<SelectActionItemPropsType>`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    outline: none;
    width: 56px;

    ${actionItemContainerStyle}
`;

export const SelectActionContent = styled.div<SelectActionItemPropsType>`
    align-items: center;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: transparent;
    display: flex;
    height: calc(100% - 16px);
    justify-content: center;
    transition: border-color ${transitionDurationInSec}s;
    width: 100%;

    ${actionSeparator}
`;

export const SelectAction = styled.div<SelectActionItemPropsType>`
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-right-width: 2px;
    border-right-style: solid;
    height: 8px;
    position: relative;
    transform: rotate(45deg);
    transition: ${transitionDurationInSec}s;
    width: 8px;

    ${actionItemStyle}
`;

export const selectTextInputStyle = {
    Label: () =>
        `transition: top ${transitionDurationInSec}s, font-size ${transitionDurationInSec}s, color ${transitionDurationInSec}s; 
        transition-delay: ${transitionDurationInSec}s;`,
    Input: () =>
        `caret-color: ${colorGrey00}; &:disabled {color: ${colorGrey30}}`,
};

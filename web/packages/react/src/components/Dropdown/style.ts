import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { transitionDurationInSec } from '../../constants';
import { colorGrey00, colorGrey30 } from '../../tokens';
import { shouldForwardProp } from '../../utils';
import {
    DropdownActionItemPropsType,
    DropdownOptionItemPropsType,
    DropdownOptionListPropsType,
    DropdownRootPropsType,
} from './type';

const optionItemStyle = ({
    isSelected,
    theme: {
        componentOverrides: { Dropdown },
    },
}: DropdownOptionItemPropsType) => {
    if (isSelected) {
        return css`
            ${Dropdown.OptionItem.base} ${Dropdown.OptionItem.selected}
        `;
    }
    return Dropdown.OptionItem.base;
};

const actionItemContainerStyle = ({
    disabled,
    theme: {
        componentOverrides: { Dropdown },
    },
}: DropdownActionItemPropsType) => css`
    ${disabled ? Dropdown.ActionItem.disabled : ''}
`;

const actionItemStyle = ({
    disabled,
    isOptionListShown,
    theme: {
        componentOverrides: { Dropdown },
    },
}: DropdownActionItemPropsType) =>
    css`
        ${Dropdown.ActionItem.base} ${
        disabled ? Dropdown.ActionItem.disabled : ''
    } ${isOptionListShown ? Dropdown.ActionItem.rotate : ''}
    `;

const optionListStyle = ({
    isOptionListShown,
    theme: {
        componentOverrides: { Dropdown },
    },
}: DropdownOptionListPropsType) => {
    return css`
        ${Dropdown.OptionList.base}
        ${isOptionListShown ? Dropdown.OptionList.displayed : ''}
    `;
};

const actionSeparator = ({
    isActionSeparatorDisplayed,
    theme: {
        componentOverrides: { Dropdown },
    },
}: DropdownActionItemPropsType) => css`
    ${isActionSeparatorDisplayed ? Dropdown.ActionItem.separator : ''}
`;

export const DropdownWrapper = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<DropdownRootPropsType>`
    display: inline-flex;
    height: 50px;
`;

export const DropdownContainer = styled.div<DropdownRootPropsType>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 0;
    min-height: -webkit-calc(110%);
    min-width: 150px;

    ${marginAttributes}
`;

export const DropdownOptionListContainer = styled.div<DropdownRootPropsType>`
    box-sizing: border-box;
    margin: 4px 2px;
    position: relative;
`;

export const DropdownOptionList = styled.div<DropdownOptionListPropsType>`
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

export const DropdownOptionItem = styled.div<DropdownOptionItemPropsType>`
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    padding: 8px 16px;
    white-space: nowrap;

    ${optionItemStyle}
`;

export const DropdownActionContainer = styled.div<DropdownActionItemPropsType>`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    outline: none;
    width: 56px;

    ${actionItemContainerStyle}
`;

export const DropdownActionContent = styled.div<DropdownActionItemPropsType>`
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

export const DropdownAction = styled.div<DropdownActionItemPropsType>`
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

export const dropdownTextInputStyle = {
    Label: () =>
        `transition: top ${transitionDurationInSec}s, font-size ${transitionDurationInSec}s, color ${transitionDurationInSec}s; 
        transition-delay: ${transitionDurationInSec}s;`,
    Input: () =>
        `caret-color: ${colorGrey00}; &:disabled {color: ${colorGrey30}}`,
};

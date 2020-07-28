import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { transitionDurationInSec } from '../../constants';
import { shouldForwardProp } from '../../utils';
import { SelectRootPropsType } from './type';

const itemStyle = ({
    isSelected,
    theme: {
        componentOverrides: { Select },
    },
}: SelectRootPropsType) => {
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
}: SelectRootPropsType) => css`
    ${disabled ? Select.ActionItem.disabled : ''}
`;

const actionItemStyle = ({
    disabled,
    isOptionListShown,
    theme: {
        componentOverrides: { Select },
    },
}: SelectRootPropsType) =>
    css`
        ${Select.ActionItem.base} ${
        disabled ? Select.ActionItem.disabled : ''
    } ${isOptionListShown ? 'transform: rotate(225deg);' : ''}
    `;

const optionListStyle = ({ isOptionListShown }: SelectRootPropsType) => css`
    ${isOptionListShown
        ? 'height: auto; padding-bottom: 16px; padding-top: 16px;'
        : ''}
`;

const displayBorder = ({ isFocused }: SelectRootPropsType) => css`
    ${isFocused ? ' border-left-color: #a7a7a7;' : ''}
`;

export const SelectContainer = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<SelectRootPropsType>`
    display: flex;
    flex-direction: column;
    min-width: 150px;

    ${marginAttributes}
`;

export const SelectOptionListContainer = styled.div<SelectRootPropsType>`
    box-sizing: border-box;
    margin: 4px 2px;
    position: relative;
`;

export const SelectOptionList = styled.div<SelectRootPropsType>`
    background-color: white;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.12);
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

export const SelectOptionItem = styled.div<SelectRootPropsType>`
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    height: 40px;
    padding: 8px 16px;
    white-space: nowrap;

    ${itemStyle}
`;

export const SelectActionContainer = styled.div<SelectRootPropsType>`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    min-width: 40px;
    width: 50px;

    ${actionItemContainerStyle}
`;

export const SelectActionContent = styled.div<SelectRootPropsType>`
    align-items: center;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: transparent;
    display: flex;
    height: 70%;
    justify-content: center;
    transition: border-color ${transitionDurationInSec}s;
    width: 100%;

    ${displayBorder}
`;

export const SelectAction = styled.div<SelectRootPropsType>`
    border-bottom-width: 0;
    border-right-width: 0;
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: black;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: black;
    height: 8px;
    margin: 2px 0 0;
    position: relative;
    transition: ${transitionDurationInSec}s;
    transform: rotate(45deg);
    width: 8px;

    ${actionItemStyle}
`;

export const selectTextInputStyle = {
    Label: () =>
        `transition: top ${transitionDurationInSec}s, font-size ${transitionDurationInSec}s, color ${transitionDurationInSec}s; 
        transition-delay: 150ms;`,
};

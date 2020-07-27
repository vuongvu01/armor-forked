import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { transitionDurationInSec } from '../../constants';
import { shouldForwardProp } from '../../utils';
import { DropdownRootPropsType } from './type';

const itemStyle = ({
    isSelected,
    theme: {
        componentOverrides: { Dropdown },
    },
}: DropdownRootPropsType) => {
    if (isSelected) {
        return css`
            ${Dropdown.Root.base} ${Dropdown.Root.selected}
        `;
    }
    return Dropdown.Root.base;
};

const actionItemStyle = ({
    isOptionListShown,
    theme: {
        componentOverrides: { Dropdown },
    },
}: DropdownRootPropsType) => css`
    ${Dropdown.ActionItem.base} ${isOptionListShown
        ? 'transform: rotate(-135deg);'
        : ''}
`;

const displayBorder = ({ isFocused }: DropdownRootPropsType) => css`
    ${isFocused ? ' border-left-color: #717171;' : ''}
`;

export const DropdownContainer = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<DropdownRootPropsType>`
    display: flex;
    flex-direction: column;
    width: 300px;

    ${marginAttributes}
`;

export const DropdownOptionListContainer = styled.div<DropdownRootPropsType>`
    box-sizing: border-box;
    margin-top: 4px;
`;

export const DropdownOptionList = styled.div<DropdownRootPropsType>`
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 400px;
    overflow: auto;
    padding-bottom: 16px;
    padding-top: 16px;
    position: absolute;
    background-color: white;
    width: 300px;
    z-index: 1024;
`;

export const DropdownOptionItem = styled.div<DropdownRootPropsType>`
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    height: 36px;
    padding: 8px 16px;
    white-space: nowrap;

    ${itemStyle}
`;

export const DropdownActionContainer = styled.div<DropdownRootPropsType>`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 15%;
`;

export const DropdownActionContent = styled.div<DropdownRootPropsType>`
    align-items: center;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: transparent;
    display: flex;
    height: 70%;
    justify-content: center;
    transition: border-color ${transitionDurationInSec}s ease-in-out;
    width: 100%;

    ${displayBorder}
`;

export const DropdownAction = styled.div<DropdownRootPropsType>`
    border-bottom-width: 0;
    border-right-width: 0;
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: black;
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: black;
    height: 8px;
    position: relative;
    transition: ${transitionDurationInSec}s all;
    transform: rotate(45deg);
    width: 8px;

    ${actionItemStyle}
`;

export const dropdownTextInputStyle = {
    Label: () =>
        'transition: top ease 150ms, font-size ease 150ms, color ease 200ms; ' +
        'transition-delay: 150ms;',
};

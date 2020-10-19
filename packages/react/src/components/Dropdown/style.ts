import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { transitionDurationInSec } from '../../constants';
import { colorGrey00, colorGrey30 } from '../../tokens';
import { shouldForwardProp } from '../../utils';
import {
    DropdownOptionItemPropsType,
    DropdownOptionListPropsType,
    DropdownRootPropsType,
    ExpansionIndicatorContainerPropsType,
} from './type';
import { ExpansionIndicator } from '../ExpansionIndicator';

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

export const DropdownWrapper = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<DropdownRootPropsType>`
    display: inline-flex;
    height: 50px;

    ${marginAttributes}
`;

export const DropdownContainer = styled.div<DropdownRootPropsType>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 0;
    min-height: 110%;
    min-width: 150px;
`;

export const DropdownOptionListContainer = styled.div<DropdownRootPropsType>`
    box-sizing: border-box;
    margin: 4px 2px;
    position: relative;
`;

export const ExpansionIndicatorContainer = styled.div<
    ExpansionIndicatorContainerPropsType
>`
    height: 100%;
`;
export const DropdownExpansionIndicator = styled(ExpansionIndicator)<
    ExpansionIndicatorContainerPropsType
>`
    .Dropdown-ExpansionIndicator.ExpansionIndicator-Content {
        width: 56px;
    }
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
    border-left: 2px solid transparent;

    ${optionItemStyle}
`;

export const dropdownTextInputStyle = {
    Label: () =>
        `transition: top ${transitionDurationInSec}s, font-size ${transitionDurationInSec}s, color ${transitionDurationInSec}s; 
        transition-delay: ${transitionDurationInSec}s;`,
    Input: () =>
        `caret-color: ${colorGrey00}; &:disabled {color: ${colorGrey30}}`,
};

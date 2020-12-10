import styled, { css } from 'styled-components';

import { marginAttributes, widthAttributes } from '../../system/attributes';
import { transitionDurationInSec } from '../../constants';
import { shouldForwardProp } from '../../utils';
import {
    DropdownOptionItemPropsType,
    DropdownOptionListPropsType,
    DropdownRootPropsType,
    ExpansionIndicatorContainerPropsType,
} from './type';
import { ExpansionIndicator } from '../ExpansionIndicator';
import { TextInput } from '../TextInput';
import { color, spacing } from '../../system/mixins';

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

export const DropdownRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<DropdownRootPropsType>`
    display: inline-flex;

    ${marginAttributes};
    ${widthAttributes};
`;

export const DropdownContainer = styled.div<DropdownRootPropsType>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const DropdownOptionListContainer = styled.div<DropdownRootPropsType>`
    box-sizing: border-box;
    position: relative;
`;

export const ExpansionIndicatorContainer = styled.div<
    ExpansionIndicatorContainerPropsType
>`
    height: ${spacing(10)};
`;
export const DropdownExpansionIndicator = styled(ExpansionIndicator)<
    ExpansionIndicatorContainerPropsType
>`
    cursor: pointer;
    .ExpansionIndicator-Content {
        width: 56px;
    }
`;

export const DropdownOptionList = styled.div<DropdownOptionListPropsType>`
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    top: ${spacing(1)};
    left: 0;
    right: 0;
    height: 0;
    max-height: 400px;
    overflow: auto;
    padding-bottom: 0;
    padding-top: 0;
    position: absolute;
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

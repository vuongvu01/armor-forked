import styled, { css } from 'styled-components';

import { marginAttributes, widthAttributes } from '../../system/attributes';
import { transitionDurationInSec } from '../../constants';
import { makePropList, shouldForwardProp } from '../../utils';
import {
    DropdownOptionItemPropsType,
    DropdownOptionListPropsType,
    DropdownRootPropsType,
    ExpansionIndicatorContainerPropsType,
} from './type';
import { ExpansionIndicator } from '../ExpansionIndicator';
import { color, spacing } from '../../system/mixins';
import { TextInput } from '../TextInput';
import { TextInputPropsType } from '../TextInput/type';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

const propertyList = makePropList(['formatOption']);

const optionItemStyle = ({
    isSelected,
    theme: {
        componentOverrides: { Dropdown },
    },
}: DropdownOptionItemPropsType) => {
    let result = Dropdown.OptionItem.base;
    if (isSelected) {
        result = css`
            ${result};
            background-color: ${color('primary.lightest')};
            border-left-color: ${color('primary.main')};
        `;
    }
    return result;
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
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
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
    ${getComponentOverride('DropdownOptionItem')};
`;

export const DropdownTextInput = styled(TextInput)<TextInputPropsType>`
    .TextInput-Input {
        cursor: pointer;
    }
`;

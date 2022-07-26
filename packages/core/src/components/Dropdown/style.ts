import styled, { css } from 'styled-components';
import { CancelIcon } from '@deliveryhero/armor-icons';
import {
    marginProps,
    widthProps,
    spacing,
    propsBlocker,
    getComponentOverride,
    focusWithin,
    mouseCursor,
} from '@deliveryhero/armor-system';

import {
    DropdownOptionListContainerPropsType,
    DropdownRootPropsType,
    DropdownTagsSectionPropsType,
    DropdownTextInputPropsType,
    ExpansionIndicatorContainerPropsType,
} from './type';
import { ExpansionIndicator } from '../ExpansionIndicator';
import { TextInput } from '../TextInput';
import { Pack, PackItem } from '../Pack';
import { Tag } from '../Tag';
import { SINGLE_LINE_MAX_ALLOWED_HEIGHT } from './constants';

/** 👉 ROOT ELEMENT */
export const DropdownRoot = styled.div.withConfig(
    propsBlocker,
)<DropdownRootPropsType>`
    display: inline-block;

    ${getComponentOverride('Dropdown')};
    ${marginProps};
    ${widthProps};
`;

export const DropdownContainer = styled.div.withConfig(
    propsBlocker,
)<DropdownRootPropsType>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    ${mouseCursor}
`;

const getOptionListContainerStyle = ({
    zIndex,
}: DropdownOptionListContainerPropsType) => {
    return css`
        z-index: ${zIndex};
    `;
};

export const DropdownOptionListContainer = styled.div.withConfig(
    propsBlocker,
)<DropdownOptionListContainerPropsType>`
    ${getOptionListContainerStyle};
    ${widthProps};
`;

export const ActionsContainer = styled.div.withConfig(propsBlocker)`
    display: flex;
    align-self: flex-start;
    margin: ${spacing(2, 3, 'auto', 0)};
`;

export const DropdownExpansionIndicator = styled(
    ExpansionIndicator,
)<ExpansionIndicatorContainerPropsType>``;

const dropdownTextRootStyle = ({ multiple }: DropdownTextInputPropsType) => {
    let result = {};

    if (multiple) {
        result = css`
            ${result};
            min-width: ${spacing(70)};
        `;
    }

    return result;
};

const dropdownTextInputStyle = ({
    multiple,
    isCustomRenderer,
    internalValue,
}: DropdownTextInputPropsType) => {
    let result = css`
        ${mouseCursor}
    `;

    if (multiple && !isCustomRenderer && internalValue.length) {
        result = css`
            ${result};
            padding-right: 0;
            padding-left: 0;
            width: 0;
        `;
    }

    return result;
};

export const DropdownTextInput = styled(TextInput)<DropdownTextInputPropsType>`
    ${focusWithin({ noOutline: true })};
    ${dropdownTextRootStyle}

    .TextInput-Input {
        ${dropdownTextInputStyle}
    }
`;

const dropdownBeforeSectionContainerStyle = ({
    singleLine,
}: DropdownTagsSectionPropsType) => {
    let result = css`
        ${mouseCursor}
    `;

    if (singleLine) {
        result = css`
            ${result};
            height: ${SINGLE_LINE_MAX_ALLOWED_HEIGHT}px;
        `;
    }

    return result;
};

export const DropdownBeforeSectionRoot = styled(
    Pack,
)<DropdownTagsSectionPropsType>`
    padding-left: ${spacing(4)};
    min-width: ${spacing(40)};
    min-height: ${spacing(10)};
    width: 100%;

    ${dropdownBeforeSectionContainerStyle}
`;

export const DropdownBeforeSectionContainer = styled(PackItem)`
    width: 100%;
    padding-top: ${spacing(1)};
    padding-bottom: ${spacing(1)};
`;

export const DropdownBeforeSectionWrapper = styled.div.withConfig(propsBlocker)`
    width: fit-content;
`;

export const DropdownBeforeSectionActionContainer = styled(
    PackItem,
)<DropdownTagsSectionPropsType>`
    box-sizing: border-box;
    width: ${spacing(6)};
`;

export const DropdownBeforeSectionClearButton = styled(
    PackItem,
)<DropdownTagsSectionPropsType>`
    position: absolute;
    border: 0 none;
    background-color: transparent;
    outline: none;
    flex: 0 0 auto;
    margin-top: ${spacing(1.75)};
`;

export const DropdownTag = styled(Tag).attrs({
    small: true,
})<DropdownTagsSectionPropsType>`
    margin-top: ${spacing(1)};
    margin-right: ${spacing(2)};
    margin-bottom: ${spacing(1)};

    .Typography-Root {
        margin-left: ${spacing(1)};
        margin-right: ${spacing(1)};
    }

    ${mouseCursor}
`;

export const DropdownCancelIcon = CancelIcon;

export const DropdownArrow = styled.div``;

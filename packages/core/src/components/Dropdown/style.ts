import styled, { css } from 'styled-components';
import { CancelIcon, SVGIconPropsType } from '@deliveryhero/armor-icons';
import {
    marginProps,
    widthProps,
    color,
    spacing,
    propsBlocker,
    getComponentOverride,
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

const dropdownExpansionIndicatorContentStyle = ({
    multiple,
}: ExpansionIndicatorContainerPropsType) =>
    multiple
        ? css`
              align-items: flex-start;
              margin-top: ${spacing(2.5)};
          `
        : css`
              height: ${spacing(8)};
          `;

export const ExpansionIndicatorContainer = styled.div.withConfig(
    propsBlocker,
)<ExpansionIndicatorContainerPropsType>`
    align-self: stretch;
`;

export const DropdownExpansionIndicator = styled(
    ExpansionIndicator,
)<ExpansionIndicatorContainerPropsType>`
    cursor: pointer;

    .ExpansionIndicator-Content {
        width: ${spacing(14)};

        ${dropdownExpansionIndicatorContentStyle}
    }
`;

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
    disabled,
    multiple,
    isCustomRenderer,
    internalValue,
}: DropdownTextInputPropsType) => {
    let result = css`
        cursor: ${disabled ? 'default' : 'pointer'};
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
    ${dropdownTextRootStyle}

    .TextInput-Input {
        ${dropdownTextInputStyle}
    }
`;

const dropdownBeforeSectionContainerStyle = ({
    disabled,
    singleLine,
}: DropdownTagsSectionPropsType) => {
    let result = css`
        cursor: ${disabled ? 'default' : 'pointer'};
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
    padding-right: ${spacing(4)};
    min-width: ${spacing(40)};
    min-height: ${spacing(10)};
    width: 100%;

    ${dropdownBeforeSectionContainerStyle}
`;

export const DropdownBeforeSectionTagsContainer = styled(
    PackItem,
)<DropdownTagsSectionPropsType>`
    width: 100%;
    padding-top: ${spacing(1)};
    padding-bottom: ${spacing(1)};
`;

export const DropdownBeforeSectionTagsWrapper = styled.div.withConfig(
    propsBlocker,
)<DropdownTagsSectionPropsType>`
    width: fit-content;
`;

export const DropdownBeforeSectionActionContainer = styled(
    PackItem,
)<DropdownTagsSectionPropsType>`
    width: ${spacing(4)};
`;

const dropdownBeforeSectionClearButtonStyle = ({
    disabled,
}: DropdownTagsSectionPropsType) =>
    css`
        color: ${disabled ? color('neutral.05') : color('neutral.11')};
        cursor: ${disabled ? 'default' : 'pointer'};
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
    margin-left: ${spacing(2)};
    ${dropdownBeforeSectionClearButtonStyle}

    ${getComponentOverride('DropdownBeforeSectionClearButton')};
`;

const dropdownTagStyle = ({ disabled }: DropdownTagsSectionPropsType) => {
    return css`
        cursor: ${disabled ? 'default' : 'pointer'};
    `;
};

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
    ${dropdownTagStyle};
`;

export const DropdownCancelIcon = styled(CancelIcon)<SVGIconPropsType>`
    vertical-align: middle;
`;

export const DropdownArrow = styled.div``;

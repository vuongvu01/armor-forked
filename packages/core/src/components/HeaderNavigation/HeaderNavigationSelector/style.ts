import styled, { css } from 'styled-components';
import {
    color,
    spacing,
    getComponentOverride,
    propsBlocker,
    zIndex,
} from '@deliveryhero/armor-system';

import { HeaderNavigationSelectorRootPropsType } from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';
import { Stack, StackItem } from '../../Stack';
import { PackItem } from '../../Pack';
import { OptionList } from '../../OptionList';
import { ExpansionIndicator } from '../../ExpansionIndicator';

export const HeaderNavigationSelectorWrapper = styled(Stack)``;

const itemSelectorStyle = ({
    separator,
}: HeaderNavigationSelectorRootPropsType) => {
    let result = css`
        border-right-color: ${color('neutral.03')};
    `;

    if (!separator) {
        result = css`
            ${result};
            border-right: none;
        `;
    }

    return result;
};

export const SelectorDropdownOptionListContainer = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationSelectorRootPropsType>`
    ${zIndex};
`;

export const SelectorDropdownOptionList = styled(OptionList)`
    width: 100%;
    min-width: fit-content;

    right: -${spacing(4)};
    left: auto;
    top: ${spacing(3.25)};

    .HeaderNavigationSelector-OptionList {
        width: 100%;
    }
`;

/** 👉 ROOT ELEMENT */
// NOTE: `:focus:not(:focus-visible)` allows for outline to appear when navigated via Tab, and omits it on mouse click
export const HeaderNavigationSelectorRoot = styled(
    HeaderNavigationItem,
)<HeaderNavigationSelectorRootPropsType>`
    padding-top: 0;
    padding-right: ${spacing(4)};
    padding-bottom: 0;
    padding-left: ${spacing(4)};
    height: ${spacing(12)};
    border-right-width: 1px;
    border-right-style: solid;
    cursor: pointer;
    display: flex;
    align-items: center;

    :focus:not(:focus-visible) {
        outline: 0;
    }

    ${itemSelectorStyle};
    ${getComponentOverride('HeaderNavigationSelector')};
`;

export const SelectedOptions = styled(
    StackItem,
)<HeaderNavigationSelectorRootPropsType>``;

export const SelectorLabel = styled(
    PackItem,
)<HeaderNavigationSelectorRootPropsType>`
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SelectorExpansionIndicator = styled(
    ExpansionIndicator,
)<HeaderNavigationSelectorRootPropsType>``;

import styled from 'styled-components';
import {
    color,
    spacing,
    propsBlocker,
    zIndex,
    widthProps,
    typography,
    token,
    popperArrow,
    popperArrowPlacement,
    borderRadius,
    zIndexModal,
} from '@deliveryhero/armor-system';

import {
    Stack,
    StackItem,
    PackItem,
    OptionList,
    Flex,
    Typography,
} from '@deliveryhero/armor';
import {
    HeaderNavigationSelectorOptionsListItemRootPropsType,
    HeaderNavigationSelectorOptionsListItemWrapperPropsType,
    HeaderNavigationSelectorRootPropsType,
} from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';

export const HeaderNavigationSelectorWrapper = styled(Stack)``;

export const SelectorDropdownOptionListContainer = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationSelectorRootPropsType>`
    position: relative;
    color: ${color('neutral.07')};
    border-radius: ${borderRadius('soft')};
    background-color: ${color('neutral.00')};

    box-shadow: ${token('elevation.large')};
    ${zIndex};
    ${popperArrowPlacement('HeaderNavigationSelector-Arrow')};
`;
export const SelectorDropdownOptionListWrapper = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationSelectorRootPropsType>`
    position: relative;
    right: 0;
    width: fit-content;
    ${widthProps};
`;

export const SelectorDropdownOptionList = styled(OptionList)`
    position: relative;
    top: 0;
    padding: ${spacing(2, 0)};
    border-radius: ${borderRadius('soft')};
    .HeaderNavigationSelector-OptionList {
        width: 100%;
    }

    .OptionList-Item {
        border: unset;
        padding: 0;
    }

    .OptionList-Item.active .HeaderNavigationSelector-OptionListItemWrapper {
        border-left-color: ${color('primary.07')};
    }

    .OptionList-Item.active
        .HeaderNavigationSelector-OptionListItem
        .Typography-Root {
        ${typography('labelMedium')}
    }

    .OptionList-Item .OptionListItem-Typography {
        max-height: unset;
    }
`;

/** 👉 ROOT ELEMENT */
// NOTE: `:focus:not(:focus-visible)` allows for outline to appear when navigated via Tab, and omits it on mouse click
export const HeaderNavigationSelectorRoot = styled(
    HeaderNavigationItem,
)<HeaderNavigationSelectorRootPropsType>`
    padding: ${spacing(0, 4)};
    height: ${spacing(12)};
    cursor: pointer;
    display: flex;
    align-items: center;

    :focus:not(:focus-visible) {
        outline: 0;
    }
`;

export const SelectedOptions = styled(
    StackItem,
)<HeaderNavigationSelectorRootPropsType>`
    .HeaderNavigationSelector-SelectedOptionsExpansionIndicatorContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const SelectorLabel = styled(
    PackItem,
)<HeaderNavigationSelectorRootPropsType>`
    max-width: ${spacing(75)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SelectorOptionListItemLabelRoot = styled(
    Flex,
)<HeaderNavigationSelectorOptionsListItemRootPropsType>`
    min-width: ${spacing(75)};
    padding: ${({ isIconPresent }) =>
        isIconPresent ? spacing(2, 0) : spacing(0)};
`;

export const SelectorOptionListItemLabelWrapper = styled(
    Flex,
)<HeaderNavigationSelectorOptionsListItemWrapperPropsType>`
    border-left: 2px solid transparent;
    height: ${spacing(10)};
`;

export const SelectorOptionListItemIconWrapper = styled(Flex)`
    padding-left: ${spacing(4)};
`;

export const SelectorOptionListItemIconContainer = styled(Flex)`
    width: ${spacing(10)};
    height: ${spacing(10)};
    border: 1px solid ${color('neutral.03')};
    border-radius: ${borderRadius('round')};
    justify-content: center;
    align-items: center;
    background-color: ${color('neutral.00')};
`;

export const SelectorOptionListItemLabelContainer = styled(Flex)`
    justify-content: center;
    align-items: center;
    padding-left: ${spacing(4)};
`;

export const SelectorOptionListItemLabel = styled(Typography)`
    ${typography('paragraphMedium')}
`;

export const ContextMenuArrow = styled.div.withConfig(propsBlocker)`
    ${popperArrow};
    ${zIndex({ zIndex: zIndexModal })};
`;

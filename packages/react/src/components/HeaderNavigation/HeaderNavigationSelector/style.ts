import styled, { css } from 'styled-components';
import { HeaderNavigationSelectorRootPropsType } from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';
import { color, spacing, typography } from '../../../system/mixins';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { Stack, StackItem } from '../../Stack';
import { PackItem } from '../../Pack';
import { OptionList } from '../../OptionList';
import { ExpansionIndicator } from '../../ExpansionIndicator';
import { getPropsBlocker } from '../../../utils';

export const HeaderNavigationSelectorWrapper = styled(Stack)<
    HeaderNavigationSelectorRootPropsType
>``;

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

export const SelectorDropdownOptionListContainer = styled.div<
    HeaderNavigationSelectorRootPropsType
>`
    position: relative;
`;
export const SelectorDropdownOptionListWrapper = styled.div<
    HeaderNavigationSelectorRootPropsType
>`
    position: absolute;
    right: 0px;
    top: ${spacing(2)};
`;

export const SelectorDropdownOptionList = styled(OptionList)<
    HeaderNavigationSelectorRootPropsType
>`
    width: fit-content;
    position: relative;

    .HeaderNavigationSelector-OptionList {
        width: 100%;
    }
`;

// NOTE: `:focus:not(:focus-visible)` allows for outline to appear when navigated via Tab, and omits it on mouse click
export const HeaderNavigationSelectorRoot = styled(
    HeaderNavigationItem,
).withConfig(getPropsBlocker({}, false))<HeaderNavigationSelectorRootPropsType>`
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

    ${itemSelectorStyle}
    ${getComponentOverride('HeaderNavigationSelector')};
`;

export const SelectedOptions = styled(StackItem)<
    HeaderNavigationSelectorRootPropsType
>``;

export const SelectorLabel = styled(PackItem).withConfig(
    getPropsBlocker({}, false),
)<HeaderNavigationSelectorRootPropsType>`
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${typography('paragraphMedium')};
`;

export const SelectorExpansionIndicator = styled(ExpansionIndicator)<
    HeaderNavigationSelectorRootPropsType
>`
    .ExpansionIndicator-Icon {
        color: ${color('neutral.06')};
    }
`;

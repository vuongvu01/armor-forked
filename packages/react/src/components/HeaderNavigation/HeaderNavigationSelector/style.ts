import styled, { css } from 'styled-components';
import { HeaderNavigationSelectorRootPropsType } from './type';
import {
    colorGrey00,
    colorGrey05,
    colorGrey30,
    colorGrey50,
} from '../../../tokens';
import { HeaderNavigationPackItem } from '../HeaderNavigationPackItem';
import { Dropdown } from '../../Dropdown';

export const HeaderNavigationSelectorRoot = styled.div<
    HeaderNavigationSelectorRootPropsType
>``;

const packItemSelectorStyle = ({
    separator,
    theme: {
        componentOverrides: { HeaderNavigationSelector },
    },
}: HeaderNavigationSelectorRootPropsType) => {
    let result = HeaderNavigationSelector.NavigationPackItem.base;

    if (!separator) {
        result = css`
            ${result};
            border-right: none;
        `;
    }

    return result;
};

export const NavigationPackItemSelector = styled(HeaderNavigationPackItem)<
    HeaderNavigationSelectorRootPropsType
>`
    padding-top: 0;
    padding-bottom: 0;
    height: 48px;
    border-right-width: 1px;
    border-right-style: solid;

    ${packItemSelectorStyle}
`;

export const SelectorDropdown = styled(Dropdown)<
    HeaderNavigationSelectorRootPropsType
>`
    .HeaderNavigationSelector-SelectorDropdown.Dropdown-ExpansionIndicatorContainer {
        background-color: ${colorGrey05};
    }
    .HeaderNavigationSelector-SelectorDropdown.ExpansionIndicator-Icon {
        border-color: ${colorGrey50};
    }
    .HeaderNavigationSelector-SelectorDropdown > .TextInput-Input {
        cursor: pointer;
        caret-color: ${colorGrey00};
        background-color: ${colorGrey05};
        text-align: right;
        padding-right: 0;
        &:disabled {
            color: ${colorGrey30};
        }
    }
    .HeaderNavigationSelector-SelectorDropdown.Dropdown-TextInput {
        border-style: none;
        height: 40px;
        padding-top: 2px;
        cursor: pointer;
        background-color: ${colorGrey05};
    }
    .HeaderNavigationSelector-SelectorDropdown.Dropdown-Container {
        padding-top: 4px;
    }
`;

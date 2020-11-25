import styled, { css } from 'styled-components';
import { HeaderNavigationSelectorRootPropsType } from './type';
import {
    colorGrey00,
    colorGrey05,
    colorGrey30,
    colorGrey50,
    colorGrey90,
} from '../../../tokens';
import { HeaderNavigationPackItem } from '../HeaderNavigationPackItem';
import { Dropdown } from '../../Dropdown';
import { spacing } from '../../../system/mixins';

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
    height: ${spacing(12)};
    border-right-width: 1px;
    border-right-style: solid;

    ${packItemSelectorStyle}
`;

export const SelectorDropdown = styled(Dropdown)<
    HeaderNavigationSelectorRootPropsType
>`
    .Dropdown-ExpansionIndicatorContainer {
        background-color: ${colorGrey05};
    }
    .ExpansionIndicator-Icon {
        border-color: ${colorGrey50};
    }
    .TextInput-Input {
        cursor: pointer;
        caret-color: ${colorGrey00};
        background-color: ${colorGrey05};
        text-align: right;
        padding-right: 0;
        &:disabled {
            color: ${colorGrey30};
        }
        &::placeholder {
            color: ${colorGrey90};
        }
    }
    .Dropdown-TextInput {
        border-style: none;
        height: ${spacing(10)};
        cursor: pointer;
        background-color: ${colorGrey05};
    }
    .Dropdown-Container {
        padding-top: ${spacing(1)};
    }
    .Dropdown-OptionList {
        top: ${spacing(2)};
    }
`;

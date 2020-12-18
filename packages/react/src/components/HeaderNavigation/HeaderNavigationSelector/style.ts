import styled, { css } from 'styled-components';
import { HeaderNavigationSelectorRootPropsType } from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';
import { Dropdown } from '../../Dropdown';
import { color, spacing } from '../../../system/mixins';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';

export const HeaderNavigationSelectorRoot = styled.div<
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

export const NavigationItemSelector = styled(HeaderNavigationItem)<
    HeaderNavigationSelectorRootPropsType
>`
    padding-top: 0;
    padding-bottom: 0;
    height: ${spacing(12)};
    border-right-width: 1px;
    border-right-style: solid;

    ${itemSelectorStyle}
    ${getComponentOverride('HeaderNavigationSelector')};
`;

export const SelectorDropdown = styled(Dropdown)<
    HeaderNavigationSelectorRootPropsType
>`
    .Dropdown-ExpansionIndicatorContainer {
        background-color: ${color('neutral.02')};
    }
    .ExpansionIndicator-Icon {
        border-color: ${color('neutral.05')};
    }
    .TextInput-Input {
        cursor: pointer;
        caret-color: ${color('neutral.00')};
        background-color: ${color('neutral.02')};
        text-align: right;
        padding-right: 0;
        &:disabled {
            color: ${color('neutral.04')};
        }
        &::placeholder {
            color: ${color('neutral.06')};
        }
    }
    .Dropdown-TextInput {
        border-style: none;
        height: ${spacing(10)};
        cursor: pointer;
        background-color: ${color('neutral.02')};
    }
    .Dropdown-Container {
        padding-top: ${spacing(1)};
    }
    .Dropdown-OptionList {
        top: ${spacing(2)};
    }

    ${getComponentOverride('HeaderNavigationSelectorDropdown')};
`;

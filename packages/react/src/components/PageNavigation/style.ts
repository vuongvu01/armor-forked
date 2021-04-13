import styled, { css } from 'styled-components';
import {
    PageNavigationButtonsPropsType,
    PageNavigationPageButtonPropsType,
    PageNavigationRootPropsType,
    PageNavigationSizePropsType,
} from './type';
import { transitionDurationInSec } from '../../constants';
import {
    color,
    reset,
    spacing,
    typography,
    marginAttributes,
    getComponentOverride,
    propsBlocker,
} from '../../system';
import { Dropdown } from '../Dropdown';

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const PageNavigationRoot = styled.div.withConfig(propsBlocker)<
    PageNavigationRootPropsType
>`
    ${reset()};
    ${typography('paragraphMedium')};
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    ${getComponentOverride('PageNavigation')};
    ${marginAttributes}
`;

const getButtonBaseStyle = ({ theme }: PageNavigationPageButtonPropsType) =>
    theme.componentOverrides.PageNavigation.PageButton.base;

const getButtonDynamicStyle = ({
    theme,
    arrow,
    disabled,
    selected,
}: PageNavigationPageButtonPropsType) => {
    const {
        componentOverrides: {
            PageNavigation: { PageButton },
        },
    } = theme;

    let result = css`
        position: relative;
        &:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 2px;
            border-radius: 1px;
            display: none;
        }
    `;

    if (arrow) {
        result = css`
            ${PageButton.arrow};
        `;
    }

    if (selected) {
        result = css`
            ${result};
            &:before {
                display: initial;
            }
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            &:hover {
                background-color: transparent;
            }
            cursor: initial;
            ${PageButton.disabled};
        `;
    }

    return result;
};

export const PageNavigationButtons = styled.div.withConfig(propsBlocker)<
    PageNavigationButtonsPropsType
>`
    ${reset()};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

export const PageNavigationPageButton = styled.button.withConfig(propsBlocker)<
    PageNavigationPageButtonPropsType
>`
    ${reset()};
    user-select: none;
    appearance: none;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
    transition: background-color ${transitionDurationInSec}s ease-out;
    display: flex;
    align-items: center;

    ${getButtonBaseStyle}
    ${getButtonDynamicStyle}
`;

export const PageNavigationPageSize = styled.div.withConfig(propsBlocker)<
    PageNavigationSizePropsType
>`
    ${reset()};
    color: ${color('neutral.04')};
    margin-right: ${spacing(10)};
    white-space: nowrap;
`;

export const PageNavigationPageSizeSelector = styled(Dropdown)`
    margin-left: ${spacing(3)};
    width: ${spacing(32)};
`;

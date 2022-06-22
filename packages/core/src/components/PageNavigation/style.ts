import styled, { css } from 'styled-components';
import {
    color,
    reset,
    spacing,
    typography,
    marginProps,
    getComponentOverride,
    propsBlocker,
    durationNormal,
    borderRadius,
    focus,
    token,
} from '@deliveryhero/armor-system';

import {
    PageNavigationButtonsPropsType,
    PageNavigationPageButtonPropsType,
    PageNavigationRootPropsType,
    PageNavigationSizePropsType,
} from './type';
import { Dropdown } from '../Dropdown';

/** 👉 ROOT ELEMENT */
export const PageNavigationRoot = styled.div.withConfig(
    propsBlocker,
)<PageNavigationRootPropsType>`
    ${reset()};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    ${getComponentOverride('PageNavigation')};
    ${focus()};
    ${marginProps};
`;

const getButtonStyle = ({
    arrow,
    disabled,
    selected,
}: PageNavigationPageButtonPropsType) => {
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
    ` as {};

    if (arrow) {
        result = css`
            ${result};
            padding-left: ${spacing(1)};
            padding-right: ${spacing(1)};
            color: ${color('neutral.07')};
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
            color: ${color('neutral.05')};
        `;
    }

    return result;
};

export const PageNavigationButtons = styled.div.withConfig(
    propsBlocker,
)<PageNavigationButtonsPropsType>`
    ${reset()};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

export const PageNavigationPageButton = styled.button.withConfig(
    propsBlocker,
)<PageNavigationPageButtonPropsType>`
    ${reset()};
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    color: ${color('neutral.11')};
    user-select: none;
    appearance: none;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
    transition: background-color ${durationNormal}ms ease-out;
    display: flex;
    align-items: center;
    padding: ${spacing(1, 3)};
    border-radius: ${borderRadius('soft')};
    min-height: ${spacing(2)};

    &:hover {
        background-color: ${color('primary.lightest')};
    }
    &:not(:last-child) {
        margin-right: ${spacing(1)};
    }
    &:before {
        background-color: ${color('primary.main')};
    }
    ${getButtonStyle};
`;

export const PageNavigationPageSize = styled.div.withConfig(
    propsBlocker,
)<PageNavigationSizePropsType>`
    ${reset()};
    color: ${color('neutral.05')};
    margin-right: ${spacing(10)};
    white-space: nowrap;
`;

export const PageNavigationPageSizeSelector = styled(Dropdown)`
    margin-left: ${spacing(3)};

    .Dropdown-TextInput {
        border-color: ${color('neutral.03')};
    }
    .TextInput-Input {
        padding: ${spacing(1.5, 0, 1.5, 2)};
        width: ${spacing(8.5)};

        &:focus {
            outline: unset;
            box-shadow: unset;
        }
    }
    .ExpansionIndicator-Content {
        width: ${spacing(8.5)};
    }
    .ExpansionIndicator-Icon {
        color: ${color('primary.07')};
    }
`;

import styled, { css } from 'styled-components';
import {
    PageNavigationPageButtonPropsType,
    PageNavigationRootPropsType,
} from './type';
import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp, makePropList } from '../../utils';
import { transitionDurationInSec } from '../../constants';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    'arrow',
    'selected',
    'disabled',
    'pageNumber',
    'itemCount',
    'pageSize',
    'displayRange',
    'onPageSelect',
]);

const getRootBaseStyle = ({ theme }: PageNavigationRootPropsType) =>
    theme.componentOverrides.PageNavigation.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const PageNavigationRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<PageNavigationRootPropsType>`
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    ${getRootBaseStyle}
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

export const PageNavigationPageButton = styled.button.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<PageNavigationPageButtonPropsType>`
    box-sizing: border-box;
    user-select: none;
    appearance: none;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    transition: background-color ${transitionDurationInSec}s ease-out;
    display: flex;
    align-items: center;

    ${getButtonBaseStyle}
    ${getButtonDynamicStyle}
`;

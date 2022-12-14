import styled, { css } from 'styled-components';
import {
    marginProps,
    propsBlocker,
    reset,
    typography,
    color,
    componentSpacing02,
    componentSpacing04,
    spacing,
    mouseCursor,
    transition,
    borderRadius,
    token,
} from '@deliveryhero/armor-system';
import { ContentSwitcherControlRootPropsType } from './type';

const getRootStyle = () => css`
    padding: ${spacing(componentSpacing02, componentSpacing04)};
    background-color: ${color('neutral.00')};
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    flex-grow: 1;
    justify-content: center;
    & > * {
        color: ${color('neutral.11')};
    }
    &:hover > * {
        color: ${color('primary.05')};
        ${transition({
            color: true,
        })};
    }
    &:active {
        background-color: ${color('neutral.02')};
        color: ${color('primary.10')};
    }
    &::before {
        position: absolute;
        left: -1px;
        display: block;
        width: 1px;
        height: 1rem;
        background-color: ${color('neutral.03')};
        content: '';
    }
    &:first-child::before {
        content: none;
    }
    &:first-of-type {
        border-top-left-radius: ${borderRadius('soft')};
        border-bottom-left-radius: ${borderRadius('soft')};
        border-left: unset;
    }
    &:last-of-type {
        border-top-right-radius: ${borderRadius('soft')};
        border-bottom-right-radius: ${borderRadius('soft')};
        border-right: unset;
    }
    ${transition({
        'background-color': true,
        color: true,
        'border-color': true,
    })};
`;

const getDynamicStyle = (props: ContentSwitcherControlRootPropsType) => {
    let result = {};
    const { selected, afterSelected } = props;
    if (selected) {
        result = css`
            color: ${color('primary.07')};
            background-color: ${color('primary.01')};
            border: 1px solid ${color('primary.07')};
            margin-top: -1px;
            margin-bottom: -1px;
            & > * {
                color: ${color('primary.07')} !important;
            }
            &::before {
                content: none;
            }
            &:first-of-type {
                border-left: 1px solid ${color('primary.07')};
                margin-left: -1px;
            }
            &:last-of-type {
                border-right: 1px solid ${color('primary.07')};
                margin-right: -1px;
            }
        `;
    }

    if (afterSelected) {
        result = css`
            &::before {
                content: none;
            }
        `;
    }
    return result;
};

/** ???? ROOT ELEMENT */
export const ContentSwitcherControlRoot = styled.button.withConfig(
    propsBlocker,
)<ContentSwitcherControlRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    ${mouseCursor}
    ${getRootStyle}
    ${getDynamicStyle};
    ${marginProps};
`;

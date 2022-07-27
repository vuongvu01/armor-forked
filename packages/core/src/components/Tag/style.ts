import styled, { css } from 'styled-components';
import {
    borderRadius,
    color,
    getComponentOverride,
    marginProps,
    propsBlocker,
    reset,
    spacing,
    typography,
    durationNormal,
    token,
} from '@deliveryhero/armor-system';

import {
    TagClearButtonContainerPropsType,
    TagIconContainerPropsType,
    TagIndicatorContainerPropsType,
    TagRootPropsType,
    TagTextPropsType,
} from './type';
import { TAG_DELETE_BEHAVIOUR_OPTIONS, TAG_TYPES } from './constants';

const makeBorder = (borderColor: string) => () =>
    css`
        box-shadow: inset 0 0 0 1px ${color(borderColor)};
    `;

const textStyle = ({
    smallVerticalPadding,
    deleteOption,
    isDisabled,
}: TagTextPropsType) => {
    const result = css`
        && {
            margin: 0 ${spacing(smallVerticalPadding ? 1 : 2)};
        }
    `;

    if (!isDisabled && deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ENABLED) {
        return css`
            ${result};

            && {
                margin-right: ${spacing(1)};
            }
        `;
    }

    return result;
};

export const TagText = styled.div<TagTextPropsType>`
    ${typography('paragraphSmall')};
    color: ${token('body.color')};
    ${textStyle};
`;

const tagIndicatorSpacing = ({ small }: TagIndicatorContainerPropsType) => {
    return css`
        padding-right: ${small ? spacing(1) : spacing(2)};
        padding-left: ${small ? spacing(1) : spacing(2)};
        margin-top: ${small ? spacing(0.5) : spacing(1)};
        margin-bottom: ${small ? spacing(0.5) : spacing(1)};
        margin-right: ${small ? spacing(0.5) : spacing(0)};
    `;
};

export const TagIndicatorContainer = styled.div<TagIndicatorContainerPropsType>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: ${color('primary.lightest')};
    border-radius: ${borderRadius('pill')};
    background-color: ${color('white')};
    color: ${color('neutral.11')};
    ${typography('paragraphSmall')};
    ${tagIndicatorSpacing};
`;

const tagIconSpacing = ({ small }: TagIconContainerPropsType) => {
    return css`
        font-size: 12px;
        margin-left: ${small ? spacing(1) : spacing(2)};
        margin-top: ${spacing(1)};
        margin-bottom: ${spacing(1)};
        margin-right: ${small ? spacing(1) : spacing(0)};
    `;
};

export const TagIconContainer = styled.div<TagIconContainerPropsType>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color('neutral.11')};
    ${tagIconSpacing}
`;

const getRootStyle = ({
    deleteOption,
    type,
    small,
    enableContentWrapping,
    filled,
    icon,
    indicator,
    disabled,
}: TagRootPropsType) => {
    let result = css`
        height: ${spacing(small ? 6 : 7)};
    `;

    if (enableContentWrapping === false) {
        result = css`
            ${result};
            overflow-y: visible;
            white-space: nowrap;
        `;
    }

    if (!!(icon || indicator) && small) {
        result = css`
            ${result};
            padding-left: ${spacing(0.5)};
        `;
    }

    const minStatusTagWidth = css`
        min-width: ${spacing(19)};
    `;

    if (disabled) {
        const backgroundColor = color('neutral.03', 0.4);
        const textColor = color('neutral.07');

        result = css`
            ${result};

            && {
                background-color: ${backgroundColor};
                border-color: ${backgroundColor};
                color: ${textColor};
                box-shadow: none;

                ${TagText},
                ${TagIconContainer} {
                    color: ${textColor};
                }

                ${TagIndicatorContainer} {
                    color: ${textColor};
                }
            }
        `;
    }

    // todo: refactor this
    switch (type) {
        case TAG_TYPES.APPROVED:
            return css`
                ${result};
                ${minStatusTagWidth};
                background-color: ${color('success.light')};
                box-shadow: none;
            `;
        case TAG_TYPES.DENIED:
            return css`
                ${result};
                ${minStatusTagWidth};
                background-color: ${color('error.lighter')};
                box-shadow: none;
            `;
        case TAG_TYPES.NEW:
            return css`
                ${result};
                ${minStatusTagWidth};
                background-color: ${color('warning.light')};
                box-shadow: none;
            `;
        case TAG_TYPES.ON_HOLD:
            return css`
                ${result};
                ${minStatusTagWidth};
                background-color: ${color('primary.02')};
                box-shadow: none;
            `;
        default: {
            result = css`
                ${result};
                background-color: ${color('primary.00')};
            `;

            if (filled) {
                return css`
                    ${result};
                    background-color: ${color('primary.lightest')};
                `;
            }

            if (deleteOption === 'enabled') {
                return css`
                    ${result};
                    padding-right: ${spacing(1)};
                `;
            }

            if (deleteOption === 'disabled') {
                return result;
            }

            return css`
                ${result};
                justify-content: flex-end;
            `;
        }
    }
};

const clearButtonContainerStyle = ({
    deleteOption,
    disabled,
    small,
}: TagClearButtonContainerPropsType): ReturnType<typeof css> => {
    let result = css`
        border-radius: ${borderRadius('pill')};
        height: 100%;
        width: ${spacing(6)};
    `;

    if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ENABLED) {
        return css`
            ${result};
            position: relative;
            margin-right: ${small ? '-4px' : '-2px'};
            opacity: 1;
        `;
    }

    if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ON_HOVER) {
        result = css`
            ${result};
            margin-left: 8px;
            position: absolute;
        `;

        if (!disabled) {
            result = css`
                ${result};
                transform: translateX(12px);
            `;
        }

        return result;
    }

    return result;
};

export const TagClearButtonContainer = styled.div.withConfig(
    propsBlocker,
)<TagClearButtonContainerPropsType>`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    outline: none;
    ${clearButtonContainerStyle};
`;

/** 👉 ROOT ELEMENT */
export const TagRoot = styled.div.withConfig(propsBlocker)<TagRootPropsType>`
    ${reset()};
    position: relative;
    ${makeBorder('primary.lighter')}
    box-sizing: border-box;
    cursor: default;
    display: inline-flex;
    flex-flow: row nowrap;
    width: fit-content;
    user-select: none;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background: ${color('neutral.00')};
    border-radius: ${borderRadius('pill')};
    padding-left: ${spacing(1)};
    padding-right: ${spacing(1)};

    &.Tag-Root--onHover:hover ${TagClearButtonContainer} {
        transform: translateX(${({ small }) => (small ? '4px' : '2px')});
        opacity: 1;
        transition: transform ${durationNormal}ms ease;
    }

    ${getRootStyle};
    ${marginProps};
    ${getComponentOverride('Tag')};
`;

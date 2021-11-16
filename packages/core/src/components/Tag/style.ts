import styled, { css } from 'styled-components';
import { CancelIcon } from '@deliveryhero/armor-icons';
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
} from '@deliveryhero/armor-system';

import {
    TagCloseIconContainerPropsType,
    TagCloseIconPropsType,
    TagRootPropsType,
    TagTextPropsType,
} from './type';
import { TAG_DELETE_BEHAVIOUR_OPTIONS, TAG_TYPES } from './constants';

const getRootStyle = ({
    deleteOption,
    theme: {
        componentOverrides: { Tag },
    },
    type,
    small,
    enableContentWrapping,
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

    const minStatusTagWidth = css`
        min-width: ${spacing(19)};
    `;

    // todo: refactor this
    switch (type) {
        case TAG_TYPES.APPROVED:
            return css`${result}${minStatusTagWidth}${Tag.Root.base}${Tag.Root.approved}`;
        case TAG_TYPES.DENIED:
            return css`${result}${minStatusTagWidth}${Tag.Root.base}${Tag.Root.denied}`;
        case TAG_TYPES.NEW:
            return css`${result}${minStatusTagWidth}${Tag.Root.base}${Tag.Root.new}`;
        default: {
            if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ENABLED) {
                return css`${result}${Tag.Root.base}${Tag.Root.enabled}`;
            }

            if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.DISABLED) {
                return css`${result}${Tag.Root.base}`;
            }

            return css`
                ${result}
                ${Tag.Root.base};
                justify-content: flex-end;
            `;
        }
    }
};
const textStyle = ({
    smallVerticalPadding,
    deleteOption,
    theme: {
        componentOverrides: { Tag },
    },
}: TagTextPropsType) => {
    const result = css`
        && {
            margin: ${spacing(smallVerticalPadding ? 0.25 : 1)}
                ${spacing(smallVerticalPadding ? 1 : 2)}
                ${spacing(smallVerticalPadding ? 0.75 : 1)}
                ${spacing(smallVerticalPadding ? 1 : 2)};
        }
    `;

    if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ENABLED) {
        return css`
            ${result}
            ${Tag.Typography.base}
            ${Tag.Typography.enabled}
        `;
    }

    return css`
        ${result}
        ${Tag.Typography.base}
    `;
};

const closeIconContainerStyle = ({
    deleteOption,
    disabled,
    small,
}: TagCloseIconContainerPropsType) => {
    let result = css`
        cursor: ${disabled ? 'default' : 'pointer'};
        border-color: ${color('primary.lightest')};
        border-radius: ${borderRadius('pill')};
        height: ${spacing(small ? 4 : 5)};
        width: ${spacing(small ? 4 : 5)};
    `;

    if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ENABLED) {
        return css`
            ${result};
            margin-top: 3px;
            opacity: 1;

            &:hover {
                background-color: ${disabled
                    ? 'transparent'
                    : color('neutral.02')};
            }
        `;
    }

    if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ON_HOVER) {
        result = css`
            ${result};
            margin-top: 3px;
            margin-left: 8px;
            position: absolute;
        `;

        if (!disabled) {
            result = css`
                ${result};
                transform: translateX(12px);
                background-color: ${color('primary.lightest')};

                &:hover {
                    background-color: ${color('neutral.02')};
                }
            `;
        }

        return result;
    }

    return result;
};

export const TagCloseIconContainer = styled.div.withConfig(propsBlocker)<
    TagCloseIconContainerPropsType
>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    outline: none;

    ${closeIconContainerStyle}
`;

/** 👉 ROOT ELEMENT */
export const TagRoot = styled.div.withConfig(propsBlocker)<TagRootPropsType>`
    ${reset()};
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    cursor: default;
    display: inline-flex;
    flex-flow: row nowrap;
    width: fit-content;
    user-select: none;
    overflow-y: hidden;
    justify-content: center;
    border-color: ${color('primary.lighter')};
    border-radius: ${borderRadius('pill')};
    padding-left: ${spacing(1)};
    padding-right: ${spacing(1)};

    &:hover ${TagCloseIconContainer} {
        transform: translateX(0);
        opacity: 1;
        transition: all ${durationNormal}ms ease;
    }

    ${getRootStyle};
    ${marginProps};

    ${getComponentOverride('Tag')};
`;

export const TagText = styled.div<TagTextPropsType>`
    ${typography('paragraphSmall')};
    ${textStyle}
`;

export const TagCloseIcon = styled(CancelIcon)<TagCloseIconPropsType>`
    outline: none;

    height: ${spacing(2)};
    width: ${spacing(2)};
`;

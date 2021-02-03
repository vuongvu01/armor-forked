import styled, { css } from 'styled-components';
import { CancelIcon } from '@deliveryhero/armor-icons';

import { marginAttributes } from '../../system/attributes';
import { getPropsBlocker, makePropList } from '../../utils';
import {
    TagCloseIconContainerPropsType,
    TagCloseIconPropsType,
    TagRootPropsType,
    TagTypographyPropsType,
} from './type';
import { TAG_DELETE_BEHAVIOUR_OPTIONS, TAG_TYPES } from './constants';
import { transitionDurationInSec } from '../../constants';
import { Typography } from '../Typography';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';
import { borderRadius, color, reset, spacing } from '../../system/mixins';

const propertyList = makePropList([
    'deleteOption',
    'isActive',
    'type',
    'hasLabel',
    'smallVerticalPadding',
]);

const containerStyle = ({
    deleteOption,
    theme: {
        componentOverrides: { Tag },
    },
    type,
    small,
}: TagRootPropsType) => {
    const minStatusTagWidth = css`
        min-width: ${spacing(19)};
    `;
    const result = css`
        justify-content: center;
        border-color: ${color('primary.lighter')};
        border-radius: ${borderRadius('pill')};
        height: ${spacing(small ? 6 : 7)};
        padding-left: ${spacing(1)};
        padding-right: ${spacing(1)};
    `;

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
const typographyStyle = ({
    smallVerticalPadding,
    deleteOption,
    theme: {
        componentOverrides: { Tag },
    },
}: TagTypographyPropsType) => {
    const result = css`
        && {
            margin: ${spacing(smallVerticalPadding ? 0.5 : 1)} ${spacing(2)}
                ${spacing(smallVerticalPadding ? 0.5 : 1)} ${spacing(2)};
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

export const TagCloseIconContainer = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<TagCloseIconContainerPropsType>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    outline: none;

    ${closeIconContainerStyle}
`;

export const TagRoot = styled.div.withConfig(getPropsBlocker(propertyList))<
    TagRootPropsType
>`
    ${reset()}; 
    overflow-y: hidden;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    cursor: default;
    display: inline-flex;
    flex-flow: row nowrap;
    width: fit-content;
    user-select: none;

    &:hover ${TagCloseIconContainer} {
        transform: translateX(0);
        opacity: 1;
        transition: all ${transitionDurationInSec}s ease;
    }

    ${containerStyle}
    ${marginAttributes}
    
    ${getComponentOverride('Tag')};
`;

export const TagTypography = styled(Typography).withConfig(
    getPropsBlocker(propertyList, false),
)<TagTypographyPropsType>`
    ${typographyStyle}
`;

export const TagCloseIcon = styled(CancelIcon).withConfig(
    getPropsBlocker(propertyList, false),
)<TagCloseIconPropsType>`
    outline: none;

    height: ${spacing(2)};
    width: ${spacing(2)};
`;

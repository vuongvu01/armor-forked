import styled, { css } from 'styled-components';
import { CancelIcon } from '@deliveryhero/armor-icons';

import { marginAttributes } from '../../system/attributes';
import { makePropList, shouldForwardProp } from '../../utils';
import {
    TagCloseIconContainerPropsType,
    TagCloseIconPropsType,
    TagRootPropsType,
    TagTypographyPropsType,
} from './type';
import { TAG_DELETE_BEHAVIOUR_OPTIONS, TAG_TYPES } from './constants';
import { transitionDurationInSec } from '../../constants';
import { Typography } from '../Typography';

const statusWidth = 'width: 76px;';

const propertyList = makePropList(['deleteOption', 'isActive', 'type']);

const containerStyle = ({
    deleteOption,
    theme: {
        componentOverrides: { Tag },
    },
    type,
}: TagRootPropsType) => {
    switch (type) {
        case TAG_TYPES.APPROVED:
            return css`${statusWidth}${Tag.Root.base}${Tag.Root.approved}`;
        case TAG_TYPES.DENIED:
            return css`${statusWidth}${Tag.Root.base}${Tag.Root.denied}`;
        case TAG_TYPES.NEW:
            return css`${statusWidth}${Tag.Root.base}${Tag.Root.new}`;
        default: {
            if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ENABLED) {
                return css`${Tag.Root.base}${Tag.Root.enabled}`;
            }

            if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.DISABLED) {
                return Tag.Root.base;
            }

            return css`
                ${Tag.Root.base}
                justify-content: flex-end;
            `;
        }
    }
};
const typographyStyle = ({
    deleteOption,
    theme: {
        componentOverrides: { Tag },
    },
}: TagTypographyPropsType) => {
    if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ENABLED) {
        return css`
            ${Tag.Typography.base}
            ${Tag.Typography.enabled}
        `;
    }

    return Tag.Typography.base;
};

const closeIconContainerStyle = ({
    deleteOption,
    theme: {
        componentOverrides: { Tag },
    },
}: TagCloseIconContainerPropsType) => {
    if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ENABLED) {
        return css`
            margin-top: 3px;
            opacity: 1;

            ${Tag.Icon.base}
        `;
    }

    if (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ON_HOVER) {
        return css`
            margin-top: 3px;
            margin-left: 8px;
            position: absolute;
            transform: translateX(12px);
            ${Tag.Icon.base}
            ${Tag.Icon.onHover}
        `;
    }
    return Tag.Icon.base;
};

const closeIconStyle = ({
    theme: {
        componentOverrides: { Tag },
    },
}: TagCloseIconPropsType) => Tag.Icon.element;

export const TagCloseIconContainer = styled.div<TagCloseIconContainerPropsType>`
    box-sizing: border-box;
    cursor: pointer;
    flex: none;
    height: 20px;
    opacity: 0;
    outline: none;
    width: 20px;

    ${closeIconContainerStyle}
`;

export const TagRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TagRootPropsType>`
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    cursor: default;
    display: inline-flex;
    flex-flow: row nowrap;
    margin: 0 4px;
    width: fit-content;

    &:hover ${TagCloseIconContainer} {
        transform: translateX(0);
        opacity: 1;
        transition: all ${transitionDurationInSec}s ease;
    }

    ${containerStyle}
    ${marginAttributes}
`;

export const TagTypography = styled(Typography).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TagTypographyPropsType>`
    ${typographyStyle}
`;

export const TagCloseIcon = styled(CancelIcon)<TagCloseIconPropsType>`
    outline: none;
    padding-left: 6px;

    ${closeIconStyle}
`;

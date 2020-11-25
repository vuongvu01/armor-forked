import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import {
    colorAttributes,
    marginAttributes,
    textAlignmentAttributes,
} from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { ObjectLiteralType } from '../../type';
import { TypographyRootPropsType } from './type';

const propertyList = {
    disabled: true,
    error: true,
    label: true,
    large: true,
    medium: true,
    pageTitle: true,
    paragraph: true,
    sectionTitle: true,
    small: true,
    subSectionTitle: true,
    tag: true,
    maxLines: true,
    // add other custom properties here
} as ObjectLiteralType;

const getRootBaseStyle = ({
    disabled,
    error,
    theme: {
        componentOverrides: { Typography },
    },
}: TypographyRootPropsType) => {
    if (error && disabled) {
        return css`
            ${Typography.Root.base} ${Typography.Root.error__disabled}
        `;
    }

    if (error) {
        return css`
            ${Typography.Root.base} ${Typography.Root.error}
        `;
    }

    if (disabled) {
        return css`
            ${Typography.Root.base} ${Typography.Root.disabled}
        `;
    }

    return Typography.Root.base;
};

const getRootDynamicStyle = ({
    theme,
    pageTitle,
    sectionTitle,
    subSectionTitle,
    label,
    paragraph,
    medium,
    small,
    large,
}: TypographyRootPropsType) => {
    const {
        componentOverrides: {
            Typography: { Root },
        },
    } = theme;

    if (pageTitle) {
        return Root.pageTitle;
    }
    if (sectionTitle) {
        return Root.sectionTitle;
    }
    if (subSectionTitle) {
        return Root.subSectionTitle;
    }

    if (label) {
        if (large) {
            return Root.label__large;
        }
        if (medium) {
            return Root.label__medium;
        }
        if (small) {
            return Root.label__small;
        }

        return Root.label__medium;
    }

    if (paragraph) {
        if (large) {
            return Root.paragraph__large;
        }
        if (medium) {
            return Root.paragraph__medium;
        }
        if (small) {
            return Root.paragraph__small;
        }

        return Root.paragraph__medium;
    }

    return {};
};

const getMaxLinesStyle = ({ maxLines }: TypographyRootPropsType) => {
    if (typeof maxLines !== 'undefined') {
        return css`
            max-height: calc(var(--typography--line-height) * ${maxLines});
            overflow-y: hidden;
        `;
    }

    return '';
};

const Wrapper = ({
    children,
    ...restProps
}: TypographyRootPropsType & {
    children: (props: TypographyRootPropsType) => ReactElement;
}) => children({ ...restProps });

export const TypographyStyle = styled(Wrapper).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TypographyRootPropsType>`
    box-sizing: border-box;
    margin-inline-start: 0;
    margin-inline-end: 0;

    ${getRootBaseStyle}
    ${getRootDynamicStyle}
    ${getMaxLinesStyle}
    ${marginAttributes}
    ${colorAttributes}
    ${textAlignmentAttributes}
`;

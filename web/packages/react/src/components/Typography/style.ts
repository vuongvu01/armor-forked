import styled from 'styled-components';
import { ReactElement } from 'react';
import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { ObjectLiteralType } from '../../type';
import { TypographyRootPropsType } from './type';

const propertyList = {
    tag: true,
    pageTitle: true,
    sectionTitle: true,
    subSectionTitle: true,
    label: true,
    paragraph: true,
    large: true,
    medium: true,
    small: true,
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
        return `${Typography.Root.base} ${Typography.Root.error_disabled}`;
    }

    if (error) {
        return `${Typography.Root.base} ${Typography.Root.error}`;
    }

    if (disabled) {
        return `${Typography.Root.base}`;
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
    ${marginAttributes}
`;

import { ReactElement } from 'react';
import styled, {
    css,
    FlattenInterpolation,
    ThemeProps,
} from 'styled-components';
import {
    color,
    heightProps,
    marginProps,
    widthProps,
    getComponentOverride,
    propsBlocker,
    durationNormal,
    focusWithin,
    typography,
    token,
    spacing,
    transition,
    typographyInherit,
} from '@deliveryhero/armor-system';

import {
    TextInputInnerContainerPropsType,
    TextInputInputPropsType,
    TextInputInternalPropsWithThemeType,
    TextInputLabelBackgroundPropsType,
    TextInputLabelPropsType,
    TextInputRootPropsType,
} from './type';

const getRootDynamicStyle = (props: TextInputRootPropsType) => {
    const { displayMode, enableFocusOnRootClick, outlined, error, disabled } =
        props;

    let result = css`
        display: ${displayMode === 'block' ? 'block' : 'inline-block'};
    ` as FlattenInterpolation<ThemeProps<any>>;

    if (enableFocusOnRootClick) {
        result = css`
            ${result};
            cursor: text;
            & > * {
                cursor: initial;
            }
        `;
    }

    if (outlined) {
        result = css`
            ${result};
            border-color: ${color('primary.main')};
        `;
    }

    if (error) {
        result = css`
            ${result};
            border-color: ${color('error.main')};
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            background-color: ${color('neutral.02')};
            border-color: ${color('neutral.05')};
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const TextInputRoot = styled.div.withConfig(
    propsBlocker,
)<TextInputRootPropsType>`
    box-sizing: border-box;
    position: relative;
    border-style: solid;
    border-width: 1px;
    transition: border ${durationNormal}ms ease;
    vertical-align: middle;
    background-color: ${color('neutral.00')};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};

    ${({ error, disabled }) =>
        focusWithin({ error, disabled, noOutline: true })};

    border-color: ${color('neutral.05')};
    border-radius: ${token('shape.borderRadius.soft')};
    ${getRootDynamicStyle};
    ${getComponentOverride('TextInput')};
    ${marginProps};
    ${widthProps};
    ${heightProps};
`;

const getInnerContainerDynamicStyle = (
    props: TextInputInnerContainerPropsType,
) => {
    const { multiline } = props;

    let result = css``;

    if (!multiline) {
        result = css`
            ${result};
            align-items: center;
        `;
    }

    return result;
};

export const TextInputInnerContainer = styled.div.withConfig(
    propsBlocker,
)<TextInputInnerContainerPropsType>`
    display: flex;
    ${getInnerContainerDynamicStyle};
`;

const getInputDynamicStyle = (props: TextInputInputPropsType) => {
    const { multiline, disabled, large } = props;

    let result = css`` as FlattenInterpolation<ThemeProps<any>>;

    if (multiline) {
        // todo: do we really need this constraint?
        result = css`
            ${result};
            min-width: ${multiline ? '100px' : 0};
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            cursor: not-allowed;
        `;
    }

    if (large) {
        result = css`
            ${result};
            padding-top: ${spacing(3)};
            padding-bottom: ${spacing(3)};
        `;
    }

    return result;
};

const Wrapper = ({
    children,
    ...restProps
}: TextInputInputPropsType & {
    children: (props: TextInputInputPropsType) => ReactElement;
}) => children({ ...restProps });

export const TextInputInput = styled(Wrapper).withConfig(
    propsBlocker,
)<TextInputInputPropsType>`
    box-sizing: border-box;
    border: 0 none;
    outline: none;
    appearance: none;
    flex-grow: 1;
    margin: 0;
    background-color: transparent;
    width: 100%;
    padding: ${spacing(2)} ${spacing(4)};
    border-radius: ${token('shape.borderRadius.soft')};
    ${typographyInherit()};
    color: ${token('body.color')};

    &::placeholder {
        color: ${color('neutral.07')};
    }
    &:disabled {
        color: ${color('neutral.07')};
    }

    ${getInputDynamicStyle};
`;

const getLabelDynamicStyle = (props: TextInputInternalPropsWithThemeType) => {
    const { inside, large, disabled, value, defaultValue, type, error } = props;

    let result = css`` as FlattenInterpolation<ThemeProps<any>>;

    if (disabled) {
        result = css`
            ${result};
            background: transparent;
        `;
    }

    if (error) {
        result = css`
            ${result};
            color: ${color('error.main')};
        `;
    }

    if (
        !(disabled && value) &&
        (type !== 'number' ||
            (typeof value === 'undefined' &&
                typeof defaultValue === 'undefined')) &&
        inside
    ) {
        result = css`
            ${result};
            ${typography('paragraphMedium')};
            color: ${color('neutral.07')};
            top: 9px;
        `;

        if (large) {
            result = css`
                ${result};
                top: 12px;
            `;
        }
    }

    return result;
};

export const TextInputLabel = styled.label.withConfig(
    propsBlocker,
)<TextInputLabelPropsType>`
    position: absolute;
    text-align: left;
    overflow-x: hidden;
    white-space: nowrap;
    user-select: none;
    text-overflow: ellipsis;
    pointer-events: none;
    ${transition({
        top: true,
        'font-size': true,
        color: true,
    })};
    ${typography('labelSmall')};
    color: ${color('neutral.07')};
    margin-left: ${spacing(3)};
    margin-right: ${spacing(3)};
    top: -${spacing(2)};
    ${getLabelDynamicStyle};
`;

const getLabelBackgroundDynamicStyle = (
    props: TextInputInternalPropsWithThemeType,
) => {
    const { disabled } = props;

    let result = css`
        background: linear-gradient(
            0,
            ${color('neutral.00')} 88%,
            transparent 32%
        );
    `;

    if (disabled) {
        result = css`
            ${result};
            background: linear-gradient(
                0,
                transparent 0 30%,
                ${color('neutral.02')} 30% 70%,
                transparent 70% 100%
            );
        `;
    }

    return result;
};

export const TextInputLabelBackground = styled.span.withConfig(
    propsBlocker,
)<TextInputLabelBackgroundPropsType>`
    padding-left: ${spacing(1)};
    padding-right: ${spacing(1)};
    ${getLabelBackgroundDynamicStyle};
`;

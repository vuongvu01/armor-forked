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
    focusWithin,
    typography,
    token,
    spacing,
    transition,
    borderRadius,
} from '@deliveryhero/armor-system';

import {
    TextInputInnerContainerPropsType,
    TextInputInputPropsType,
    TextInputLabelBackgroundPropsType,
    TextInputLabelPropsType,
    TextInputRootPropsType,
} from './type';

const getRootDynamicStyle = (props: TextInputRootPropsType) => {
    const { displayMode, enableFocusOnRootClick, outlined, error, disabled } =
        props;

    let result = css`
        display: ${displayMode === 'block' ? displayMode : 'inline-block'};
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
            border-color: ${color('primary.07')};
        `;
    }

    if (error) {
        result = css`
            ${result};
            border-color: ${color('error.08')};
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            background-color: ${color('neutral.02')};
            border-color: ${color('neutral.03')};
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
    vertical-align: middle;
    border: 1px solid ${color('neutral.03')};
    border-radius: ${borderRadius('soft')};
    background-color: ${color('neutral.00')};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};

    ${({ error, disabled }) =>
        focusWithin({ error, disabled, noOutline: true })};
    ${transition({ border: true })};
    ${getRootDynamicStyle};
    ${getComponentOverride('TextInput')};
    ${marginProps};
    ${widthProps};
    ${heightProps};
`;

export const TextInputInnerContainer = styled.div.withConfig(
    propsBlocker,
)<TextInputInnerContainerPropsType>(
    ({ multiline }) => css`
        display: flex;
        align-items: ${multiline ? 'unset' : 'center'};
    `,
);

const getInputDynamicStyle = (props: TextInputInputPropsType) => {
    const { multiline, disabled, large, hasBeforeSection, hasAfterSection } =
        props;

    let result = {};

    if (multiline) {
        result = css`
            ${result};
            min-width: ${spacing(25)};
            min-height: ${spacing(10)};
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
            padding: ${spacing(3, 4)};
        `;
    }

    if (hasBeforeSection) {
        result = css`
            ${result};
            padding-left: ${spacing(3)};
        `;
    }

    if (hasAfterSection) {
        result = css`
            ${result};
            padding-right: ${spacing(3)};
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
    border: none;
    outline: none;
    appearance: none;
    flex-grow: 1;
    margin: 0;
    background-color: transparent;
    width: 100%;
    padding: ${spacing(2, 4)};
    border-radius: ${borderRadius('soft')};
    color: ${token('body.color')};
    ${typography('paragraphLarge')};

    &::placeholder {
        color: ${color('neutral.07')};
    }
    &:disabled {
        color: ${color('neutral.07')};
    }

    ${getInputDynamicStyle};
`;

const getLabelDynamicStyle = (props: TextInputLabelPropsType) => {
    const { isLabelInside, large } = props;

    let result = {};

    if (isLabelInside) {
        result = css`
            ${result};
            ${typography('paragraphMedium')};
            color: ${color('neutral.07')};
            top: ${spacing(2)};
        `;

        if (large) {
            result = css`
                ${result};
                top: ${spacing(3)};
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
    margin: ${spacing(0, 3)};
    top: -${spacing(2)};
    ${getLabelDynamicStyle};
`;

const getLabelBackgroundDynamicStyle = ({
    disabled,
}: TextInputLabelBackgroundPropsType) => {
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
    padding: ${spacing(0, 1)};
    ${getLabelBackgroundDynamicStyle};
`;

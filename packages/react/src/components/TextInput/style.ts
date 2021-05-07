import { ReactElement } from 'react';
import styled, { css } from 'styled-components';

import {
    color,
    heightAttributes,
    marginAttributes,
    widthAttributes,
    getComponentOverride,
    propsBlocker,
} from '../../system';
import {
    TextInputInnerContainerPropsType,
    TextInputInputPropsType,
    TextInputInternalPropsWithThemeType,
    TextInputLabelBackgroundPropsType,
    TextInputLabelPropsType,
    TextInputRootPropsType,
} from './type';
import { transitionDurationInSec } from '../../constants';

const getDynamicStyle = (
    nodeName: string,
    {
        theme,
        outlined,
        error,
        disabled,
        large,
    }: TextInputInternalPropsWithThemeType,
) => {
    const {
        componentOverrides: { TextInput },
    } = theme;

    return css`
        ${large ? TextInput[nodeName].large : ''}
        ${outlined ? TextInput[nodeName].outlined : ''}
        ${error ? TextInput[nodeName].error : ''}
        ${disabled ? TextInput[nodeName].disabled : ''}
    `;
};

const getRootDynamicStyle = (props: TextInputRootPropsType) => {
    const { theme, displayMode, enableFocusOnRootClick } = props;
    const {
        componentOverrides: { TextInput },
    } = theme;

    let result = TextInput.Root.base;

    if (enableFocusOnRootClick) {
        result = css`
            ${result};
            cursor: text;
            & > * {
                cursor: initial;
            }
        `;
    }

    return css`
        display: ${displayMode === 'block' ? 'block' : 'inline-block'};
        ${result};
        ${getDynamicStyle('Root', props)};
    `;
};

/** 👉 ROOT ELEMENT */
export const TextInputRoot = styled.div.withConfig(propsBlocker)<
    TextInputRootPropsType
>`
    box-sizing: border-box;
    position: relative;
    border-style: solid;
    border-width: 1px;
    transition: border ${transitionDurationInSec}s ease;
    vertical-align: middle;

    background-color: ${color('neutral.00')};

    ${getRootDynamicStyle};
    ${getComponentOverride('TextInput')};
    ${marginAttributes};
    ${widthAttributes};
    ${heightAttributes};
`;

const getInnerContainerDynamicStyle = (
    props: TextInputInnerContainerPropsType,
) => {
    const { theme, multiline } = props;
    const {
        componentOverrides: { TextInput },
    } = theme;

    let result = TextInput.InnerContainer.base;

    if (!multiline) {
        result = css`
            ${result};
            align-items: center;
        `;
    }

    return result;
};

export const TextInputInnerContainer = styled.div.withConfig(propsBlocker)<
    TextInputInnerContainerPropsType
>`
    display: flex;
    ${getInnerContainerDynamicStyle}
`;

const getInputDynamicStyle = (props: TextInputInputPropsType) => {
    const { theme, multiline, disabled } = props;
    const {
        componentOverrides: { TextInput },
    } = theme;

    let result = TextInput.Input.base;

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

    return css`
        ${result};
        ${getDynamicStyle('Input', props)};
    `;
};

const Wrapper = ({
    children,
    ...restProps
}: TextInputInputPropsType & {
    children: (props: TextInputInputPropsType) => ReactElement;
}) => children({ ...restProps });

export const TextInputInput = styled(Wrapper).withConfig(propsBlocker)<
    TextInputInputPropsType
>`
    box-sizing: border-box;
    border: 0 none;
    outline: none;
    appearance: none;
    flex-grow: 1;
    padding: 0;
    margin: 0;
    background-color: transparent;
    width: 100%;

    ${getInputDynamicStyle};
`;

const getLabelDynamicStyle = (props: TextInputInternalPropsWithThemeType) => {
    const {
        theme: {
            componentOverrides: { TextInput },
        },
        inside,
        large,
        disabled,
        value,
        defaultValue,
        type,
    } = props;

    let result = css`
        ${TextInput.Label.base};
        ${getDynamicStyle('Label', props)};
    `;

    if (
        !(disabled && value) &&
        (type !== 'number' ||
            (typeof value === 'undefined' &&
                typeof defaultValue === 'undefined')) &&
        inside
    ) {
        result = css`
            ${result};
            ${TextInput.Label.inside};
            ${large ? TextInput.Label.inside__large : ''};
        `;
    }

    return result;
};

export const TextInputLabel = styled.span.withConfig(propsBlocker)<
    TextInputLabelPropsType
>`
    position: absolute;
    text-align: left;
    overflow-x: hidden;
    white-space: nowrap;
    user-select: none;
    text-overflow: ellipsis;
    pointer-events: none;
    transition: top ease ${transitionDurationInSec}s,
        font-size ease ${transitionDurationInSec}s,
        color ease ${transitionDurationInSec}s;

    ${getLabelDynamicStyle}
`;

const getLabelBackgroundDynamicStyle = (
    props: TextInputInternalPropsWithThemeType,
) => {
    const {
        theme: {
            componentOverrides: { TextInput },
        },
        disabled,
    } = props;

    const result = TextInput.LabelBackground.base;

    return css`
        ${result};
        background: linear-gradient(
            0,
            transparent 0 30%,
            ${color(disabled ? 'neutral.02' : 'neutral.00')} 30% 70%,
            transparent 70% 100%
        );
        ${getDynamicStyle('LabelBackground', props)};
    `;
};

export const TextInputLabelBackground = styled.span.withConfig(propsBlocker)<
    TextInputLabelBackgroundPropsType
>`
    ${getLabelBackgroundDynamicStyle}
`;

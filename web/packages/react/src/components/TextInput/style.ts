import { ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { marginAttributes, widthAttributes } from '../../system';
import { ObjectLiteralType } from '../../type';
import { shouldForwardProp } from '../../utils';
import {
    TextInputContainerPropsType,
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

const getRootDynamicStyle = (props: TextInputInternalPropsWithThemeType) =>
    getDynamicStyle('Root', props);

const getInputDynamicStyle = (props: TextInputInternalPropsWithThemeType) =>
    getDynamicStyle('Input', props);

const getLabelDynamicStyle = (props: TextInputInternalPropsWithThemeType) =>
    getDynamicStyle('Label', props);

const multilineSupport = ({ multiline }: TextInputContainerPropsType) =>
    multiline
        ? 'line-height: 1.2; min-width: 100px;'
        : 'line-height: inherit; min-width: 0;';

const getLabelPosition = ({
    theme: {
        componentOverrides: { TextInput },
    },
    disabled,
    inside,
    large,
    value,
}: TextInputInternalPropsWithThemeType) => {
    if (disabled && value) {
        return TextInput.Label.base;
    }

    if (inside) {
        return css`
            ${TextInput.Label.base} ${large
                ? TextInput.Label.inside__large
                : TextInput.Label.inside}
        `;
    }

    return TextInput.Label.base;
};

const getLabelBackgroundDynamicStyle = (
    props: TextInputInternalPropsWithThemeType,
) => getDynamicStyle('LabelBackground', props);

const propertyList = {
    displayMode: true,
    label: true,
    before: true,
    after: true,
    large: true,
    multiline: true,
    outlined: true,
    error: true,
    inside: true,
    // add other custom properties here
} as ObjectLiteralType;

export const TextInputRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TextInputRootPropsType>`
    box-sizing: border-box;
    position: relative;
    border-style: solid;
    border-width: 1px;
    vertical-align: middle;
    transition: border ${transitionDurationInSec}s ease;
    ${({ displayMode, multiline }: TextInputRootPropsType) => css`
        display: ${displayMode === 'block' ? 'flex' : 'inline-flex'};
        ${multiline ? '' : 'align-items: center;'}
    `}
    
    ${({ theme }: TextInputRootPropsType) =>
        theme.componentOverrides.TextInput.Root.base}
    ${getRootDynamicStyle}
    
    ${marginAttributes}
    ${widthAttributes}
    ${(props: TextInputRootPropsType) => props.styles(props)}
`;

const Wrapper = ({
    children,
    ...restProps
}: TextInputContainerPropsType & {
    children: (props: TextInputContainerPropsType) => ReactElement;
}) => children({ ...restProps });

export const TextInputContainer = styled(Wrapper).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TextInputContainerPropsType>`
    box-sizing: border-box;
    border: 0 none;
    outline: none;
    appearance: none;
    font-family: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    flex-grow: 1;
    padding: 0;
    margin: 0;

    ${({ theme }: TextInputContainerPropsType) =>
        theme.componentOverrides.TextInput.Input.base}
    ${multilineSupport}
    ${getInputDynamicStyle}
    ${(props: TextInputContainerPropsType) => props.styles(props)}
    ${({ disabled }: { disabled?: boolean }) => css`
        cursor: ${disabled ? 'not-allowed' : 'default'};
    `}
`;

export const TextInputLabel = styled.span.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TextInputLabelPropsType>`
    position: absolute;
    text-align: left;
    overflow-x: hidden;
    white-space: nowrap;
    user-select: none;
    text-overflow: ellipsis;
    pointer-events: none;
    transition: top ease ${transitionDurationInSec}s, font-size ease ${transitionDurationInSec}s, color ease ${transitionDurationInSec}s;

    ${getLabelPosition}
    ${getLabelDynamicStyle}
    ${(props: TextInputLabelPropsType) => props.styles(props)}
`;

export const TextInputLabelBackground = styled.span.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TextInputLabelBackgroundPropsType>`
    ${getLabelBackgroundDynamicStyle}
    ${(props: TextInputLabelBackgroundPropsType) => props.styles(props)}
`;

import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import {
    TextInputInputPropsType,
    TextInputInternalPropsWithThemeType,
    TextInputLabelBackgroundPropsType,
    TextInputLabelPropsType,
    TextInputRootPropsType,
} from './type';
import { marginAttributes, widthAttributes } from '../../system/attributes';
import { ObjectLiteralType } from '../../type';
import { shouldForwardProp } from '../../utils';

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
    transition: border 200ms ease;
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
}: TextInputInputPropsType & {
    children: (props: TextInputInputPropsType) => ReactElement;
}) => children({ ...restProps });

export const TextInputInput = styled(Wrapper).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TextInputInputPropsType>`
    box-sizing: border-box;
    border: 0 none;
    outline: none;
    appearance: none;
    font-family: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    flex-grow: 1;
    padding: 0;
    margin: 0;
    min-width: ${({ multiline }: TextInputInputPropsType) =>
        multiline ? '100px' : '0'};

    ${({ theme }: TextInputInputPropsType) =>
        theme.componentOverrides.TextInput.Input.base}
    ${getInputDynamicStyle}
    ${(props: TextInputInputPropsType) => props.styles(props)}
`;

export const TextInputLabel = styled.span.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TextInputLabelPropsType>`
    position: absolute;
    right: 0;
    left: 0;
    overflow-x: hidden;
    white-space: nowrap;
    user-select: none;
    text-overflow: ellipsis;
    pointer-events: none;
    transition: top ease 150ms, font-size ease 150ms, color ease 200ms;

    ${({ theme }: TextInputLabelPropsType) =>
        theme.componentOverrides.TextInput.Label.base}
    ${({ inside, theme }) =>
        inside ? theme.componentOverrides.TextInput.Label.inside : ''}
    ${({ inside, large, theme }) =>
        inside && large
            ? theme.componentOverrides.TextInput.Label.inside__large
            : ''}
    ${getLabelDynamicStyle}
    ${(props: TextInputLabelPropsType) => props.styles(props)}
`;

export const TextInputLabelBackground = styled.span.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TextInputLabelBackgroundPropsType>`
    ${({ theme }: TextInputLabelBackgroundPropsType) =>
        theme.componentOverrides.TextInput.LabelBackground.base}
    ${getLabelBackgroundDynamicStyle}
    ${(props: TextInputLabelBackgroundPropsType) => props.styles(props)}
`;

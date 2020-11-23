import styled, { css } from 'styled-components';
import { ExpansionIndicatorPropsType } from './type';
import { marginAttributes } from '../../system/attributes';
import { transitionDurationInSec } from '../../constants';
import { spacing } from '../../system/mixins';

const expansionIndicatorContainerStyle = ({
    disabled,
    theme: {
        componentOverrides: { ExpansionIndicator },
    },
}: ExpansionIndicatorPropsType) => css`
    ${disabled ? ExpansionIndicator.Root.disabled : ''}
`;

const expansionIndicatorStyle = ({
    disabled,
    isExpanded,
    theme: {
        componentOverrides: { ExpansionIndicator },
    },
}: ExpansionIndicatorPropsType) =>
    css`
        ${ExpansionIndicator.Root.base} ${
        disabled ? ExpansionIndicator.Root.disabled : ''
    } ${isExpanded ? ExpansionIndicator.Root.rotate : ''}
    `;

const actionSeparator = ({
    displaySeparator,
    theme: {
        componentOverrides: { ExpansionIndicator },
    },
}: ExpansionIndicatorPropsType) => css`
    ${displaySeparator ? ExpansionIndicator.Root.separator : ''}
`;

export const ExpansionIndicatorRoot = styled.div<ExpansionIndicatorPropsType>`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    outline: none;

    ${expansionIndicatorContainerStyle}
    ${marginAttributes}
`;

export const ExpansionIndicatorContent = styled.div<
    ExpansionIndicatorPropsType
>`
    align-items: center;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: transparent;
    display: flex;
    height: calc(100% - 16px);
    justify-content: center;
    transition: border-color ${transitionDurationInSec}s;
    width: 100%;

    ${actionSeparator}
`;

export const ExpansionIndicatorIcon = styled.div<ExpansionIndicatorPropsType>`
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-right-width: 2px;
    border-right-style: solid;
    height: 8px;
    position: relative;
    transform: rotate(45deg);
    transition: ${transitionDurationInSec}s;
    width: 8px;

    ${expansionIndicatorStyle}
`;

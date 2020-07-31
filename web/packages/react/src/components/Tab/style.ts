import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { mouseCursor } from '../../styling';
import { TabContainerPropsType, TabLabelPropsType } from './type';
import { transitionDurationInSec } from '../../constants';

const animationStyle = ({
    isActive,
    theme: {
        componentOverrides: { Tab },
    },
}: TabContainerPropsType) =>
    isActive ? Tab.Container.active__after : 'position: relative;';

const containerStyle = ({
    isActive,
    wide,
    theme: {
        componentOverrides: { Tab },
    },
}: TabContainerPropsType) => {
    const activeStyleBase = isActive ? Tab.Container.active : '';

    return wide
        ? css`
              flex-grow: 1;
              ${activeStyleBase}
          `
        : activeStyleBase;
};

const labelStyle = ({
    disabled,
    isActive,
    theme: {
        componentOverrides: { Tab },
    },
}: TabContainerPropsType) => {
    if (disabled) {
        return css`${Tab.Label.base}${Tab.Label.disabled}`;
    }

    if (isActive) {
        return css`${Tab.Label.base}${Tab.Label.active}`;
    }

    if (!isActive) {
        return css`${Tab.Label.base}${Tab.Label.hover}`;
    }

    return Tab.Label.base;
};

const cursor = ({ disabled, isActive }: TabContainerPropsType) => {
    if (disabled) {
        return css`
            pointer-events: none;
        `;
    }

    if (isActive) {
        return css`
            cursor: default;
        `;
    }

    return mouseCursor;
};

export const TabContainer = styled.div<TabContainerPropsType>`
    min-width: '100px';

    &::after {
        content: '';
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        transition: transform ${transitionDurationInSec}s ease-out;
        width: 100%;

        ${animationStyle}
    }

    ${containerStyle}
`;

export const TabLabel = styled.div<TabLabelPropsType>`
    align-items: center;
    box-sizing: border-box;
    text-align: center;
    
    ${labelStyle} 
    ${marginAttributes} 
    ${cursor};
`;

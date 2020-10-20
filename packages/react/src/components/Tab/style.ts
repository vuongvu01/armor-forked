import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { mouseCursor } from '../../styling';
import { TabRootPropsType, TabLabelPropsType } from './type';
import { transitionDurationInSec } from '../../constants';

const animationStyle = ({
    isActive,
    theme: {
        componentOverrides: { Tab },
    },
}: TabRootPropsType) =>
    isActive ? Tab.Root.active__after : 'position: relative;';

const tabRootStyle = ({
    isActive,
    wide,
    theme: {
        componentOverrides: { Tab },
    },
}: TabRootPropsType) => {
    const activeStyleBase = isActive ? Tab.Root.active : '';

    return wide
        ? css`
              flex-grow: 1;
              ${activeStyleBase}
          `
        : activeStyleBase;
};

const tabRootAfterStyle = ({
    theme: {
        componentOverrides: { Tab },
    },
}: TabRootPropsType) => Tab.Root.after;

const tabLabelStyle = ({
    disabled,
    isActive,
    theme: {
        componentOverrides: { Tab },
    },
}: TabLabelPropsType) => {
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

const tabLabelContainerStyle = ({
    disabled,
    theme: {
        componentOverrides: { Tab },
    },
}: TabLabelPropsType) => {
    let result = Tab.LabelContainer.base;

    if (disabled) {
        result = css`
            ${result};
            cursor: not-allowed;
        `;
    }

    return result;
};

const cursor = ({ disabled, isActive }: TabRootPropsType) => {
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

export const TabRoot = styled.div<TabRootPropsType>`
    min-width: '100px';

    &::after {
        content: '';
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        transition: transform ${transitionDurationInSec}s ease-out;
        width: auto;

        ${tabRootAfterStyle}
        ${animationStyle}
    }

    ${tabRootStyle}
`;

export const TabLabelContainer = styled.div<TabLabelPropsType>`
    ${tabLabelContainerStyle}
`;

export const TabLabel = styled.div<TabLabelPropsType>`
    align-items: center;
    box-sizing: border-box;
    text-align: center;
    
    ${tabLabelStyle} 
    ${marginAttributes} 
    ${cursor};
`;

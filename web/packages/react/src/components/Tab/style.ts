import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { mouseCursor } from '../../styling';
import { TabContainerPropsType } from './type';

const containerStyle = ({
    isActive,
    fullWidth,
    theme: {
        componentOverrides: { Tab },
    },
}: TabContainerPropsType) => {
    const activeStyleBase = isActive ? Tab.Container.active : '';

    return fullWidth
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

    if (!isActive) {
        return css`${Tab.Label.base}${Tab.Label.hover}`;
    }

    return Tab.Label.base;
};

const cursor = ({ disabled }: TabContainerPropsType) => {
    if (disabled) {
        return css`
            pointer-events: none;
        `;
    }

    return mouseCursor;
};

export const TabContainer = styled.div<TabContainerPropsType>`
    min-width: '100px';

    ${containerStyle}
`;

export const TabLabel = styled.div<TabContainerPropsType>`
    align-items: center;
    box-sizing: border-box;
    text-align: center;
    
    ${labelStyle} 
    ${marginAttributes} 
    ${cursor};
`;

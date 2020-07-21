import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { mouseCursor } from '../../styling';
import { TabRootPropsType } from './type';

const stateStyle = ({
    disabled,
    isActive,
    theme: {
        componentOverrides: { Tab },
    },
}: TabRootPropsType) => {
    if (disabled) {
        return css`${Tab.Root.base}${Tab.Root.disabled}`;
    }
    if (isActive) {
        return css`${Tab.Root.base}${Tab.Root.active}`;
    }

    return Tab.Root.base;
};
const cursor = ({ disabled }: TabRootPropsType) => {
    if (disabled) {
        return css`
            pointer-events: none;
        `;
    }

    return mouseCursor;
};

export const TabRoot = styled.div<TabRootPropsType>`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    text-align: center;
    max-width: 240px;
  
    ${stateStyle} 
    ${marginAttributes}
    ${cursor}
`;

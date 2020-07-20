import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
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

export const TabRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<TabRootPropsType>`
    margin: auto;
    text-align: center;
  
    ${stateStyle} 
    ${marginAttributes}
    ${mouseCursor}
`;

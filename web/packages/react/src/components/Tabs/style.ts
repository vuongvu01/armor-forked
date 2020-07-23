import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { TabsRootPropsType } from './type';

const themeStyle = ({
    fullWidth,
    theme: {
        componentOverrides: { Tabs },
    },
}: TabsRootPropsType) => {
    if (fullWidth) {
        return css`
            width: 100%;
            justify-content: space-evenly;

            ${Tabs.Root.base}
        `;
    }

    return Tabs.Root.base;
};

export const TabsRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<TabsRootPropsType>`
    align-items: start;
    display: flex;
    flex-wrap: wrap;

    ${themeStyle}
    ${marginAttributes}
`;

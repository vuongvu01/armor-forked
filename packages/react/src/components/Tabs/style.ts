import styled, { css } from 'styled-components';

import {
    childrenNotLastChild,
    marginAttributes,
    propsBlocker,
    spacing,
} from '../../system';
import { TabsRootPropsType } from './type';

const getRootStyle = ({ wide }: TabsRootPropsType) => {
    const result = css``;

    if (wide) {
        return css`
            ${result};
            width: 100%;
            justify-content: space-evenly;
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const TabsRoot = styled.div.withConfig(propsBlocker)<TabsRootPropsType>`
    align-items: start;
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    & ${childrenNotLastChild} {
        margin-right: ${spacing(9)};
    }
    ${getRootStyle};
    ${marginAttributes};
`;

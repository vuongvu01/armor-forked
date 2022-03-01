import styled, { css } from 'styled-components';
import {
    marginProps,
    propsBlocker,
    color,
    reset,
} from '@deliveryhero/armor-system';

import { DividerRootPropsType } from './type';

const getOrientationStyle = ({ vertical }: DividerRootPropsType) => {
    if (vertical) {
        return css`
            width: 1px;
            height: 100%;
        `;
    }

    return css`
        height: 1px;
    `;
};

/** 👉 ROOT ELEMENT */
export const DividerRoot = styled.div.withConfig(
    propsBlocker,
)<DividerRootPropsType>`
    ${reset};
    background-color: ${color('neutral.03')};
    ${getOrientationStyle};
    ${marginProps};
`;

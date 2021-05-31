import styled, { css } from 'styled-components';
import { DividerRootPropsType } from './type';
import { marginAttributes, propsBlocker, color } from '../../system';
import { reset } from '../../system/mixins';

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
export const DividerRoot = styled.div.withConfig(propsBlocker)<
    DividerRootPropsType
>`
    ${reset};
    background-color: ${color('neutral.03')};
    ${getOrientationStyle};
    ${marginAttributes};
`;

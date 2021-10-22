import styled, { css } from 'styled-components';
import { SkeletonRootPropsType } from './type';
import {
    marginAttributes,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    color,
} from '../../system';

const getRootStyle = (props: SkeletonRootPropsType) => {
    let result = {};

    return result;
};

/** 👉 ROOT ELEMENT */
export const SkeletonRoot = styled.div.withConfig(propsBlocker)<
    SkeletonRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};

    ${getRootStyle};
    ${getComponentOverride('Skeleton')};
    ${marginAttributes};
`;

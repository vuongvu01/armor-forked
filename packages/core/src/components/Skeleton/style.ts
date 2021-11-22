import {
    borderRadius,
    color,
    getComponentOverride,
    heightProps,
    marginProps,
    paddingProps,
    widthProps,
    propsBlocker,
    reset,
    spacing,
} from '@deliveryhero/armor-system';
import styled, { css, keyframes } from 'styled-components';
import { SkeletonRootPropsType } from './type';

const loading = keyframes`
  0%{transform: translateX(-100%)}
  50%{transform: translateX(100%)}
  100% {transform: translateX(100%)}
`;

const getRootStyle = ({ animated, rounded }: SkeletonRootPropsType) => {
    let result = css`
        border-radius: ${rounded ? spacing(9999) : borderRadius('soft')};
        min-width: ${spacing(5)};
        min-height: ${spacing(5)};
    `;

    if (animated) {
        result = css`
            ${result};
            &::after {
                animation: 2s linear 0.5s infinite normal none running
                    ${loading};
                background: linear-gradient(
                    90deg,
                    transparent,
                    ${color('neutral.02')},
                    transparent
                );
                content: '';
                position: absolute;
                transform: translateX(-100%);
                inset: 0;
            }
        `;
    }

    return result;
};

export const SkeletonRoot = styled.div.withConfig(propsBlocker)<
    SkeletonRootPropsType
>`
    ${reset};

    margin: ${spacing(2)};
    background-color: ${color('neutral.03')};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: progress;
    overflow: hidden;
    width: fit-content;

    ${getRootStyle}
    ${getComponentOverride('Skeleton')};
    ${paddingProps};
    ${marginProps};
    ${heightProps};
    ${widthProps};
`;

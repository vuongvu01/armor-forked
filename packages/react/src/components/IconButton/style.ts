import styled, { css } from 'styled-components';
import { IconButtonRootPropsType } from './type';
import {
    marginAttributes,
    color,
    spacing,
    borderRadius,
    token,
    propsBlocker,
    getComponentOverride,
} from '../../system';
import { transitionDurationInSec } from '../../constants';

const getRootStyle = ({ light, visible }: IconButtonRootPropsType) => {
    let result = {};

    if (light) {
        result = css`
            ${result};
            &:hover {
                background-color: ${color(
                    light ? 'neutral.02' : 'primary.lightest',
                )};
            }
        `;
    }

    if (visible === false) {
        result = css`
            ${result};
            visibility: hidden;
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const IconButtonRoot = styled.button.withConfig(propsBlocker)<
    IconButtonRootPropsType
>`
    box-sizing: border-box;
    padding: ${spacing(1)};
    border-radius: ${borderRadius('soft')};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    appearance: none;
    border: 0 none;

    transition: background-color ${transitionDurationInSec}s ease-in;
    background-color: transparent;
    color: ${token('body.color')};

    ${getRootStyle};
    ${getComponentOverride('IconButton')};
    ${marginAttributes};
`;

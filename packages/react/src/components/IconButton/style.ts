import styled, { css } from 'styled-components';
import { IconButtonRootPropsType } from './type';
import {
    marginAttributes,
    color,
    spacing,
    borderRadius,
    token,
} from '../../system';
import { getPropsBlocker } from '../../utils';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';
import { transitionDurationInSec } from '../../constants';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {
    light: true,
};

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

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const IconButtonRoot = styled.button.withConfig(
    getPropsBlocker(propertyList),
)<IconButtonRootPropsType>`
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

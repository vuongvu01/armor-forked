import styled, { css } from 'styled-components';
import { IconButtonRootPropsType } from './type';
import { marginAttributes } from '../../system/attributes';
import { makePropList, getPropsBlocker } from '../../utils';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';
import { color, spacing, borderRadius } from '../../system/mixins';
import { transitionDurationInSec } from '../../constants';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList(['light']);

const getRootDynamicStyle = ({ light }: IconButtonRootPropsType) => {
    const result = css`
        &:hover {
            background-color: ${color(
                light ? 'neutral.02' : 'primary.lightest',
            )};
        }
    `;

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

    ${getRootDynamicStyle};
    ${getComponentOverride('IconButton')};
    ${marginAttributes};
`;

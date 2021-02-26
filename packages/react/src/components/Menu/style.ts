import styled, { css } from 'styled-components';
import { MenuRootPropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    color,
    reset,
} from '../../system';
import { makePropList, getPropsBlocker } from '../../utils';
import { transitionDurationInSec } from '../../constants';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    'enableBottomSeparator',
    'secondary',
    'tertiary',
    'expanded',
    'enableEffects',
]);

const getRootStyle = ({
    enableBottomSeparator,
    secondary,
    tertiary,
    expanded,
    enableEffects,
}: MenuRootPropsType) => {
    let result = {};

    if (enableBottomSeparator) {
        result = css`
            ${result};
            border-bottom: 1px solid ${color('neutral.03')};
        `;
    }

    if (secondary || tertiary) {
        result = css`
            ${result};
            background-color: ${color('neutral.01')};
        `;
    }

    if (expanded !== undefined) {
        result = css`
            ${result};
            overflow-y: hidden;
            height: ${expanded ? 'auto' : '0'};
        `;

        if (enableEffects) {
            result = css`
                ${result};
                opacity: ${expanded ? '1' : '0'};
                transform: translateX(${expanded ? '0' : '-5px'});
                transition: transform ${transitionDurationInSec}s ease-in-out,
                    opacity ${transitionDurationInSec}s ease;
            `;
        }
    }

    return result;
};

export const MenuRoot = styled.div.withConfig(getPropsBlocker(propertyList))<
    MenuRootPropsType
>`
    ${reset};
    background-color: ${color('neutral.00')};

    ${getRootStyle}
    ${getComponentOverride('Menu')};
    ${marginAttributes}
    ${paddingAttributes}
`;

import styled, { css } from 'styled-components';
import { MenuRootPropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    color,
    reset,
    getComponentOverride,
    propsBlocker,
} from '../../system';
import { transitionDurationInSec } from '../../constants';

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

export const MenuRoot = styled.div.withConfig(propsBlocker)<MenuRootPropsType>`
    ${reset};
    background-color: ${color('neutral.00')};

    ${getRootStyle};
    ${getComponentOverride('Menu')};
    ${marginAttributes};
    ${paddingAttributes};
`;

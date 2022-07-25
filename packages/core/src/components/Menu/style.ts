import styled, { css } from 'styled-components';
import {
    marginProps,
    paddingProps,
    color,
    reset,
    getComponentOverride,
    propsBlocker,
    durationNormal,
} from '@deliveryhero/armor-system';

import { MenuRootPropsType } from './type';

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
                transition: transform ${durationNormal}ms ease-in-out,
                    opacity ${durationNormal}ms ease;
            `;
        }
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const MenuRoot = styled.div.withConfig(propsBlocker)<MenuRootPropsType>`
    ${reset};
    background-color: ${color('neutral.00')};

    ${getRootStyle};
    ${getComponentOverride('Menu')};
    ${marginProps};
    ${paddingProps};
`;

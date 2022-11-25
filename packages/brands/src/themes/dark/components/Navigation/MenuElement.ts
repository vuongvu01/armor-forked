import { css } from 'styled-components';
import {
    colorGrey01,
    colorGrey70,
    colorGrey60,
    colorGrey30,
} from '@deliveryhero/armor-system';
import { MenuElementPropsType } from '@deliveryhero/armor';

const hover = (backgroundColor: string) => css`
    &:hover {
        background-color: ${backgroundColor};
    }
`;

const getHover = ({
    selected,
    disabled,
    enableExpansionHandle,
}: MenuElementPropsType) => {
    if (selected && !enableExpansionHandle) {
        return hover(colorGrey70);
    }
    if (disabled) {
        return hover(colorGrey70);
    }
    return hover(colorGrey60);
};

export const getMenuElementOverride = ({ disabled }: MenuElementPropsType) => {
    if (disabled) {
        return css`
            color: ${colorGrey30};
            background-color: ${colorGrey70};
            ${getHover}
        `;
    }
    return css`
        color: ${colorGrey01};
        background-color: ${colorGrey70};
        ${getHover}
    `;
};

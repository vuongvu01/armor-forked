import { css } from 'styled-components';
import {
    colorGrey01,
    colorGrey80,
    colorGrey70,
} from '@deliveryhero/armor-system';
import { MenuElementPropsType } from '@deliveryhero/armor';

const hover = (backgroundColor: string) => css`
    &:hover {
        background-color: ${backgroundColor};
    }
`;

const getHover = ({
    selected,
    enableExpansionHandle,
}: MenuElementPropsType) => {
    if (selected && !enableExpansionHandle) {
        return hover(colorGrey80);
    }

    return hover(colorGrey70);
};

export const getMenuElementOverride = () => {
    return css`
        color: ${colorGrey01};
        background-color: ${colorGrey80};

        ${getHover}
    `;
};

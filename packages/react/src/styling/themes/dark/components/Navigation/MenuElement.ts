import { css } from 'styled-components';
import { colorBlue10, colorGrey60 } from '../../../../../tokens';
import { MenuElementPropsType } from '../../../../../components/Menu/MenuElement/type';
import { token } from '../../../../../system/mixins';

export const getMenuElementOverride = ({
    selected,
    secondary,
    tertiary,
    depthLevel,
}: MenuElementPropsType) => {
    let result = {};

    result = css`
        &:hover {
            background-color: ${colorGrey60};
        }
    `;

    if (secondary || tertiary || depthLevel! > 1) {
        result = css`
            ${result};
            .MenuElement-ExpansionHandle {
                color: ${colorBlue10};
            }
        `;
    }

    if (selected) {
        result = css`
            ${result};
            background-color: ${colorGrey60};
        `;
    } else {
        result = css`
            ${result};
            background-color: ${token('body.backgroundColor')};
        `;
    }

    return result;
};

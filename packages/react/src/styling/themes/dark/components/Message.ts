import { css } from 'styled-components';
import { colorGreen20, colorRed30, colorYellow20 } from '../../../../tokens';
import { MessageRootPropsType } from '../../../../components/Message/type';
import { token } from '../../../../system/mixins';
import { getMessageLevel } from '../../../../components/Message/utils/getMessageLevel';

const levelToColor = {
    success: colorGreen20,
    info: null,
    warning: colorYellow20,
    error: colorRed30,
};

export const getMessageOverride = (props: MessageRootPropsType) => {
    const level = getMessageLevel(props);
    const color = levelToColor[level];

    let result = css`
        background-color: ${token('body.backgroundColor')};
    `;

    if (color) {
        result = css`
            ${result};
            border-color: ${color};

            .Message-Icon {
                color: ${color};
            }
        `;
    }

    return result;
};

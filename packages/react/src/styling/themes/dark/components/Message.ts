import { css } from 'styled-components';
import { colorGreen20, colorRed30, colorYellow20 } from '../../../../tokens';
import { MessageRootPropsType } from '../../../../components/Message/type';
import { token, color } from '../../../../system';
import { getMessageLevel } from '../../../../components/Message/utils/getMessageLevel';

const levelToColor = {
    success: colorGreen20,
    info: null,
    warning: colorYellow20,
    error: colorRed30,
};

export const getMessageOverride = (props: MessageRootPropsType) => {
    const level = getMessageLevel(props);
    const levelColor = levelToColor[level];

    return css`
        background-color: ${token('body.backgroundColor')};
        border-color: ${levelColor};

        .Message-Icon {
            color: ${levelColor};
        }

        .Message-Content {
            color: ${color('neutral.06')};
        }
    `;
};

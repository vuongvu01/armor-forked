import { css } from 'styled-components';
import {
    colorGreen20,
    colorRed30,
    colorYellow20,
    token,
    color,
} from '@deliveryhero/armor-system';
import { MessagePropsType } from '@deliveryhero/armor';

const messageLevels = {
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
};

const getMessageColor = ({
    level,
    error,
    success,
    warning,
}: MessagePropsType) => {
    if (level === messageLevels.error || error) {
        return colorRed30;
    }
    if (level === messageLevels.success || success) {
        return colorGreen20;
    }
    if (level === messageLevels.warning || warning) {
        return colorYellow20;
    }

    return null;
};

export const getMessageOverride = (props: MessagePropsType) => {
    const levelColor = getMessageColor(props);

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

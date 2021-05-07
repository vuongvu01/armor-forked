import { css } from 'styled-components';
import { TextInputRootPropsType } from '../../../../components/TextInput/type';
import { color, token } from '../../../../system';
import { colorGrey70, colorRed30 } from '../../../../tokens';

export const getTextInputOverride = ({
    disabled,
    outlined,
    error,
}: TextInputRootPropsType) => {
    let result = css`
        background-color: ${token('body.backgroundColor')};

        .TextInput-Label {
            color: ${color('neutral.04')};
        }
        .TextInput-LabelBackground {
            color: ${color('neutral.04')};

            background: linear-gradient(
                0,
                transparent 0 30%,
                ${token('body.backgroundColor')} 30% 70%,
                transparent 70% 100%
            );
        }
    `;

    if (disabled) {
        result = css`
            ${result};
            border-color: ${colorGrey70};
        `;
    }

    if (!outlined && !error && !disabled) {
        result = css`
            ${result};
            border-color: ${color('neutral.03')};
        `;
    }

    if (error) {
        result = css`
            ${result};
            border-color: ${colorRed30};
        `;
    }

    return result;
};

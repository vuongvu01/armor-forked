import { css } from 'styled-components';
import { TextInputPropsType } from '../../../../components/TextInput/type';
import { color, token } from '../../../../system/mixins';
import { colorGrey70, colorRed30 } from '../../../../tokens';

export const getTextInputOverride = ({
    disabled,
    outlined,
    error,
}: TextInputPropsType) => {
    let result = css`
        background-color: ${token('body.backgroundColor')};

        .TextInput-Label {
            color: ${color('neutral.04')};
        }
        .TextInput-LabelBackground {
            color: ${color('neutral.04')};
            background: ${token('body.backgroundColor')};
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

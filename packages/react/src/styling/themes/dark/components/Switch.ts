import { css } from 'styled-components';
import {
    colorGrey00,
    colorGrey70,
    colorGrey50,
    colorGrey60,
} from '../../../../tokens';
import { SwitchPropsType } from '../../../../components/Switch/type';

export const getSwitchOverride = ({
    reallyChecked: checked,
    disabled,
}: SwitchPropsType) => {
    let result = css`
        .Switch-Label {
            &:after {
                background-color: ${colorGrey00} !important;
            }
        }
    `;

    let labelBackgroundColorOverride = '';
    if (disabled) {
        if (checked) {
            labelBackgroundColorOverride = colorGrey60;
        } else {
            labelBackgroundColorOverride = colorGrey70;
        }
    } else {
        if (!checked) {
            labelBackgroundColorOverride = colorGrey50;
        }
    }

    if (labelBackgroundColorOverride !== '') {
        result = css`
            ${result};
            .Switch-Label {
                background-color: ${labelBackgroundColorOverride} !important;
            }
        `;
    }

    return result;
};

import { css } from 'styled-components';
import {
    color,
    spacing,
    getOutlineFocusStyleFromColor,
} from '@deliveryhero/armor-system';
import { SwitchPropsType } from '@deliveryhero/armor';

type SwitchRootPropsType = SwitchPropsType &
    Partial<{
        reallyChecked: boolean;
    }>;

export const getSwitchOverride = ({
    reallyChecked: checked,
    disabled,
}: SwitchRootPropsType) => {
    let result = css`
        &&& {
            .Switch-Label {
                &:after {
                    background-color: ${color('neutral.06')};
                }
            }
        }
        .Switch-CheckboxInput {
            &:focus-visible + .Switch-Label {
                ${getOutlineFocusStyleFromColor('neutral.10')};
                box-shadow: 0 0 0 ${spacing(1)} ${color('primary.03', 0.4)};
            }
        }
    `;

    let labelBackgroundColorOverride = '';
    if (disabled) {
        if (checked) {
            labelBackgroundColorOverride = 'neutral.03';
        } else {
            labelBackgroundColorOverride = 'neutral.02';
        }
    } else {
        if (!checked) {
            labelBackgroundColorOverride = 'neutral.07';
        }
    }

    if (labelBackgroundColorOverride !== '') {
        result = css`
            ${result};
            &&&& {
                .Switch-Label {
                    background-color: ${color(labelBackgroundColorOverride)};
                }
            }
        `;
    }

    return result;
};

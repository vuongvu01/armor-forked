import { css } from 'styled-components';
import {
    color,
    spacing,
    getOutlineFocusStyleFromColor,
    colorGrey70,
    colorGrey40,
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

    if (disabled) {
        result = css`
            ${result};

            &&&& {
                .Switch-Label {
                    background-color: ${colorGrey70};

                    &:after {
                        background-color: ${colorGrey40};
                    }
                }
            }
        `;
    }

    if (!checked && !disabled) {
        result = css`
            ${result};

            &&&& {
                .Switch-Label {
                    background-color: ${color('neutral.07')};
                }
            }
        `;
    }

    return result;
};

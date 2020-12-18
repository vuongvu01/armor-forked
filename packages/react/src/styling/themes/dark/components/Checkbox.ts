import { css } from 'styled-components';
import {
    colorBlue10,
    colorGrey40,
    colorGrey50,
    colorGrey60,
    colorGrey80,
} from '../../../../tokens';
import { CheckboxPropsType } from '../../../../components/Checkbox/type';

export const getCheckboxOverride = ({
    disabled,
    reallyChecked: checked,
}: CheckboxPropsType) => {
    let result = {};

    if (!checked && !disabled) {
        result = css`
            ${result};
            .Checkbox-Checkmark {
                &:before {
                    background: ${colorGrey80} !important;
                }
            }
            &:hover {
                .Checkbox-Checkmark {
                    &:before {
                        border-color: ${colorBlue10} !important;
                    }
                }
            }
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            .Checkbox-Checkmark {
                &:before {
                    border-color: ${colorGrey50} !important;
                    background-color: ${colorGrey60} !important;
                }
                &:after {
                    color: ${colorGrey40} !important;
                }
            }
        `;
    }

    return result;
};

import { css, FlattenSimpleInterpolation } from 'styled-components';
import {
    color,
    getOutlineFocusStyleFromColor,
    colorGrey40,
    colorGrey50,
    colorGrey70,
    colorGrey80,
} from '@deliveryhero/armor-system';
import { CheckboxPropsType } from '@deliveryhero/armor';

export const getCheckboxOverride = ({
    disabled,
    checked,
}: CheckboxPropsType) => {
    let result = css`
        .Checkbox-Input {
            &:focus-visible + .Checkbox-Checkmark:before {
                ${getOutlineFocusStyleFromColor('primary.03')}
            }
        }

        &:hover {
            .Checkbox-Input {
                &:checked:not(:focus-visible):not(:disabled)
                    + .Checkbox-Checkmark:before {
                    border-color: ${color('primary.02')};
                    background-color: ${color('primary.02')};
                }

                &:checked:focus-visible:not(:disabled)
                    + .Checkbox-Checkmark:before {
                    background-color: ${color('primary.02')};
                }

                &:not(:checked):not(:disabled) + .Checkbox-Checkmark:before {
                    border-color: ${color('primary.02')};
                }
            }
        }
    ` as FlattenSimpleInterpolation;

    if (!checked && !disabled) {
        result = css`
            ${result};

            .Checkbox-Checkmark:before {
                border-color: ${colorGrey40};
                background-color: ${colorGrey80};
            }
        ` as FlattenSimpleInterpolation;
    }

    if (disabled) {
        result = css`
            ${result};

            .Checkbox-Input:disabled + .Checkbox-Checkmark:before {
                border-color: ${colorGrey50};
                background-color: ${colorGrey70};
            }

            .Checkbox-Icon {
                color: ${colorGrey40};
            }
        ` as FlattenSimpleInterpolation;
    }

    return result;
};

import { css } from 'styled-components';
import {
    colorGrey40,
    colorGrey50,
    colorGrey60,
    colorGrey80,
} from '../../../../tokens';
import { RadioPropsType } from '../../../../components/Radio/type';

export const getRadioOverride = ({ disabled }: RadioPropsType) => {
    let result = {};

    if (disabled) {
        result = css`
            ${result};
            .Radio-Label {
                &:before {
                    border-color: ${colorGrey50} !important;
                    background-color: ${colorGrey60} !important;
                }
                &:after {
                    background-color: ${colorGrey40} !important;
                }
            }
        `;
    } else {
        result = css`
            ${result};
            .Radio-Label {
                &:before {
                    background-color: ${colorGrey80} !important;
                }
            }
        `;
    }

    return result;
};

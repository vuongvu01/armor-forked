import { css } from 'styled-components';
import { TabPropsType } from '../../../../components/Tab';
import {
    colorGrey05,
    colorGrey30,
    colorGrey50,
    colorGrey60,
    colorGrey80,
} from '../../../../tokens';

export const getTabOverride = ({ disabled, isActive }: TabPropsType) => {
    let result = css`
        background-color: ${colorGrey80};
        .Tab-Label {
            color: ${colorGrey30};
        }
    `;

    if (disabled) {
        result = css`
            ${result};
            .Tab-Label {
                color: ${colorGrey50};
            }
        `;
    } else {
        result = css`
            ${result};
            &:hover {
                .Tab-Label {
                    background-color: ${colorGrey60};
                }
            }
        `;
    }

    if (isActive) {
        result = css`
            ${result};
            .Tab-Label {
                color: ${colorGrey05};
            }
        `;
    }

    return result;
};

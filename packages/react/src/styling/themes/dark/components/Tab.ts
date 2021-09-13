import { css } from 'styled-components';
import { TabRootPropsType } from '../../../../components/Tab/type';
import { color, enforceColor } from '../../../../system';

export const getTabOverride = ({ disabled }: TabRootPropsType) => {
    let result = css`
        .Tab-Label {
            color: ${color('neutral.06')};
            &:hover {
                color: ${color('primary.light')};
            }
        }

        &:after {
            background-color: ${color('primary.lighter')};
        }
    `;

    if (disabled) {
        result = css`
            ${result};
            .Tab-Label {
                ${enforceColor(color('neutral.04'))};
            }
        `;
    }

    return result;
};

import { css } from 'styled-components';
import { color } from '../../../../system';
import { ExpansionIndicatorPropsType } from '../../../../components';

export const getExpansionIndicatorOverride = ({
    disabled,
}: ExpansionIndicatorPropsType) => {
    let result = {};

    if (!disabled) {
        result = css`
            color: ${color('primary.main')};
        `;
    }

    return result;
};

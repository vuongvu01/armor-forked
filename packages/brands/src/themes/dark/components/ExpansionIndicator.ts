import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';
import { ExpansionIndicatorPropsType } from '@deliveryhero/armor';

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

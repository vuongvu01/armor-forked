import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';
import { FormFieldMessagePropsType } from '@deliveryhero/armor';

export const getFormFieldMessageOverride = ({
    error,
}: FormFieldMessagePropsType) => {
    if (error) {
        return css`
            color: ${color('error.04')};
        `;
    }

    return '';
};

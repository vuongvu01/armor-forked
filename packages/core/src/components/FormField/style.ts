import styled, { css } from 'styled-components';
import {
    getComponentOverride,
    marginProps,
    propsBlocker,
    spacing,
    token,
    typography,
    widthProps,
} from '@deliveryhero/armor-system';

import { FormFieldRootPropsType } from './type';

const getRootStyle = ({
    enableVerticalOuterSpacing,
}: FormFieldRootPropsType) => {
    if (enableVerticalOuterSpacing) {
        return css`
            &:not(:last-child) {
                margin-bottom: ${spacing(2)};
            }
        `;
    }

    return '';
};

/** 👉 ROOT ELEMENT */
export const FormFieldRoot = styled.div.withConfig(
    propsBlocker,
)<FormFieldRootPropsType>`
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    box-sizing: border-box;
    position: relative;
    ${getRootStyle};
    ${getComponentOverride('FormField')};
    ${marginProps};
    ${widthProps};
`;

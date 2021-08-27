import styled, { css } from 'styled-components';

import {
    marginAttributes,
    propsBlocker,
    spacing,
    typography,
    widthAttributes,
} from '../../system';
import { FormFieldRootPropsType } from './type';

const getRootStyle = ({
    enableVerticalOuterSpacing,
}: FormFieldRootPropsType) => {
    if (enableVerticalOuterSpacing) {
        return css`
            &:not(:last-child) {
                margin-bottom: ${spacing(1.25)};
            }
        `;
    }

    return '';
};

/** 👉 ROOT ELEMENT */
export const FormFieldRoot = styled.div.withConfig(propsBlocker)<
    FormFieldRootPropsType
>`
    ${typography('paragraphMedium')};
    box-sizing: border-box;
    position: relative;
    ${getRootStyle}
    
    ${marginAttributes}
    ${widthAttributes}
`;

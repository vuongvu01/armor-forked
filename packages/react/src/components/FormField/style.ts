import styled from 'styled-components';

import { marginAttributes, propsBlocker, widthAttributes } from '../../system';
import { FormFieldRootPropsType } from './type';

const getRootBaseStyle = ({ theme }: FormFieldRootPropsType) =>
    theme.componentOverrides.FormField.Root.base;

const getRootDynamicStyle = ({
    theme,
    enableVerticalOuterSpacing,
}: FormFieldRootPropsType) => {
    const {
        componentOverrides: { FormField },
    } = theme;

    if (enableVerticalOuterSpacing) {
        return FormField.Root.autoMargin;
    }

    return '';
};

/** 👉 ROOT ELEMENT */
export const FormFieldRoot = styled.div.withConfig(propsBlocker)<
    FormFieldRootPropsType
>`
    box-sizing: border-box;
    position: relative;

    ${getRootBaseStyle}
    ${getRootDynamicStyle}
    
    ${marginAttributes}
    ${widthAttributes}
`;

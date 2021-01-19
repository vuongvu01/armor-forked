import styled from 'styled-components';

import { marginAttributes, widthAttributes } from '../../system';
import { getPropsBlocker } from '../../utils';
import { FormFieldRootPropsType } from './type';

const propertyList = {
    autoMargin: true,
    enableVerticalOuterSpacing: true,
};

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

export const FormFieldRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<FormFieldRootPropsType>`
    box-sizing: border-box;
    position: relative;

    ${getRootBaseStyle}
    ${getRootDynamicStyle}
    
    ${marginAttributes}
    ${widthAttributes}
`;

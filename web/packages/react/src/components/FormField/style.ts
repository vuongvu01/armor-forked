import styled from 'styled-components';

import { marginAttributes, widthAttributes } from 'src/system';
import { ObjectLiteralType } from 'src/type';
import { shouldForwardProp } from 'src/utils';
import { FormFieldRootPropsType } from './type';

const propertyList = {
    autoMargin: true,
    // add other custom properties here
} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: FormFieldRootPropsType) =>
    theme.componentOverrides.FormField.Root.base;

const getRootDynamicStyle = ({ theme, autoMargin }: FormFieldRootPropsType) => {
    const {
        componentOverrides: { FormField },
    } = theme;

    if (autoMargin) {
        return FormField.Root.autoMargin;
    }

    return '';
};

export const FormFieldRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<FormFieldRootPropsType>`
    box-sizing: border-box;
    position: relative;

    ${getRootBaseStyle}
    ${getRootDynamicStyle}
    
    ${marginAttributes}
    ${widthAttributes}
    ${(props: FormFieldRootPropsType) => props.styles(props)}
`;

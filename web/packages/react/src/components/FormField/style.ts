import styled from 'styled-components';
import { FormFieldRootPropsType } from './type';
import { marginAttributes } from '../../system/attributes';
import { ObjectLiteralType } from '../../type';
import { shouldForwardProp } from '../../utils';

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
    ${(props: FormFieldRootPropsType) => props.styles(props)}
`;

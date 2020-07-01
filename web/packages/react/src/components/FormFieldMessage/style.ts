import styled, { css } from 'styled-components';

import { marginAttributes } from 'src/system';
import { ObjectLiteralType } from 'src/type';
import { shouldForwardProp } from 'src/utils';
import { FormFieldMessageRootPropsType } from './type';

const propertyList = {
    error: true,
    oneLine: true,
    // add other custom properties here
} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: FormFieldMessageRootPropsType) =>
    theme.componentOverrides.FormFieldMessage.Root.base;

const getRootDynamicStyle = ({
    theme,
    error,
    oneLine,
}: FormFieldMessageRootPropsType) => {
    const {
        componentOverrides: { FormFieldMessage },
    } = theme;

    return css`
        ${oneLine
            ? css`
                  white-space: nowrap;
                  overflow-x: hidden;
                  text-overflow: ellipsis;
              `
            : ''}
        ${error ? FormFieldMessage.Root.error : ''}
    `;
};

export const FormFieldMessageRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<FormFieldMessageRootPropsType>`
    box-sizing: border-box;
    position: relative;

    ${getRootBaseStyle}
    ${getRootDynamicStyle}
    ${marginAttributes}
    ${(props: FormFieldMessageRootPropsType) => props.styles(props)}
`;

export const FormFieldMessageFakeChildren = styled.div`
    opacity: 0;
    &:before {
        content: '1';
    }
`;

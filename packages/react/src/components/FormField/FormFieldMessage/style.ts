import styled, { css } from 'styled-components';

import { marginAttributes } from '../../../system';
import { ObjectLiteralType } from '../../../type';
import { getPropsBlocker } from '../../../utils';
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

export const FormFieldMessageRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<FormFieldMessageRootPropsType>`
    box-sizing: border-box;
    position: relative;

    ${getRootBaseStyle}
    ${getRootDynamicStyle}
    ${marginAttributes}
`;

export const FormFieldMessageFakeChildren = styled.div.withConfig(
    getPropsBlocker(propertyList),
)`
    opacity: 0;
    &:before {
        content: '1';
    }
`;

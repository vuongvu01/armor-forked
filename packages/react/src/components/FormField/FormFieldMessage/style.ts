import styled, { css } from 'styled-components';

import { marginAttributes, propsBlocker } from '../../../system';
import { FormFieldMessageRootPropsType } from './type';

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
            : ''};
        ${error ? FormFieldMessage.Root.error : ''};
    `;
};

/** 👉 ROOT ELEMENT */
export const FormFieldMessageRoot = styled.div.withConfig(propsBlocker)<
    FormFieldMessageRootPropsType
>`
    box-sizing: border-box;
    position: relative;

    ${getRootBaseStyle};
    ${getRootDynamicStyle};
    ${marginAttributes};
`;

export const FormFieldMessageFakeChildren = styled.div.withConfig(propsBlocker)`
    opacity: 0;
    &:before {
        content: '1';
    }
`;

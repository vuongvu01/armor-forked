import styled, { css } from 'styled-components';
import {
    color,
    getComponentOverride,
    marginProps,
    propsBlocker,
    typography,
} from '@deliveryhero/armor-system';

import { FormFieldMessageRootPropsType } from './type';
import { spacing } from '../../../compatibility';

const getRootDynamicStyle = ({
    error,
    oneLine,
}: FormFieldMessageRootPropsType) => {
    return css`
        ${oneLine
            ? css`
                  white-space: nowrap;
                  overflow-x: hidden;
                  text-overflow: ellipsis;
              `
            : ''};
        ${error
            ? css`
                  color: ${color('error.main')};
              `
            : ''};
    `;
};

/** 👉 ROOT ELEMENT */
export const FormFieldMessageRoot = styled.div.withConfig(
    propsBlocker,
)<FormFieldMessageRootPropsType>`
    box-sizing: border-box;
    position: relative;
    ${typography('labelSmall')};
    color: ${color('neutral.07')};
    margin: ${spacing(2)};
    ${getRootDynamicStyle};
    ${getComponentOverride('FormFieldMessage')};
    ${marginProps};
`;

export const FormFieldMessageFakeChildren = styled.div.withConfig(propsBlocker)`
    opacity: 0;
    &:before {
        content: '1';
    }
`;

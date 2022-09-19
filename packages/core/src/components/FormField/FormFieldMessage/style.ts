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
    let result = {};

    if (oneLine) {
        result = css`
            ${result};
            white-space: nowrap;
            overflow-x: hidden;
            text-overflow: ellipsis;
        `;
    }

    if (error) {
        result = css`
            ${result};
            color: ${color('error.08')};
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const FormFieldMessageRoot = styled.div.withConfig(
    propsBlocker,
)<FormFieldMessageRootPropsType>`
    box-sizing: border-box;
    position: relative;
    ${typography('paragraphSmall')};
    color: ${color('neutral.07')};
    margin-top: ${spacing(2)};
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

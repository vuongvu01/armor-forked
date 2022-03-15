import styled, { css } from 'styled-components';
import { <%- component_name_pascal %>RootPropsType } from './type';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    color,
    token,
} from '@deliveryhero/armor-system';

const getRootStyle = (props: <%- component_name_pascal %>RootPropsType) => {

    let result = {};

    // if (exampleProperty) {
    //     result = css`
    //         ${result};
    //         color: red;
    //     `;
    // }

    return result;
};

/** 👉 ROOT ELEMENT */
export const <%- component_name_pascal %>Root = styled.div.withConfig(
    propsBlocker,
)<<%- component_name_pascal %>RootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    ${getRootStyle};
    ${getComponentOverride('<%- component_name_pascal %>')};
    ${marginProps};
`;

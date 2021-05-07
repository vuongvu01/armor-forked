import styled, { css } from 'styled-components';
import { <%- component_name_pascal %>RootPropsType } from './type';
import {
    marginAttributes,
    textAlignmentAttributes,
    propsBlocker,
    getComponentOverride,
} from '../../system';
import { reset, typography } from '../../system/mixins';

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

    ${getRootStyle};
    ${getComponentOverride('<%- component_name_pascal %>')};
    ${marginAttributes};
`;

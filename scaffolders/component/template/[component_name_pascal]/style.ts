import styled, { css } from 'styled-components';
import { <%- component_name_pascal %>RootPropsType } from './type';
import { marginAttributes } from '../../system/attributes';
import { getPropsBlocker, makePropList } from '../../utils';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';
import { reset, typography } from '../../system/mixins';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    // 'exampleProperty',
]);

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

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const <%- component_name_pascal %>Root = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<<%- component_name_pascal %>RootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};

    ${getRootStyle};
    ${getComponentOverride('<%- component_name_pascal %>')};
    ${marginAttributes};
`;

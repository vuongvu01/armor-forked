import styled, { css } from 'styled-components';
import { <%- component_name_pascal %>RootPropsType, <%- component_name_pascal %>SubNodePropsType } from './type';
import { marginAttributes } from '../../system/attributes';
import { getPropsBlocker, makePropList } from '../../utils';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';
import {reset} from '../../system/mixins';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    // 'exampleProperty',
]);

const getRootDynamicStyle = (props: <%- component_name_pascal %>RootPropsType) => {

    let result = {};

    // if (exampleProperty) {
    //     result = css`
    //         ${result};
    //         ${<%- component_name_pascal %>.Root.exampleModifier}
    //     `;
    // }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const <%- component_name_pascal %>Root = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<<%- component_name_pascal %>RootPropsType>`
    box-sizing: border-box;

    ${getRootDynamicStyle};
    ${getComponentOverride('<%- component_name_pascal %>')};
    ${marginAttributes};
`;

const getSubNodeDynamicStyle = (props: <%- component_name_pascal %>SubNodePropsType) => {

    let result = {};

    // if (exampleProperty) {
    //     result = css`
    //         ${result};
    //         ${<%- component_name_pascal %>.SubNode.exampleModifier}
    //     `;
    // }

    return result;
};

export const <%- component_name_pascal %>SubNode = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<<%- component_name_pascal %>SubNodePropsType>`
    ${reset};

    ${getSubNodeDynamicStyle};
    ${getComponentOverride('<%- component_name_pascal %>SubNode')};
`;

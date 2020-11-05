import styled from 'styled-components';
import { NavigationRootPropsType } from './type';
import { marginAttributes, widthAttributes } from '../../system/attributes';
import { shouldForwardProp, makePropList } from '../../utils';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList(['enableBottomSeparator']);

const getRootDynamicStyle = ({ theme }: NavigationRootPropsType) => {
    const {
        componentOverrides: { Navigation },
    } = theme;

    const result = Navigation.Root.base;

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const NavigationRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<NavigationRootPropsType>`
    box-sizing: border-box;

    ${getRootDynamicStyle}
    ${marginAttributes}
    ${widthAttributes}
`;

import styled, { css } from 'styled-components';
import { MenuRootPropsType } from './type';
import { marginAttributes, paddingAttributes } from '../../system/attributes';
import { shouldForwardProp, makePropList } from '../../utils';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    'enableBottomSeparator',
    'secondary',
    'tertiary',
]);

const getRootDynamicStyle = ({
    theme,
    enableBottomSeparator,
    secondary,
    tertiary,
}: MenuRootPropsType) => {
    const {
        componentOverrides: { Menu },
    } = theme;

    let result = Menu.Root.base;

    if (enableBottomSeparator) {
        result = css`
            ${result};
            border-bottom-width: 1px;
            border-bottom-style: solid;
            ${Menu.Root.bottomSeparator}
        `;
    }

    if (secondary) {
        result = css`
            ${result};
            ${Menu.Root.secondary}
        `;
    } else if (tertiary) {
        result = css`
            ${result};
            ${Menu.Root.tertiary}
        `;
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const MenuRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<MenuRootPropsType>`
    box-sizing: border-box;

    ${getRootDynamicStyle}
    ${marginAttributes}
    ${paddingAttributes}
`;

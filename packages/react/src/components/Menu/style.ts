import styled, { css } from 'styled-components';
import { MenuRootPropsType } from './type';
import { marginAttributes, paddingAttributes } from '../../system/attributes';
import { shouldForwardProp, makePropList } from '../../utils';
import { transitionDurationInSec } from '../../constants';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    'enableBottomSeparator',
    'secondary',
    'tertiary',
    'expanded',
    'enableEffects',
]);

const getRootDynamicStyle = ({
    theme,
    enableBottomSeparator,
    secondary,
    tertiary,
    expanded,
    enableEffects,
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

    if (expanded !== undefined) {
        result = css`
            ${result};
            overflow-y: hidden;
            height: ${expanded ? 'auto' : '0'};
        `;

        if (enableEffects) {
            result = css`
                ${result};
                opacity: ${expanded ? '1' : '0'};
                transform: translateX(${expanded ? '0' : '-5px'});
                transition: transform ${transitionDurationInSec}s ease-in-out,
                    opacity ${transitionDurationInSec}s ease;
            `;
        }
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const MenuRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<MenuRootPropsType>`
    box-sizing: border-box;

    ${getRootDynamicStyle}
    ${getComponentOverride('Menu')};
    ${marginAttributes}
    ${paddingAttributes}
`;

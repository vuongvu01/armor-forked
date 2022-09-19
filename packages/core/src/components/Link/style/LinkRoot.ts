import styled from 'styled-components';
import {
    reset,
    propsBlocker,
    marginProps,
    getComponentOverride,
    transition,
    fontFamilyRoboto,
} from '@deliveryhero/armor-system';
import { ReactElement } from 'react';
import { LinkRootPropsType } from '../type';
import {
    getRootStyle,
    getSizeStyle,
    getHoverStyle,
    getActiveStyle,
    getVisitedStyle,
    getFocusStyle,
    getDisabledStyle,
    getInlineStyle,
} from './mixins';

const LinkTagWrapper = ({
    children,
    ...restProps
}: LinkRootPropsType & {
    children: (props: LinkRootPropsType) => ReactElement;
}) => children(restProps);

/** 👉 ROOT ELEMENT */
const LinkRoot = styled(LinkTagWrapper).withConfig(
    propsBlocker,
)<LinkRootPropsType>`
    ${reset};

    font-family: ${fontFamilyRoboto};

    ${transition({
        'background-color': true,
        outline: true,
        color: true,
    })};

    ${getRootStyle};
    ${getSizeStyle};
    ${getActiveStyle};
    ${getHoverStyle};
    ${getVisitedStyle};
    ${getFocusStyle};
    ${getDisabledStyle};
    ${getInlineStyle};

    ${marginProps};
    ${getComponentOverride('Link')};
`;

export default LinkRoot;

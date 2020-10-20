import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import {
    HeaderNavigationRootPropsType,
    HeaderNavigationTitleRootPropsType,
} from './type';
import { ObjectLiteralType } from '../../type';
import { colorGrey05, colorGrey50 } from '../../tokens';

const propertyList = {
    justifyContent: true,
    direction: true,
    alignItems: true,
    flexGrow: true,
    alignSelf: true,
} as ObjectLiteralType;

const headerNavigationRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigation },
    },
}: HeaderNavigationRootPropsType) => {
    return HeaderNavigation.Root.base;
};

export const HeaderNavigationRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<HeaderNavigationRootPropsType>`
    box-sizing: border-box;
    display: block;
    height: 48px;

    color: #0042a5;

    ${headerNavigationRootStyle}
    ${marginAttributes}
`;

export const HeaderNavigationTitleRoot = styled.div<
    HeaderNavigationTitleRootPropsType
>``;

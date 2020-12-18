import styled from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import {
    HeaderNavigationRootPropsType,
    HeaderNavigationTitleRootPropsType,
} from './type';
import { ObjectLiteralType } from '../../type';
import { spacing } from '../../system/mixins';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

const propertyList = {
    justifyContent: true,
    direction: true,
    alignItems: true,
    flexGrow: true,
    alignSelf: true,
    onSearchItemSelect: true,
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
    display: block;
    min-height: ${spacing(12)};

    ${headerNavigationRootStyle}
    ${getComponentOverride('HeaderNavigation')};
    ${marginAttributes}
`;

export const HeaderNavigationTitleRoot = styled.div<
    HeaderNavigationTitleRootPropsType
>``;

export const HeaderNavigationContent = styled.div<
    HeaderNavigationRootPropsType
>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderNavigationContentItem = styled.div<
    HeaderNavigationRootPropsType
>``;

export const HeaderNavigationContentLeft = styled.div<
    HeaderNavigationRootPropsType
>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderNavigationContentRight = styled.div<
    HeaderNavigationRootPropsType
>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

import styled from 'styled-components';

import {
    HeaderNavigationActionContainerPropsType,
    HeaderNavigationActionItemRootPropsType,
    HeaderNavigationActionRootPropsType,
} from './type';
import { Pack, PackItem } from '../../Pack';
import { HeaderNavigationPackItem } from '../HeaderNavigationPackItem';

const actionRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationAction },
    },
}: HeaderNavigationActionRootPropsType) => {
    return HeaderNavigationAction.Root.base;
};

export const HeaderNavigationActionRoot = styled(HeaderNavigationPackItem)<
    HeaderNavigationActionRootPropsType
>`
    padding-top: 0;
    padding-bottom: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 48px;

    ${actionRootStyle}
`;

export const HeaderNavigationActionContainer = styled(Pack)<
    HeaderNavigationActionContainerPropsType
>``;

const actionItemRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationAction },
    },
}: HeaderNavigationActionItemRootPropsType) => {
    return HeaderNavigationAction.Item.base;
};

export const HeaderNavigationActionItemRoot = styled(PackItem)<
    HeaderNavigationActionItemRootPropsType
>`
    ${actionItemRootStyle}
`;

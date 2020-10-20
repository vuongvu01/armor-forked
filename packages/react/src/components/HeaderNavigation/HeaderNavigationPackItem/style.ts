import styled from 'styled-components';

import { HeaderNavigationPackItemRootPropsType } from './type';
import { PackItem } from '../../Pack';

const headerNavigationPackItemRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationPackItem },
    },
}: HeaderNavigationPackItemRootPropsType) => HeaderNavigationPackItem.Root.base;

export const HeaderNavigationPackItemRoot = styled(PackItem)<
    HeaderNavigationPackItemRootPropsType
>`
    white-space: nowrap;

    ${headerNavigationPackItemRootStyle}
`;

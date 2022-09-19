import styled from 'styled-components';
import { getComponentOverride, propsBlocker } from '@deliveryhero/armor-system';

import { TableHeadRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const TableHeadRoot = styled.thead.withConfig(
    propsBlocker,
)<TableHeadRootPropsType>`
    ${getComponentOverride('TableHead')};

    & > tr {
        border-bottom: none;
    }
`;

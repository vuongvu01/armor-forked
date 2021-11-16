import styled from 'styled-components';
import { getComponentOverride, propsBlocker } from '@deliveryhero/armor-system';

import { TableBodyRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const TableBodyRoot = styled.tbody.withConfig(propsBlocker)<
    TableBodyRootPropsType
>`
    ${getComponentOverride('TableBody')};
`;

import styled from 'styled-components';
import { marginProps, propsBlocker, token } from '@deliveryhero/armor-system';

import { TableCellLabelRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const TableCellLabelRoot = styled.div.withConfig(
    propsBlocker,
)<TableCellLabelRootPropsType>`
    box-sizing: border-box;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    font-family: ${token('typography.body.fontFamily')};
    ${marginProps};
`;

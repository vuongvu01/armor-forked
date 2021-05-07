import styled from 'styled-components';
import { TableBodyRootPropsType } from './type';
import { getComponentOverride, propsBlocker } from '../../../system';

/** 👉 ROOT ELEMENT */
export const TableBodyRoot = styled.tbody.withConfig(propsBlocker)<
    TableBodyRootPropsType
>`
    ${getComponentOverride('TableBody')};
`;

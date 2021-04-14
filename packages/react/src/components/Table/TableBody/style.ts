import styled from 'styled-components';
import { TableBodyRootPropsType } from './type';
import { propsBlocker } from '../../../system';

const getRootDynamicStyle = ({ theme }: TableBodyRootPropsType) =>
    theme.componentOverrides.TableBody.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableBodyRoot = styled.tbody.withConfig(propsBlocker)<
    TableBodyRootPropsType
>`
    ${getRootDynamicStyle}
`;

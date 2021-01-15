import styled from 'styled-components';
import { TableBodyRootPropsType } from './type';
import { ObjectLiteralType } from '../../../type';
import { getPropsBlocker } from '../../../utils';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {} as ObjectLiteralType;

const getRootDynamicStyle = ({ theme }: TableBodyRootPropsType) =>
    theme.componentOverrides.TableBody.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableBodyRoot = styled.tbody.withConfig(
    getPropsBlocker(propertyList),
)<TableBodyRootPropsType>`
    ${getRootDynamicStyle}
`;

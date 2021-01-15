import styled from 'styled-components';
import { TableHeadRootPropsType } from './type';
import { ObjectLiteralType } from '../../../type';
import { getPropsBlocker } from '../../../utils';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: TableHeadRootPropsType) =>
    theme.componentOverrides.TableHead.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableHeadRoot = styled.thead.withConfig(
    getPropsBlocker(propertyList),
)<TableHeadRootPropsType>`
    ${getRootBaseStyle}
`;

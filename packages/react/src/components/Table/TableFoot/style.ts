import styled from 'styled-components';
import { TableFootRootPropsType } from './type';
import { ObjectLiteralType } from '../../../type';
import { getPropsBlocker } from '../../../utils';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {} as ObjectLiteralType;

const getRootDynamicStyle = ({ theme }: TableFootRootPropsType) =>
    theme.componentOverrides.TableFoot.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableFootRoot = styled.tfoot.withConfig(
    getPropsBlocker(propertyList),
)<TableFootRootPropsType>`
    ${getRootDynamicStyle}
`;

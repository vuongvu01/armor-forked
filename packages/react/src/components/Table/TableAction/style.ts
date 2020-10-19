import styled from 'styled-components';
import { TableActionRootPropsType } from './type';
import { marginAttributes } from '../../../system/attributes';
import { ObjectLiteralType } from '../../../type';
import { shouldForwardProp } from '../../../utils';
import { transitionDurationInSec } from '../../../constants';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: TableActionRootPropsType) =>
    theme.componentOverrides.TableAction.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableActionRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TableActionRootPropsType>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    transition: color ${transitionDurationInSec}s ease;
    cursor: pointer;

    ${getRootBaseStyle}
    ${marginAttributes}
`;
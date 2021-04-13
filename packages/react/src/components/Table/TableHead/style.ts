import styled from 'styled-components';
import { TableHeadRootPropsType } from './type';
import { propsBlocker } from '../../../system';

const getRootBaseStyle = ({ theme }: TableHeadRootPropsType) =>
    theme.componentOverrides.TableHead.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableHeadRoot = styled.thead.withConfig(propsBlocker)<
    TableHeadRootPropsType
>`
    ${getRootBaseStyle}
`;

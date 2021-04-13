import styled from 'styled-components';
import { TableFootRootPropsType } from './type';
import { propsBlocker } from '../../../system';

const getRootDynamicStyle = ({ theme }: TableFootRootPropsType) =>
    theme.componentOverrides.TableFoot.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableFootRoot = styled.tfoot.withConfig(propsBlocker)<
    TableFootRootPropsType
>`
    ${getRootDynamicStyle}
`;

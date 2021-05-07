import styled from 'styled-components';
import { TableFootRootPropsType } from './type';
import { getComponentOverride, propsBlocker } from '../../../system';

/** 👉 ROOT ELEMENT */
export const TableFootRoot = styled.tfoot.withConfig(propsBlocker)<
    TableFootRootPropsType
>`
    ${getComponentOverride('TableFoot')};
`;

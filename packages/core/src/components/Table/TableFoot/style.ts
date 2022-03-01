import styled from 'styled-components';
import { getComponentOverride, propsBlocker } from '@deliveryhero/armor-system';

import { TableFootRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const TableFootRoot = styled.tfoot.withConfig(
    propsBlocker,
)<TableFootRootPropsType>`
    ${getComponentOverride('TableFoot')};
`;

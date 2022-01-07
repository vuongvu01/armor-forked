import styled from 'styled-components';
import { TableBody } from '../../Table';

export const DragAndDropTableBody = styled(TableBody)`
    cursor: grabbing;
    filter: drop-shadow(0px 2px 28px rgba(0, 0, 0, 0.12));
`;

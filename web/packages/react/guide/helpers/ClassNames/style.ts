import styled from 'styled-components';

export const ClassNamesContainer = styled.div`
    margin-top: -1.5rem;
`;

export const TriggerButtonContainer = styled.div`
    margin-bottom: 8px;
`;

export const NoWrap = styled.span`
    white-space: nowrap;
`;

export const Collapse = styled.div<{ collapsed: boolean }>`
    display: ${({ collapsed }) => (collapsed ? 'none' : 'initial')};
`;

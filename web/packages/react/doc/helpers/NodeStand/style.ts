import styled from 'styled-components';

export const NodeStandContainer = styled.div`
    border: 1px solid #e8e8e8;
    border-radius: 3px;
    padding: 16px;
`;

export const Path = styled.div<{ active: boolean }>`
    color: ${({ active }) => (active ? '#ba0000' : 'gray')};
    margin-bottom: 1rem;
`;

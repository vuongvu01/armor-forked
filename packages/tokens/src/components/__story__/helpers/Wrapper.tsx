import styled from 'styled-components';
import React from 'react';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 2rem;
    transition: background-color 0.3s;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.armor.body.backgroundColor};
`;

export const withWrapper = (Story: any) => (
    <Wrapper>
        <Story />
    </Wrapper>
);

import styled from 'styled-components';
import React from 'react';

import bgTile from './tile.jpg';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-color: ${({ theme }) => theme.armor.body.backgroundColor};
    transition: background-color 0.3s;
    box-sizing: border-box;
    ${({ theme }) =>
        theme.backgroundChecker ? `background-image: url(${bgTile});` : ''}
    background-repeat: repeat;
`;

export const withWrapper = (Story: any) => (
    <Wrapper>
        <Story />
    </Wrapper>
);

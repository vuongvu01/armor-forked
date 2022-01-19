import React from 'react';
import styled from 'styled-components';

import * as I from '..';

export default {
    title: 'Illustrations',
    component: I.RestaurantIllustration,
    parameters: {},
};

const Illustrations = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Illustration = styled.div`
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: #f7f7f7;
    color: #050505;
`;

export const Basic = () => (
    <>
        <h2>Restaurant</h2>
        <Illustrations>
            <Illustration>
                <I.RestaurantIllustration width="100px" title="Restaurant" />
            </Illustration>
        </Illustrations>
    </>
);

import React from 'react';
import styled from 'styled-components';

import * as M from '..';

export default {
    title: 'Motion',
    component: M.Spinner,
    parameters: {},
};

const Motions = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Motion = styled.div`
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
        <h2>Spinner</h2>
        <Motions>
            <Motion>
                <M.Spinner width="50px" />
            </Motion>
        </Motions>
    </>
);

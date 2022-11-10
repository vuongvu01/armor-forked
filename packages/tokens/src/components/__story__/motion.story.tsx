import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { withWrapper } from './helpers/Wrapper';

import * as M from '..';

export default {
    title: 'Motion',
    decorators: [withWrapper],
    parameters: {},
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: ${({ theme }) => theme.armor.body.color};
`;

const Motion = styled.div`
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
`;

export const Basic = (): ReactElement => (
    <>
        {Object.entries(M).map(([motionName, Component]) => (
            <Container key={motionName}>
                <Motion>
                    <Component width="100px" />
                </Motion>
                <h2>{motionName}</h2>
            </Container>
        ))}
    </>
);

export const CustomLoadingSpinner = (): ReactElement => {
    return (
        <>
            <Container>
                <Motion>
                    <M.LoadingSpinner
                        width="100px"
                        primaryColor="#FFFFFF"
                        secondaryColor="#D6D6D6"
                    />
                </Motion>
            </Container>
            <Container style={{ background: '#242424' }}>
                <Motion>
                    <M.LoadingSpinner
                        width="100px"
                        primaryColor="#FFFFFF"
                        secondaryColor="#2C2C2C"
                    />
                </Motion>
            </Container>
        </>
    );
};

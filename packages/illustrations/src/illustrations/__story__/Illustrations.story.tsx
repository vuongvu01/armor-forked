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
    gap: 12px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    <Illustrations>
        {Object.entries(I)
            .sort()
            .map(([illustrationName, IllustrationComponent]) => {
                const realName = illustrationName.split('Illustration')[0];
                return (
                    <Container key={realName}>
                        <Illustration>
                            <IllustrationComponent
                                width="100px"
                                title={realName}
                            />
                        </Illustration>
                        <h3>{realName}</h3>
                    </Container>
                );
            })}
    </Illustrations>
);

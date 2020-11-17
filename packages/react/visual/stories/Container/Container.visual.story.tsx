import React from 'react';

import { Container, Button } from '../../../src/components';

export default {
    title: 'Container',
    component: Container,
};

export const Small = () => {
    return (
        <Container
            style={{ backgroundColor: 'gray', color: 'white' }}
            maxWidth="sm"
        >
            Small
        </Container>
    );
};

export const Medium = () => {
    return (
        <Container
            style={{ backgroundColor: 'gray', color: 'white' }}
            maxWidth="md"
        >
            Medium
        </Container>
    );
};

export const Large = () => {
    return (
        <Container
            style={{ backgroundColor: 'gray', color: 'white' }}
            maxWidth="lg"
        >
            Large
        </Container>
    );
};

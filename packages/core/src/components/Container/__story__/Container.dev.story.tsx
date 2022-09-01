/* eslint-disable no-console,import/no-unresolved */

import React from 'react';

import { withWrapper } from '../../../helpers/Wrapper';

import { Container } from '../Container';

export default {
    title: 'Core/Container',
    component: Container,
    decorators: [withWrapper],
    parameters: {},
};

export const Small = () => {
    return <Container maxWidth="sm">Hello world!</Container>;
};

export const Medium = () => {
    return <Container maxWidth="md">Hello world!</Container>;
};

export const Large = () => {
    return <Container maxWidth="lg">Hello world!</Container>;
};

export const XLarge = () => {
    return <Container maxWidth="xl">Hello world!</Container>;
};

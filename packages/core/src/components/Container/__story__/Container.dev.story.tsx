/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { withWrapper } from '../../../helpers/Wrapper';

import { Container } from '../Container';

export default {
    title: 'Components/Container',
    component: Container,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Small = () => {
    return (
        <Container maxWidth="sm">{text('Children', 'Hello world!')}</Container>
    );
};

export const Medium = () => {
    return (
        <Container maxWidth="md">{text('Children', 'Hello world!')}</Container>
    );
};

export const Large = () => {
    return (
        <Container maxWidth="lg">{text('Children', 'Hello world!')}</Container>
    );
};

export const XLarge = () => {
    return (
        <Container maxWidth="xl">{text('Children', 'Hello world!')}</Container>
    );
};

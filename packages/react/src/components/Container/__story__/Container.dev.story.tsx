/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Container } from '../Container';

export default {
    title: 'Components/Container',
    component: Container,
    decorators: [withKnobs],
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

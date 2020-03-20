import React from 'react';
import { css } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Button } from '../Button';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => <Button>Hello world!</Button>;
export const CustomClassName = () => (
    <Button className="Hello-Button">Hello world!</Button>
);
export const StylesPassed = () => (
    <Button
        disabled={boolean('Disabled', false)}
        styles={{
            root: ({ theme }) => css`
                border: ${theme.spacing(1)} dashed red;
                ${theme.breakpoints.up('md')} {
                    border-color: blue;
                }
            `,
        }}
    >
        {text('Label', 'Hello world!')}
    </Button>
);

export const AttributesOverridePassed = () => (
    <Button
        attributes={{
            root: {
                primary: true,
            },
        }}
    >
        Hello world!
    </Button>
);

export const OuterSpacingAttributesPassed = () => (
    <Button margin={2}>Hello world!</Button>
);

export const OuterSpacingAttributesPassedAsString = () => (
    <Button marginTop="2rem">Hello world!</Button>
);

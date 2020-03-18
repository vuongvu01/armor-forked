import React from 'react';
import { css } from 'styled-components';
import { Button } from '../Button';

export default {
    title: 'Button',
    component: Button,
    decorators: [],
    parameters: {},
};

export const Basic = () => <Button>Hello world!</Button>;
export const CustomClassName = () => (
    <Button className="Hello-Button">Hello world!</Button>
);
export const StylesPassed = () => (
    <Button
        styles={{
            root: props => css`
                border: ${props.theme.spacing(1)} dashed red;
            `,
        }}
    >
        Hello world!
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

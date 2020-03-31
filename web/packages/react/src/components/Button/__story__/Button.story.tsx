import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved
import { action } from '@storybook/addon-actions';
import { Button } from '../Button';
import { TagType } from '../type';
import { EditIcon } from '../../../icons/EditIcon';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [withKnobs],
    parameters: {},
};

const optionsTag = {
    Button: 'button',
    A: 'a',
    Span: 'span',
    Div: 'div',
};

const optionsType = {
    Primary: 'primary',
    Secondary: 'secondary',
    Tertiary: 'tertiary',
    Ghost: 'ghost',
};

const getTypeAttributes = (type: string) => ({
    primary: false,
    secondary: false,
    tertiary: false,
    ghost: false,
    [type]: true,
});

export const Playground = () => (
    <Button
        {...getTypeAttributes(select('Type', optionsType, 'primary'))}
        tag={select('Tag', optionsTag, 'button') as TagType}
        wide={boolean('Wide', false)}
        small={boolean('Small', false)}
        disabled={boolean('Disabled', false)}
        onClick={action('button-click')}
        href="https://google.com"
        target="_blank"
        iconRight={boolean('With icon', false) ? EditIcon : undefined}
        className="custom-class-name"
        classNames={{ root: 'custom-btn-root' }}
    >
        {text('Label', 'Primary button')}
    </Button>
);

export const AsLink = () => (
    <Button tag="link" href="https://www.google.com/" target="_blank">
        Open Google
    </Button>
);

export const WithMargins = () => (
    <Button
        marginTop={`${number('Margin top', 0)}px`}
        marginBottom={`${number('Margin bottom', 0)}px`}
        marginLeft={`${number('Margin left', 0)}px`}
        marginRight={`${number('Margin right', 0)}px`}
    >
        Primary button
    </Button>
);

export const IconOnly = () => (
    <Button
        {...getTypeAttributes(select('Type', optionsType, 'primary'))}
        tag={select('Tag', optionsTag, 'button') as TagType}
        wide={boolean('Wide', false)}
        small={boolean('Small', false)}
        disabled={boolean('Disabled', false)}
    >
        <EditIcon />
    </Button>
);

export const WithMultilineContent = () => (
    <Button
        {...getTypeAttributes(select('Type', optionsType, 'primary'))}
        tag={select('Tag', optionsTag, 'button') as TagType}
        wide={boolean('Wide', false)}
        small={boolean('Small', false)}
        disabled={boolean('Disabled', false)}
    >
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
    </Button>
);

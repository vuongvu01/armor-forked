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
import { ThemeProvider } from 'styled-components';
import { Button } from '../Button';
import { TagType } from '../type';
import { EditIcon } from '../../../icons/EditIcon';
import { MaterialIcon } from '../../MaterialIcon';
import { makeTheme } from '../../../styling';

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
};

const getTypeAttributes = (type: string) => ({
    primary: false,
    secondary: false,
    tertiary: false,
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

export const WithBigIcon = () => (
    <Button
        {...getTypeAttributes(select('Type', optionsType, 'primary'))}
        wide={boolean('Wide', false)}
        small={boolean('Small', false)}
    >
        Icon is massive
        <EditIcon fontSize="3rem" marginLeft={2} />
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

export const Comparison = () => (
    // <div style={{ display: 'flex' }}>
    <div>
        <Button
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as TagType}
            small={boolean('Small', false)}
        >
            No Icon
        </Button>
        <Button
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as TagType}
            small={boolean('Small', false)}
        >
            With icon <EditIcon marginLeft={2} />
        </Button>
        <Button
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as TagType}
            small={boolean('Small', false)}
        >
            With MUI icon <MaterialIcon marginLeft={2}>edit</MaterialIcon>
        </Button>
        <Button
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as TagType}
            small={boolean('Small', false)}
        >
            With MUI icon{' '}
            <MaterialIcon marginLeft={2} fontSize={20}>
                edit
            </MaterialIcon>
        </Button>
        <Button
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as TagType}
            small={boolean('Small', false)}
        >
            <EditIcon />
        </Button>
        <Button
            tag={select('Tag', optionsTag, 'button') as TagType}
            small={boolean('Small', false)}
        >
            <MaterialIcon>edit</MaterialIcon>
        </Button>
        <Button
            tag={select('Tag', optionsTag, 'button') as TagType}
            small={boolean('Small', false)}
        >
            <MaterialIcon>save</MaterialIcon>
        </Button>
    </div>
);

export const Comparison2 = () => (
    <>
        <Button small={boolean('Small', false)}>
            Edit <MaterialIcon marginLeft={4}>edit</MaterialIcon>
        </Button>
        <Button small={boolean('Small', false)}>
            <MaterialIcon marginRight={4}>save</MaterialIcon> Save{' '}
            <MaterialIcon marginLeft={4}>save</MaterialIcon>
        </Button>
        <Button small={boolean('Small', false)}>
            <MaterialIcon marginRight={4}>save</MaterialIcon> Save
        </Button>
        <Button small={boolean('Small', false)}>
            <MaterialIcon marginRight={4} fontSize={22}>
                save
            </MaterialIcon>{' '}
            Save
        </Button>
        <Button small={boolean('Small', false)}>
            Save <MaterialIcon marginLeft={4}>save</MaterialIcon>
        </Button>
        <Button small={boolean('Small', false)}>
            Add{' '}
            <MaterialIcon marginLeft={4} fontSize={22}>
                add
            </MaterialIcon>
        </Button>
        <Button small={boolean('Small', false)}>
            Remove <MaterialIcon marginLeft={4}>remove</MaterialIcon>
        </Button>
    </>
);

export const InText = () => (
    <>
        Feel free to{' '}
        <Button small={boolean('Small', false)}>
            eat <MaterialIcon marginLeft={2}>edit</MaterialIcon>
        </Button>{' '}
        that tasty pie and{' '}
        <Button small={boolean('Small', false)}>
            <MaterialIcon marginRight={2}>save</MaterialIcon> drink{' '}
            <MaterialIcon marginLeft={2}>save</MaterialIcon>
        </Button>{' '}
        some tea.
    </>
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

export const IconAndText = () => (
    <Button
        {...getTypeAttributes(select('Type', optionsType, 'primary'))}
        tag={select('Tag', optionsTag, 'button') as TagType}
        wide={boolean('Wide', false)}
        small={boolean('Small', false)}
    >
        <MaterialIcon marginRight={2}>save</MaterialIcon>
        Text
    </Button>
);

const customTheme = makeTheme({
    components: {
        Button: {
            base: {
                fontWeight: 'bold',
            },
            primary: {
                base: {
                    borderColor: 'red',
                },
                hover: {
                    borderColor: 'yellow',
                },
            },
        },
    },
});

export const WithCustomTheme = () => (
    <ThemeProvider theme={customTheme}>
        <Button
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as TagType}
            wide={boolean('Wide', false)}
            small={boolean('Small', false)}
        >
            <MaterialIcon marginRight={2}>save</MaterialIcon>
            With custom theme
        </Button>
    </ThemeProvider>
);

export const TertiaryWithIcon = () => (
    <>
        <Button tertiary small={boolean('Small', false)}>
            <MaterialIcon marginRight={2}>save</MaterialIcon>
            Text
        </Button>
        <Button small={boolean('Small', false)}>
            eat <MaterialIcon marginLeft={2}>edit</MaterialIcon>
        </Button>
    </>
);

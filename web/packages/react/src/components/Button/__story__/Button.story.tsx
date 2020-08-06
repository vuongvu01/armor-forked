import React, { useState } from 'react';
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
import styled, { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withStyles as withMaterialStyles } from '@material-ui/core/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Link } from 'react-router-dom';

import { MaterialIcon } from '../../MaterialIcon';
import { EditIcon } from '../../../icons';
import { defaultTheme, makeTheme } from '../../../styling';
import { ObjectLiteralType } from '../../../type';
import { GroupHelper } from '../../../helpers/GroupHelper';
import { Button } from '../Button';
import { ButtonTagType } from '../type';
import { armorTheme } from './custom-theme';
import { Box } from '../../Box';

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
    Danger: 'danger',
};

const getTypeAttributes = (type: string) => ({
    primary: false,
    secondary: false,
    tertiary: false,
    [type]: true,
});

const groupStyle = {
    display: 'flex',
    alignItems: 'flex-end',
};

export const Types = () => {
    const [theme, setTheme] = useState(defaultTheme);

    return (
        <>
            <h3>Pick theme</h3>
            <Button marginRight={2} onClick={() => setTheme(defaultTheme)}>
                Default theme
            </Button>
            <Button onClick={() => setTheme(armorTheme)}>DPS theme</Button>
            <hr />
            <ThemeProvider theme={theme}>
                <h3>Types</h3>
                <GroupHelper styles={groupStyle}>
                    <Button primary>Primary</Button>
                    <Button primary>
                        <EditIcon marginRight={2} />
                        Primary with icon
                    </Button>
                    <Button primary>
                        Primary with icon
                        <EditIcon marginLeft={2} />
                    </Button>
                    <Button primary paddingX={3}>
                        <EditIcon />
                    </Button>
                    <Button primary danger>
                        Primary
                    </Button>
                    <Button primary small>
                        Primary
                    </Button>
                    <Button primary />
                </GroupHelper>
                <GroupHelper styles={groupStyle}>
                    <Button disabled primary>
                        Primary
                    </Button>
                    <Button disabled primary>
                        <EditIcon marginRight={2} />
                        Primary with icon
                    </Button>
                    <Button disabled primary>
                        Primary with icon
                        <EditIcon marginLeft={2} />
                    </Button>
                    <Button disabled primary paddingX={3}>
                        <EditIcon />
                    </Button>
                    <Button disabled primary danger>
                        Primary
                    </Button>
                    <Button disabled primary small>
                        Primary
                    </Button>
                </GroupHelper>
                <br />
                <br />
                <GroupHelper styles={groupStyle}>
                    <Button secondary>Secondary</Button>
                    <Button secondary>
                        <EditIcon marginRight={2} />
                        Secondary with icon
                    </Button>
                    <Button secondary>
                        Secondary with icon
                        <EditIcon marginLeft={2} />
                    </Button>
                    <Button secondary paddingX={3}>
                        <EditIcon />
                    </Button>
                    <Button secondary small>
                        Secondary
                    </Button>
                </GroupHelper>
                <GroupHelper styles={groupStyle}>
                    <Button disabled secondary>
                        Secondary
                    </Button>
                    <Button disabled secondary>
                        <EditIcon marginRight={2} />
                        Secondary with icon
                    </Button>
                    <Button disabled secondary>
                        Secondary with icon
                        <EditIcon marginLeft={2} />
                    </Button>
                    <Button disabled secondary paddingX={3}>
                        <EditIcon />
                    </Button>
                    <Button disabled secondary small>
                        Secondary
                    </Button>
                </GroupHelper>
                <br />
                <br />
                <GroupHelper styles={groupStyle}>
                    <Button tertiary>Tertiary</Button>
                    <Button tertiary>
                        <EditIcon marginRight={2} />
                        Tertiary with icon
                    </Button>
                    <Button tertiary>
                        Tertiary with icon
                        <EditIcon marginLeft={2} />
                    </Button>
                    <Button tertiary paddingX={3}>
                        <EditIcon />
                    </Button>
                    <Button tertiary danger>
                        Tertiary
                    </Button>
                </GroupHelper>
                <GroupHelper styles={groupStyle}>
                    <Button disabled tertiary>
                        Tertiary
                    </Button>
                    <Button disabled tertiary>
                        <MaterialIcon marginRight={2} />
                        Tertiary with icon
                    </Button>
                    <Button disabled tertiary>
                        Tertiary with icon
                        <EditIcon marginLeft={2} />
                    </Button>
                    <Button disabled tertiary paddingX={3}>
                        <EditIcon />
                    </Button>
                    <Button disabled tertiary danger>
                        Tertiary
                    </Button>
                </GroupHelper>
            </ThemeProvider>
        </>
    );
};

export const Playground = () => (
    <Button
        {...getTypeAttributes(select('Type', optionsType, 'primary'))}
        tag={select('Tag', optionsTag, 'button') as ButtonTagType}
        wide={boolean('Wide', false)}
        small={boolean('Small', false)}
        disabled={boolean('Disabled', false)}
        onClick={action('button-click')}
        href="https://google.com"
        target="_blank"
        className="custom-class-name"
        classNames={{ Root: 'custom-btn-root' }}
    >
        {text('Label', 'Primary button')}
    </Button>
);

export const AsLink = () => (
    <Button tag="a" href="https://www.google.com/" target="_blank">
        Open Google
    </Button>
);

export const WithMargins = () => (
    <Button
        marginTop={number('Margin top', 0)}
        marginBottom={number('Margin bottom', 0)}
        marginLeft={number('Margin left', 0)}
        marginRight={number('Margin right', 0)}
    >
        Primary button
    </Button>
);

export const Comparison = () => (
    // <div style={{ display: 'flex' }}>
    <div>
        <Button
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            No Icon
        </Button>
        <Button
            marginLeft={2}
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            With MUI icon <MaterialIcon marginLeft={2}>edit</MaterialIcon>
        </Button>
        <Button
            marginLeft={2}
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            With MUI icon{' '}
            <MaterialIcon marginLeft={2} fontSize={20}>
                edit
            </MaterialIcon>
        </Button>
        <Button
            marginLeft={2}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            <MaterialIcon>edit</MaterialIcon>
        </Button>
        <Button
            marginLeft={2}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            <MaterialIcon>save</MaterialIcon>
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            Edit <MaterialIcon marginLeft={2}>edit</MaterialIcon>
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            <MaterialIcon marginRight={2}>save</MaterialIcon> Save
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            <MaterialIcon marginRight={2}>save</MaterialIcon>
            Save
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            Save <MaterialIcon marginLeft={2}>save</MaterialIcon>
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            Add
            <MaterialIcon marginLeft={2}>add</MaterialIcon>
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            Remove <MaterialIcon marginLeft={2}>remove</MaterialIcon>
        </Button>
    </div>
);

export const InText = () => (
    <>
        Feel free to{' '}
        <Button small={boolean('Small', false)}>
            eat <MaterialIcon marginLeft={2}>edit</MaterialIcon>
        </Button>{' '}
        <Button small>
            eat <MaterialIcon marginLeft={2}>edit</MaterialIcon>
        </Button>{' '}
        that tasty pie and{' '}
        <Button small={boolean('Small', false)}>
            <MaterialIcon marginRight={2}>save</MaterialIcon> drink{' '}
            <MaterialIcon marginLeft={2} icon="save" />
        </Button>{' '}
        some tea.
    </>
);

export const IconAndText = () => (
    <Button
        {...getTypeAttributes(select('Type', optionsType, 'primary'))}
        tag={select('Tag', optionsTag, 'button') as ButtonTagType}
        wide={boolean('Wide', false)}
        small={boolean('Small', false)}
    >
        <MaterialIcon marginRight={2}>add</MaterialIcon>
        Create workflow
    </Button>
);

const customTheme = makeTheme({
    components: {
        Button: {
            Root: {
                base: {
                    fontWeight: 'bold',
                },
                primary: {
                    borderColor: 'red',
                    '&:hover': {
                        borderColor: 'yellow',
                    },
                },
            },
        },
    },
});

export const WithCustomTheme = () => (
    <ThemeProvider theme={customTheme}>
        <Button
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            wide={boolean('Wide', false)}
            small={boolean('Small', false)}
        >
            <MaterialIcon marginRight={2} icon="save" />
            With custom theme
        </Button>
    </ThemeProvider>
);

export const AsRouterLink = () => (
    <BrowserRouter>
        <Button tag={Link} to="/homepage">
            No route to host!
        </Button>
    </BrowserRouter>
);

export const WithClassName = () => (
    <BrowserRouter>
        <Button className="custom-button">I am custom</Button>
        <style
            dangerouslySetInnerHTML={{
                __html: `.custom-button { border: 1px solid red; };`,
            }}
        />
    </BrowserRouter>
);

const CustomButtonWrapper = ({ classes }: { classes: ObjectLiteralType }) => (
    <Button className={classes.customButton}>I am custom</Button>
);

const CustomButtonMUI = withMaterialStyles({
    customButton: {
        border: '1px solid red',
    },
})(CustomButtonWrapper);

export const WithMUIStyles = () => <CustomButtonMUI />;

export const WithCustomAttributes = () => (
    <Button marginLeft={2}>With custom attributes</Button>
);

const BlockWithBorder = styled(Box)`
    border-right: 1px solid white;
    align-self: stretch;
    display: flex;
    align-items: center;
`;

export const WithCustomSide = () => (
    <Button marginLeft={2} paddingLeft={0} paddingY={0}>
        <BlockWithBorder marginRight={2} paddingRight={2} paddingLeft={3}>
            With
        </BlockWithBorder>
        <Box paddingY={3}>custom side</Box>
    </Button>
);

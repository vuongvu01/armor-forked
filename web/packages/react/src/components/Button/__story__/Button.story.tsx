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
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withStyles as withMaterialStyles } from '@material-ui/core/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Link } from 'react-router-dom';

import { EditIcon } from '../../../icons';
import { MaterialIcon } from '../../MaterialIcon';
import { TextInput } from '../../TextInput';
import { makeTheme } from '../../../styling';
import { fontSize04 } from '../../../tokens';
import { ObjectLiteralType } from '../../../type';
import { GroupHelper } from '../../../helpers/GroupHelper';
import { Button } from '../Button';
import { ButtonTagType } from '../type';
import { armorTheme } from './custom-theme';
import { defaultTheme } from '../../../styling';

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

export const Types = () => {
    const [theme, setTheme] = useState(defaultTheme);

    return (
        <>
            <Button marginRight={2} onClick={() => setTheme(defaultTheme)}>
                Default
            </Button>
            <Button onClick={() => setTheme(armorTheme)}>DPS</Button>
            <hr />
            <ThemeProvider theme={theme}>
                <h3>Sizes</h3>
                <GroupHelper>
                    <Button primary>
                        <MaterialIcon marginRight={2} icon="delete" />
                        Button text
                    </Button>
                    <Button primary>Button text</Button>
                    <Button primary small>
                        <MaterialIcon marginRight={2} icon="delete" />
                        Button text
                    </Button>
                    <Button primary small>
                        Button text
                    </Button>
                </GroupHelper>
                <h3>Next to an input</h3>
                <GroupHelper>
                    <Button primary>
                        <MaterialIcon marginRight={2} icon="delete" />
                        Button text
                    </Button>
                    <TextInput label="Name your price" name="your_price" />
                </GroupHelper>
                <h3>Types</h3>
                <GroupHelper>
                    <Button primary>Primary</Button>
                    <Button secondary>Secondary</Button>
                    <Button tertiary>Tertiary</Button>
                </GroupHelper>
                <GroupHelper>
                    <Button primary danger>
                        Primary
                    </Button>
                    <Button secondary danger>
                        Secondary
                    </Button>
                    <Button tertiary danger>
                        Tertiary
                    </Button>
                </GroupHelper>
                <GroupHelper>
                    <Button primary disabled>
                        Primary
                    </Button>
                    <Button secondary disabled>
                        Secondary
                    </Button>
                    <Button tertiary disabled>
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
        tag={select('Tag', optionsTag, 'button') as ButtonTagType}
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
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            No Icon
        </Button>
        <Button
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            With icon <EditIcon marginLeft={2} />
        </Button>
        <Button
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            With MUI icon <MaterialIcon marginLeft={2}>edit</MaterialIcon>
        </Button>
        <Button
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
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            <EditIcon />
        </Button>
        <Button
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            <MaterialIcon>edit</MaterialIcon>
        </Button>
        <Button
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
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
            <MaterialIcon marginRight={4} fontSize={fontSize04}>
                save
            </MaterialIcon>{' '}
            Save
        </Button>
        <Button small={boolean('Small', false)}>
            Save <MaterialIcon marginLeft={4}>save</MaterialIcon>
        </Button>
        <Button small={boolean('Small', false)}>
            Add{' '}
            <MaterialIcon marginLeft={4} fontSize={fontSize04}>
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
            <MaterialIcon marginLeft={2} icon="save" />
        </Button>{' '}
        some tea.
    </>
);

export const WithMultilineContent = () => (
    <Button
        {...getTypeAttributes(select('Type', optionsType, 'primary'))}
        tag={select('Tag', optionsTag, 'button') as ButtonTagType}
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
        tag={select('Tag', optionsTag, 'button') as ButtonTagType}
        wide={boolean('Wide', false)}
        small={boolean('Small', false)}
    >
        <MaterialIcon marginRight={2} fontSize={fontSize04}>
            add
        </MaterialIcon>
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

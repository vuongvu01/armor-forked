import React, { ComponentType, useState } from 'react';
import {
    boolean,
    select,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditIcon } from '@deliveryhero/armor-icons';
// eslint-disable-next-line import/no-unresolved
import styled, { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withStyles as withMaterialStyles } from '@material-ui/core/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Link } from 'react-router-dom';
import { makeTheme, makeDefaultTheme } from '@deliveryhero/armor-system';

import { ObjectLiteralType } from '../../../type';
import { GroupHelper } from '../../../helpers/GroupHelper';
import { Button } from '../Button';
import { Box } from '../../Box';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [withWrapper],
    parameters: {},
};

const defaultTheme = makeDefaultTheme();

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

export const AllStates = () => {
    const [theme, setTheme] = useState(defaultTheme);

    return (
        <>
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
                <Button secondary danger>
                    Secondary
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
                    <EditIcon marginRight={2} />
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
        </>
    );
};

export const AsLink = () => (
    <Button tag="a" href="https://www.google.com/" target="_blank">
        Open Google
    </Button>
);

type ButtonTagType = string | ComponentType<any>;

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
            With MUI icon <EditIcon marginLeft={2} />
        </Button>
        <Button
            marginLeft={2}
            {...getTypeAttributes(select('Type', optionsType, 'primary'))}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            With MUI icon <EditIcon marginLeft={2} fontSize={20} />
        </Button>
        <Button
            marginLeft={2}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            <EditIcon />
        </Button>
        <Button
            marginLeft={2}
            tag={select('Tag', optionsTag, 'button') as ButtonTagType}
            small={boolean('Small', false)}
        >
            <EditIcon />
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            Edit <EditIcon marginLeft={2} />
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            <EditIcon marginRight={2} />
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            <EditIcon marginRight={2} />
            Save
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            Save <EditIcon marginLeft={2} />
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            Add
            <EditIcon marginLeft={2} />
        </Button>
        <Button marginLeft={2} small={boolean('Small', false)}>
            Remove <EditIcon marginLeft={2} />
        </Button>
    </div>
);

export const InText = () => (
    <>
        Feel free to{' '}
        <Button small={boolean('Small', false)}>
            eat <EditIcon marginLeft={2} />
        </Button>{' '}
        <Button small>
            eat <EditIcon marginLeft={2} />
        </Button>{' '}
        that tasty pie and{' '}
        <Button small={boolean('Small', false)}>
            <EditIcon marginRight={2} /> drink <EditIcon marginLeft={2} />
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
        <EditIcon marginRight={2} />
        Create workflow
    </Button>
);

const customTheme = makeTheme({
    armor: {
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
            <EditIcon marginRight={2} />
            With custom theme
        </Button>
    </ThemeProvider>
);

export const WithCustomThemeAsLink = () => (
    <ThemeProvider theme={customTheme}>
        <BrowserRouter>
            <Button
                {...getTypeAttributes(select('Type', optionsType, 'primary'))}
                wide={boolean('Wide', false)}
                small={boolean('Small', false)}
                tag={Link}
                to="/homepage"
            >
                <EditIcon marginRight={2} />
                With custom theme
            </Button>
        </BrowserRouter>
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

export const LikeDisabled = () => (
    <>
        <div>
            <Button primary>Normal</Button>
            <Button disabled primary>
                Disabled
            </Button>
            <Button likeDisabled primary>
                Like disabled
            </Button>
        </div>
        <div>
            <Button secondary>Normal</Button>
            <Button disabled secondary>
                Disabled
            </Button>
            <Button likeDisabled secondary>
                Like disabled
            </Button>
        </div>
        <div>
            <Button tertiary>Normal</Button>
            <Button disabled tertiary>
                Disabled
            </Button>
            <Button likeDisabled tertiary>
                Like disabled
            </Button>
        </div>
    </>
);

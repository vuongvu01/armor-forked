import React from 'react';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMuiTheme } from '@material-ui/core/styles';

import { Button } from 'src/components/Button';
import { MaterialIcon } from 'src/components/MaterialIcon';
// import { EditIcon } from '../../icons';
// import { withStyles } from '../with-styles';
// import { fontSizeIconBig } from 'src/tokens';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { BrowserRouter, Link } from 'react-router-dom';
// import { ObjectLiteralType } from 'src/type';
// import {
//     DialogAttributeOverrideType,
//     DialogPropsType,
//     DialogStyleOverrideType,
// } from '../../Dialog/type';
// import { Dialog } from '../../components/Dialog';
import { GroupHelper } from 'src/helpers/GroupHelper';
import { makeTheme } from '..';

export default {
    title: 'Styling/Custom themes',
    decorators: [withKnobs],
    parameters: {},
};

const declaration = {
    palette: {
        common: { black: 'rgba(52, 59, 70, 1)', white: '#fff' },
        background: { paper: '#fff', default: '#fafafa' },
        primary: {
            light: 'rgba(117, 117, 117, 1)',
            main: 'rgba(52, 59, 70, 1)',
            dark: 'rgba(33, 33, 33, 1)',
            contrastText: '#fff',
        },
        secondary: {
            light: 'rgba(229, 115, 115, 1)',
            main: 'rgba(211, 47, 47, 1)',
            dark: 'rgba(198, 45, 45, 1)',
            contrastText: '#fff',
        },
        error: {
            light: '#e57373',
            main: 'rgba(211, 47, 47, 1)',
            dark: 'rgba(198, 45, 45, 1)',
            contrastText: '#fff',
        },
        text: {
            primary: 'rgba(33, 33, 33, 1)',
            secondary: 'rgba(52, 59, 70, 1)',
            disabled: 'rgba(117, 117, 117, 1)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
    },
    color: {
        primary: {
            lighter: '#4F5C6E',
            light: '#4F5C6E',
            main: '#343B46',
            dark: '#1F222A',
            darker: '#1F222A',
            contrast: '#fff',
        },
        danger: {
            light: '#F6D5D5',
            main: '#d32f2f',
            dark: '#c62d2d',
            contrast: '#fff',
        },
    },
    components: {
        Button: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
                secondary: {
                    backgroundColor: '$color.neutral.00',
                    '&:hover': {
                        backgroundColor: '$color.neutral.03',
                    },
                    '&:focus': {
                        backgroundColor: '$color.neutral.03',
                    },
                    '&:active': {
                        backgroundColor: '$color.neutral.04',
                    },
                    '&:disabled': {
                        color: '$color.neutral.04',
                        borderColor: '$color.neutral.03',
                        backgroundColor: '$color.neutral.00',
                    },
                },
                tertiary: {
                    '&:hover': {
                        backgroundColor: '$color.neutral.03',
                    },
                    '&:focus': {
                        backgroundColor: '$color.neutral.03',
                    },
                    '&:active': {
                        backgroundColor: '$color.neutral.04',
                    },
                },
                danger: {
                    borderColor: '$color.secondary.base',
                },
            },
        },
    },
};

const theme = createMuiTheme(declaration);
const hybridTheme = makeTheme(theme);

export const DPS = () => {
    const result = (
        <ThemeProvider theme={hybridTheme}>
            <h2>Buttons</h2>
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
            <h3>Types</h3>
            <GroupHelper>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
                <Button tertiary>Tertiary</Button>
                <Button danger>Danger</Button>
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
                <Button danger disabled>
                    Danger
                </Button>
            </GroupHelper>
        </ThemeProvider>
    );

    return result;
};

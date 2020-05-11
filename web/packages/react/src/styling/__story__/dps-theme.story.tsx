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
// eslint-disable-next-line import/no-extraneous-dependencies
import {
    createMuiTheme,
    withStyles as withMaterialStyles,
} from '@material-ui/core/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { BrowserRouter, Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ButtonTagType } from '../../components/Button/type';
// import { EditIcon } from '../../icons';
import { MaterialIcon } from '../../components/MaterialIcon';
// import { withStyles } from '../with-styles';
// import { fontSizeIconBig } from '../../../tokens';
// import { ObjectLiteralType } from '../../../type';
// import {
//     DialogAttributeOverrideType,
//     DialogPropsType,
//     DialogStyleOverrideType,
// } from '../../Dialog/type';
// import { Dialog } from '../../components/Dialog';
import { makeHybridTheme } from '../../helpers/sample-mui-theme';
import { GroupHelper } from '../../helpers/GroupHelper';
import { makeTheme } from '..';
import { grey050, grey100, white } from '../../tokens';

export default {
    title: 'Styling/Theme',
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
            lighterX2: '#4F5C6E',
            base: '#343B46',
            darkerX2: '#1F222A',
            contrast: '#fff',
        },
        secondary: {
            lighterX3: '#FAEAEB',
            lighterX2: '#F6D5D5',
            base: 'rgba(211, 47, 47, 1)',
            dark: 'rgba(198, 45, 45, 1)',
            dark300: 'rgba(198, 45, 45, 1)',
            contrast: '#fff',
        },
        tertiary: {},
        danger: {
            lighterX3: '#FAEAEB',
            lighterX2: '#F6D5D5',
            base: 'rgba(211, 47, 47, 1)',
            dark: 'rgba(198, 45, 45, 1)',
            dark300: 'rgba(198, 45, 45, 1)',
            contrast: '#fff',
        },
    },
    components: {
        Button: {
            Root: {
                base: {
                    borderWidth: '2px',
                },
                danger: {
                    borderColor: '$color.secondary.base',
                    '&:disabled': {
                        borderColor: grey050, // todo: use shades of gray for theme
                    },
                },
            },
        },
    },
};

const theme = createMuiTheme(declaration);
const hybridTheme = makeTheme(theme);

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

// const hybridTheme = makeHybridTheme({
//     components: {
//         Button: {
//             Root: {
//                 base: {
//                     fontWeight: 'bold',
//                 },
//                 primary: {
//                     borderColor: '$color.secondary.light',
//                     color: '$color.secondary.main',
//                     '&:hover': {
//                         borderColor: '$color.secondary.light',
//                     },
//                 },
//             },
//         },
//     },
// });
//
// const hybridTheme = makeHybridTheme(
//     {},
//     {
//         adoptMaterialUI: true,
//     },
// );

export const DPS = () => (
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
    </ThemeProvider>
);

## Theme 1

~~~js
import { ThemeProvider } from 'styled-components';
import { makeTheme } from '..';
import { GroupHelper } from 'GroupHelper';
import { Button, MaterialIcon } from '../components'

const theme = makeTheme({
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
});

<ThemeProvider theme={theme}>
    <h2>Buttons</h2>
    <h3>Sizes</h3>
    <GroupHelper>
        <Button primary>
            <MaterialIcon marginRight={2} fontSize={22} icon="delete" />
            Button text
        </Button>
        <Button primary>Button text</Button>
        <Button primary small>
            <MaterialIcon marginRight={2} fontSize={22} icon="delete" />
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
    <br />
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
~~~

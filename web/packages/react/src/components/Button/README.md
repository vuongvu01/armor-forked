```js noeditor
import { ClassNames } from 'ClassNames';

<ClassNames data={[
    {
        name: 'Button-Root',
        description: 'Root element',
    },
    {
        name: 'Button-Root--disabled',
        description: 'Root element modifier when the button is disabled',
    },
    {
        name: 'Button-Root--small',
        description: 'Root element modifier when the button is small',
    },
    {
        name: 'Button-Root--wide',
        description: 'Root element modifier when the button is wide',
    },
    {
        name: 'Button-Root--primary',
        description: 'Root element modifier when the button is rendered as primary',
    },
    {
        name: 'Button-Root--secondary',
        description: 'Root element modifier when the button is rendered as secondary',
    },
    {
        name: 'Button-Root--tertiary',
        description: 'Root element modifier when the button is rendered as tertiary',
    },
]}/>
```

### Use-cases

#### Appearance

```js
import { GroupHelper } from 'GroupHelper';

<GroupHelper>
    <Button>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button tertiary>Tertiary</Button>
</GroupHelper>
```

#### Size

```js
import { GroupHelper } from 'GroupHelper';

<GroupHelper>
    <Button>Regular</Button>
    <Button small>Small</Button>
</GroupHelper>
```

#### Disabled

```js
import { GroupHelper } from 'GroupHelper';

<GroupHelper>
    <Button disabled>Primary</Button>
    <Button disabled secondary>Secondary</Button>
    <Button disabled tertiary>Tertiary</Button>
</GroupHelper>
```

#### Wide

```js
<Button wide>I occupy the entire parent width</Button>
```

#### Link

```js
import { GroupHelper } from 'GroupHelper';
import { BrowserRouter, Link } from 'react-router-dom';

<BrowserRouter>
    <GroupHelper>
        <Button tag="a" href="https://google.com" target="_blank">
            Regular link
        </Button>
        <Button tag={Link} to="/homepage">
            React router link
        </Button>
    </GroupHelper>
</BrowserRouter>
```

#### Material icon

See <a href="https://material.io/resources/icons/" target="_blank">all available icons</a>

```js
import { GroupHelper } from 'GroupHelper';
import {MaterialIcon} from '../MaterialIcon';

<GroupHelper>
    <Button>
        Edit
        <MaterialIcon marginLeft={2}>edit</MaterialIcon>
    </Button>
    <Button>
        Edit
        <MaterialIcon marginLeft={2} fontSize={22}>edit</MaterialIcon>
    </Button>
    <Button secondary>
        Save
        <MaterialIcon marginLeft={2}>save</MaterialIcon>
    </Button>
    <Button tertiary>
        Add
        <MaterialIcon marginLeft={2}>add</MaterialIcon>
    </Button>
    <Button tertiary>
        Add
        <MaterialIcon marginLeft={2} fontSize={22} icon="add" />
    </Button>
    <Button primary>
        <MaterialIcon marginRight={2}>save</MaterialIcon>
        Save
    </Button>
    <Button primary>
        <MaterialIcon marginRight={2} fontSize={22} icon="save" />
        Save
    </Button>
</GroupHelper>
```

### How to customise

Create a uniquely-styled button:

```typescript jsx
import { GroupHelper } from 'GroupHelper';
import { css, withStyles, shadow100 } from "../../";
import {white} from "../../tokens/colors";

const CustomPrimaryButton = withStyles(
    {
        Root: ({ disabled }) => css`
            box-shadow: ${shadow100};
            text-transform: uppercase;
            color: #D3302F;
            border: 2px solid #D61F26;
            background-color: ${white};
            border-radius: 4px;

            &:hover, &:active, &:focus, &:visited {
                color: #D3302F;
                background-color: ${white};
            }
            &:hover {
                background-color: #FAEAEB;
            }
        `,
    },
    { 
        Root: { primary: true }
    }
)(Button);

<GroupHelper>
    <CustomPrimaryButton>I am custom</CustomPrimaryButton>
    <Button>I am still the same</Button>
</GroupHelper>
```

Restyle all buttons in the application:

```typescript jsx
import { GroupHelper } from 'GroupHelper';
import { shadow100 } from "../../";
import {ThemeProvider} from "../../styling/theme-provider";
import { makeTheme } from '../../styling/make/make-theme';
import {white} from "../../tokens/colors";

const theme = makeTheme({
    components: {
        Button: {
            Root: {
                base: {
                    boxShadow: shadow100,
                    textTransform: 'uppercase',
                    color: '#D3302F',
                    border: '2px solid #D61F26',
                    backgroundColor: white,
                    borderRadius: '4px',

                    '&:hover, &:active, &:focus, &:visited': {
                        color: '#D3302F',
                        backgroundColor: white,
                    },
                    '&:hover': {
                        backgroundColor: '#FAEAEB',
                    },
                },
            },
        },
    },
});

<ThemeProvider theme={theme}>
    <GroupHelper>
        <Button>I am custom</Button>
        <Button>Me too</Button>
    </GroupHelper>
</ThemeProvider>
```

Restyle buttons using CSS class names:

```js
import { shadow100 } from "../../";
import {white} from "../../tokens/colors";

<>
    <style 
        dangerouslySetInnerHTML={{
            __html: `
                .Button-global-demo .Button-Root {
                    box-shadow: ${shadow100};
                    text-transform: uppercase;
                    color: #D3302F;
                    border: 2px solid #D61F26;
                    background-color: ${white};
                    border-radius: 4px;
                }

                .Button-global-demo .Button-Root:hover,
                .Button-global-demo .Button-Root:active,
                .Button-global-demo .Button-Root:focus,
                .Button-global-demo .Button-Root:visited {
                    color: #D3302F;
                    background-color: ${white};
                }

                .Button-global-demo .Button-Root:hover {
                    background-color: #FAEAEB;
                };
            `
        }}
    />
    <div className="Button-global-demo">
        <Button>Hello</Button>
    </div>
</>
```

`Button` component supports atomic `margin` attributes. It accepts strings and numbers, if a number is passed, then `spacing` gets applied.

```js
<Button 
    marginTop={4}
    marginLeft={5}
    marginBottom="16px"
    marginRight={2}
>
    We all fly down here
</Button>
```


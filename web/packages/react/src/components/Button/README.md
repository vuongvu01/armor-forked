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

The `withStyles()` HOC allows to create locally-defined custom versions of components by passing down `styles` and `attributes` override.

```typescript jsx
import { css, withStyles } from "../../";

const CustomPrimaryButton = withStyles(
    {
        Root: ({ disabled }) => css`background: linear-gradient(to bottom, rgba(243,197,189,1) 0%,rgba(232,108,87,1) 21%,rgba(232,108,87,1) 21%,rgba(234,40,3,1) 46%,rgba(255,102,0,1) 75%,rgba(199,34,0,1) 100%);`,
    },
    { 
        Root: { primary: true }
    }
)(Button);

<CustomPrimaryButton>Hello</CustomPrimaryButton>
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

You can use CSS to override styles of elements based on global class names.

```js
<>
    <style dangerouslySetInnerHTML={{__html: `.Button-global-demo .Button-Root { border: 1px solid red; };`}} />
    <div className="Button-global-demo">
        <Button>Hello</Button>
    </div>
</>
```

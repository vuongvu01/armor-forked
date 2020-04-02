```js noeditor
import { ClassNames } from 'ClassNames';

<ClassNames data={[
    {
        name: 'Button-root',
        description: 'Root element',
    },
    {
        name: 'Button-root--disabled',
        description: 'Root element modifier when the button is disabled',
    },
    {
        name: 'Button-root--small',
        description: 'Root element modifier when the button is small',
    },
    {
        name: 'Button-root--wide',
        description: 'Root element modifier when the button is wide',
    },
    {
        name: 'Button-root--primary',
        description: 'Root element modifier when the button is rendered as primary',
    },
    {
        name: 'Button-root--secondary',
        description: 'Root element modifier when the button is rendered as secondary',
    },
    {
        name: 'Button-root--tertiary',
        description: 'Root element modifier when the button is rendered as tertiary',
    },
    {
        name: 'Button-root--ghost',
        description: 'Root element modifier when the button is rendered as ghost',
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
    <Button ghost>Ghost</Button>
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
    <Button disabled>Disabled</Button>
</GroupHelper>
```

#### Wide

```js
<Button wide>I occupy the entire parent width</Button>
```

#### Link

```js
import { GroupHelper } from 'GroupHelper';

<GroupHelper>
    <Button tag="a" href="https://google.com" target="_blank">
        Open Google
    </Button>
    <Button tag="a" href="https://facebook.com" target="_blank" ghost>
        Open Facebook
    </Button>
</GroupHelper>
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
    <Button ghost>
        Remove
        <MaterialIcon marginLeft={2}>remove</MaterialIcon>
    </Button>
    <Button primary>
        <MaterialIcon marginRight={2}>save</MaterialIcon>
        Save
    </Button>
    <Button primary>
        <MaterialIcon marginRight={2} fontSize={22}>save</MaterialIcon>
        Save
    </Button>
</GroupHelper>
```

### How to customise

The `withStyles()` HOC allows to create locally-defined custom versions of components by passing down `styles` and `attributes` override.

```typescript jsx
import { css, withStyles } from "../../";

const CustomTertiaryButton = withStyles(
    {
        root: ({ disabled }) => css`background: linear-gradient(to bottom, #f0f9ff 0%,#cbebff 47%,#a1dbff 100%);`,
    },
    { 
        root: { tertiary: true }
    }
)(Button);

<CustomTertiaryButton>Hello</CustomTertiaryButton>
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
    <style dangerouslySetInnerHTML={{__html: `.Button-global-demo .Button-root { border: 1px solid red; };`}} />
    <div className="Button-global-demo">
        <Button>Hello</Button>
    </div>
</>
```

### Node structure (bonus, will be updated soon)

The button component has a simple structure with only one `root` element.

```js noeditor
import { NodeStand } from 'NodeStand';

<NodeStand>
    {({ setNode, unSetNode, styles }) => <Button styles={styles} onMouseEnter={() => setNode('root')} onMouseLeave={() => unSetNode('root')}>Hello</Button>}
</NodeStand>
```

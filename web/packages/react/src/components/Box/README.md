```js noeditor
import { ClassNames } from 'ClassNames';

<ClassNames data={[
    {
        name: 'Box-Root',
        description: 'Root element',
    },
]}/>
```

`Box` component can be used to define margins / padding / size by specifying arguments. All attributes that contain plain numbers (without units) get automatically spanned. Breakpoint codes get converted into pixels values in the attributes where it makes sense.

### Use-cases

#### General use-case

```typescript jsx
<Box padding={5}>Hi there, I have padding</Box>
```

#### Margin, padding and text align

```typescript jsx
import { withStyles } from "../../";

const StyledBox = withStyles({
    Root: () => 'border: 1px solid black; border-radius: 5px;',
})(Box);

<StyledBox padding={5} marginY={5} textAlign="center">Hi there, I have margin and padding</StyledBox>
```

#### Width based on the breakpoint

```typescript jsx
import { withStyles } from "../../";

const StyledBox = withStyles({
    Root: () => 'border: 1px solid black; border-radius: 5px;',
})(Box);

<StyledBox width="sm" padding={2}>Hi there, I have limited width</StyledBox>
```

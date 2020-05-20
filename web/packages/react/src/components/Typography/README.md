```js noeditor
import { ClassNames } from 'ClassNames';

<ClassNames data={[
    {
        name: 'Typography-Root',
        description: 'Root element',
    },
]}/>
```

Here goes brief description of the `Typography` component.

### Use-cases

#### Generic use-case

```typescript jsx
import { useState } from 'react';
import {Button} from '../Button';

const [open, setOpen] = useState(false);

<>
    <Typography
        open={open}
    >
        Hello!
    </Typography>

    <Button onClick={() => setOpen(true)} secondary>Do something</Button>
</>
```

### How to customise

```typescript jsx
import { useState } from 'react';
import {Button} from '../Button';
import { css, withStyles } from "../../";

const [open, setOpen] = useState(false);

const CustomTypography = withStyles({
    Root: () => css` border: 1px solid red; `,
})(Typography);

<>
    <CustomTypography
        open={open}
    >
        I am custom!
    </CustomTypography>

    <Button onClick={() => setOpen(true)} secondary>Do something</Button>
</>
```

```js noeditor
import { ClassNames } from 'ClassNames';

<ClassNames data={[
    {
        name: 'Paper-Root',
        description: 'Root element',
    },
]}/>
```

The `Paper` component typically renders a white-background space with rounded corners and a shadow. It can have optional vertical scroll. This component, for instance, is used as a Root element for the `Dialog` component.

### Use-cases

#### Generic use-case

```js
import { Box } from '../Box';

<Paper>
    <Box padding={5}>
        Hello!
    </Box>
</Paper>
```

#### With scroll

```js
import { Box } from '../Box';
import {LoremIpsum} from "../../doc-helpers/LoremIpsum";
import {withStyles} from "../../styling/with-styles";

const NarrowPaper = withStyles({
    Root: () => 'max-height: 100px;',
})(Paper);

<NarrowPaper>
    <Box padding={5}>
        <LoremIpsum />
    </Box>
</NarrowPaper>
```

### How to customise

```js
import { css } from 'styled-components';
import { Box } from '../Box';
import {withStyles} from "../../styling/with-styles";

const InversedPaper = withStyles({
    Root: () => css`max-height: 100px; background-color: black; color: white;`,
})(Paper);

<InversedPaper>
    <Box padding={5}>
        Look at this from the other side.
    </Box>
</InversedPaper>
```

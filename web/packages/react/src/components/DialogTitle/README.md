```js noeditor
import { ClassNames } from 'ClassNames';

<ClassNames data={[
    {
        name: 'DialogTitle-Root',
        description: 'Root element',
    },
    {
        name: 'DialogTitle-Text',
        description: 'Text element where the title is displayed',
    },
    {
        name: 'DialogTitle-Description',
        description: 'An element that shows optional brief description',
    },
]}/>
```

The `DialogTitle` component renders a top part of the `Dialog` component and contains a dialog title with some optional description.

### Use-cases

`DialogTitle` component is meant to be used only together with the `Dialog` component. Please check out the documentation for `Dialog`.

```js noeditor
import { ClassNames } from 'ClassNames';

<ClassNames data={[
    {
        name: 'Dialog-Overlay',
        description: 'Overlay element',
    },
    {
        name: 'Dialog-Container',
        description: 'Container container',
    },
    {
        name: 'Dialog-Root',
        description: 'Root element',
    },
    {
        name: 'Dialog-CloseButton',
        description: 'Close button element',
    },
]}/>
```

The `Dialog` component allows to display modal-ish dialog windows.

### Use-cases

#### Generic use-case

```typescript jsx
import { useState } from 'react';
import {Button} from '../Button';
import {DialogTitle} from '../DialogTitle';
import {DialogActions} from '../DialogActions';

const [open, setOpen] = useState(false);
const onClose = () => setOpen(false);

<>
    <Dialog
        open={open}
        onClose={onClose}
    >
        <DialogTitle description="Your answer will define Galaxy's fate">
            Would you like to have an icecream?
        </DialogTitle>
        <DialogActions>
            <Button tertiary onClick={onClose}>
                No, I like pies
            </Button>
            <Button>Yes, of course</Button>
        </DialogActions>
    </Dialog>

    <Button onClick={() => setOpen(true)} secondary>Ask an important question</Button>
</>
```

#### Usage with content

```typescript jsx
import { useState } from 'react';
import {Button} from '../Button';
import {DialogTitle} from '../DialogTitle';
import {DialogContent} from '../DialogContent';
import {DialogActions} from '../DialogActions';

const [open, setOpen] = useState(false);
const onClose = () => setOpen(false);

<>
    <Dialog
        open={open}
        onClose={onClose}
    >
        <DialogTitle>
            What would you like to buy?
        </DialogTitle>
        <DialogContent>
            <label>
                <input type="checkbox" />
                House
            </label><br />
            <label>
                <input type="checkbox" />
                Yacht
            </label><br />
            <label>
                <input type="checkbox" />
                Plane
            </label>
        </DialogContent>
        <DialogActions>
            <Button>Confirm order</Button>
        </DialogActions>
    </Dialog>

    <Button onClick={() => setOpen(true)} secondary>Shopping list</Button>
</>
```

#### Disable overlay and close button

```typescript jsx
import { useState } from 'react';
import {Button} from '../Button';
import {DialogTitle} from '../DialogTitle';

const [open, setOpen] = useState(false);
const onClose = () => setOpen(false);

<>
    <Dialog
        open={open}
        onClose={onClose}
        disableOverlay
        disableCloseButton
    >
        <DialogTitle>
            You cant close me, humble yourself and refresh the page!
        </DialogTitle>
    </Dialog>

    <Button onClick={() => setOpen(true)} secondary>It's a trap</Button>
</>
```

#### Max width constraint

It is possible to control maximum width of the `Dialog` by utilizing `maxWidth` property. Currently, the following values are supported: `xs`, `sm`, `md`, `lg`, `xl`, and they actually come from `theme.breakpoints` (so if you have custom breakpoints then these values will also be different).

```typescript jsx
import { useState } from 'react';
import { GroupHelper } from 'GroupHelper';
import {Button} from '../Button';
import {DialogContent} from "../DialogContent";
import {DialogTitle} from "../DialogTitle";
import {LoremIpsum} from "../../doc-helpers/LoremIpsum";

const [open, setOpen] = useState(false);
const [maxWidth, setMaxWidth] = useState('xs');
const onClose = () => setOpen(false);

<>
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth={maxWidth}
    >
        <DialogTitle>
            I have different width<br /><br />
            <GroupHelper>
                <Button onClick={() => {
                    setMaxWidth('xs');
                }} disabled={maxWidth === 'xs'}>XS</Button>
                <Button onClick={() => {
                    setMaxWidth('sm');
                }} disabled={maxWidth === 'sm'}>SM</Button>
                <Button onClick={() => {
                    setMaxWidth('md');
                }} disabled={maxWidth === 'md'}>MD</Button>
                <Button onClick={() => {
                    setMaxWidth('lg');
                }} disabled={maxWidth === 'lg'}>LG</Button>
                <Button onClick={() => {
                    setMaxWidth('xl');
                }} disabled={maxWidth === 'xl'}>XL</Button>
            </GroupHelper>
        </DialogTitle>
        <DialogContent>
            <LoremIpsum />
            <LoremIpsum />
        </DialogContent>
    </Dialog>

    <Button onClick={() => {
        setOpen(true);
    }} secondary>I have different max width</Button>
</>
```

#### Wide dialog

It is also possible to expand width of the `Dialog` to 100% of the parent container (minus safe margins of course), or to `max-width`, if defined.

```typescript jsx
import { useState } from 'react';
import { GroupHelper } from 'GroupHelper';
import {Button} from '../Button';
import {DialogContent} from "../DialogContent";
import {DialogTitle} from "../DialogTitle";

const [open, setOpen] = useState(false);
const [maxWidth, setMaxWidth] = useState('sm');
const [wide, setWide] = useState(false);
const onClose = () => setOpen(false);

<>
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth={maxWidth}
        wide={wide}
    >
        <DialogTitle>
            I have different width<br /><br />
            <GroupHelper>
                <Button onClick={() => {
                    setMaxWidth('xs');
                }} disabled={maxWidth === 'xs'}>XS</Button>
                <Button onClick={() => {
                    setMaxWidth('sm');
                }} disabled={maxWidth === 'sm'}>SM</Button>
                <Button onClick={() => {
                    setMaxWidth('md');
                }} disabled={maxWidth === 'md'}>MD</Button>
                <Button onClick={() => {
                    setMaxWidth('lg');
                }} disabled={maxWidth === 'lg'}>LG</Button>
                <Button onClick={() => {
                    setMaxWidth('xl');
                }} disabled={maxWidth === 'xl'}>XL</Button>
            </GroupHelper>
            <br />
            <Button onClick={() => {
                setWide(!wide);
            }} secondary>Wide</Button>
        </DialogTitle>
        <DialogContent>
            A short content
        </DialogContent>
    </Dialog>

    <Button onClick={() => {
        setOpen(true);
    }} secondary>I have different width</Button>
</>
```

#### Scroll

`Dialog` supports two ways to scroll: content scroll and document scroll. By defult, the first one is used.

```typescript jsx
import { useState } from 'react';
import { GroupHelper } from 'GroupHelper';
import {Button} from '../Button';
import {DialogContent} from "../DialogContent";
import {DialogTitle} from "../DialogTitle";
import {LoremIpsum} from "../../doc-helpers/LoremIpsum";

const [open, setOpen] = useState(false);
const [scrollType, setScrollType] = useState('dialog');
const onClose = () => setOpen(false);

<>
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        scroll={scrollType}
    >
        <DialogTitle>
            I have different width
            <GroupHelper>
                <Button onClick={() => {
                    setScrollType('dialog');
                }} disabled={scrollType === 'dialog'}>Dialog</Button>
                <Button onClick={() => {
                    setScrollType('document');
                }} disabled={scrollType === 'document'}>Document</Button>
            </GroupHelper>
        </DialogTitle>
        <DialogContent>
            <LoremIpsum />
            <LoremIpsum />
        </DialogContent>
    </Dialog>

    <Button onClick={() => {
        setOpen(true);
    }} secondary>I have different scroll types</Button>
</>
```

#### Disable effects

It is possible to disable transition effect on show / hide, if this is required.

```typescript jsx
import { useState } from 'react';
import { GroupHelper } from 'GroupHelper';
import {Button} from '../Button';
import {DialogContent} from "../DialogContent";
import {DialogTitle} from "../DialogTitle";
import {LoremIpsum} from "../../doc-helpers/LoremIpsum";

const [open, setOpen] = useState(false);
const [scrollType, setScrollType] = useState('dialog');
const onClose = () => setOpen(false);

<>
    <Dialog
        open={open}
        onClose={onClose}
        disableEffects
    >
        <DialogTitle>
            I have no effects
        </DialogTitle>
        <DialogContent>
            1, 2, 3
        </DialogContent>
    </Dialog>

    <Button onClick={() => {
        setOpen(true);
    }} secondary>I have no effects</Button>
</>
```

### How to customise

It is possible to customise every component that is inside of the `Dialog`.

```typescript jsx
import { useState } from 'react';
import {Button} from '../Button';
import {DialogTitle} from '../DialogTitle';
import {DialogContent} from '../DialogContent';
import {DialogActions} from '../DialogActions';
import { css, withStyles } from "../../";
import { boke } from "../../doc-helpers/boke";

const [open, setOpen] = useState(false);
const onClose = () => setOpen(false);

const UltraExpressiveDialog = withStyles({
    Overlay: () =>
        css`
            background-color: darkblue;
        `,
    CloseButton: () =>
        css`
            color: white;
        `,
    Root: () => css`
        background: url(${boke});
    `,
})(Dialog);

const WhiteTitle = withStyles({
    Root: () =>
        css`
            color: white;
        `,
})(DialogTitle);

<>
    <UltraExpressiveDialog open={open} onClose={onClose}>
        <WhiteTitle description="Assign a new id to this location">
            Party time!!!
        </WhiteTitle>
        <DialogContent>🌈🌈🌈☀️☀️☀️🌧️🌧️🌧️</DialogContent>
        <DialogActions>
            <Button tertiary onClick={onClose}>Cancel</Button>
            <Button>Save</Button>
        </DialogActions>
    </UltraExpressiveDialog>

    <Button onClick={() => setOpen(true)}>Colorful life!</Button>
</>
```

```js noeditor
import { ClassNames } from 'ClassNames';

<ClassNames data={[
    {
        name: 'Message-Root',
        description: 'Root element',
    },
    {
        name: 'Message-Icon',
        description: 'Left icon element',
    },
    {
        name: 'Message-Central',
        description: 'Central element',
    },
    {
        name: 'Message-CloseButton',
        description: 'Close button element',
    },
    {
        name: 'Message-Content',
        description: 'Content element',
    },
    {
        name: 'Message-Actions',
        description: 'Actions element',
    },
    {
        name: 'Message-Extra',
        description: 'Extra element',
    },
]}/>
```

Here goes brief description of the `Message` component.

### Use-cases

#### Generic use-case

```typescript jsx
<Message>You have 99 new cookies!</Message>
```

#### With different levels of importance

```typescript jsx
import { GroupHelper } from 'GroupHelper';

<GroupHelper>
    <Message error>System failure. You ran out of cake.</Message>
    <Message warning>Your payment is due.</Message>
    <Message info>Your spacetrain arrives at 14:00.</Message>
    <Message success>You have just received 500&euro;.</Message>
</GroupHelper>
```

#### With a title

```typescript jsx
import { Typography } from '../Typography';

<Message 
    info
>
    <Typography h6 marginBottom={1}>
        Important information
    </Typography>
    The sun is orange
</Message>
```

#### Without a close icon

```typescript jsx
<Message 
    success
    disableCloseButton
>
    You can not beat me!
</Message>
```

#### Without a left icon

```typescript jsx
<Message 
    success
    disableIcon
>
    You can not beat me!
</Message>
```

#### With action button on the right

```typescript jsx
import { MessageAction } from '../MessageAction';

<Message 
    error
    disableCloseButton
    actions={
        <MessageAction
            useMessageColor
        >
            Buy more cake
        </MessageAction>
    }
>
    System failure. You ran out of cake.
</Message>
```

#### With action button at the bottom

```typescript jsx
import { MessageAction } from '../MessageAction';
import { Box } from '../Box';

<Message 
    error
    disableCloseButton
>
    System failure. You ran out of cake.
    <Box marginTop={2}>
        <MessageAction marginRight={4}>
            Take action NOW
        </MessageAction>
        <MessageAction>
            Pass
        </MessageAction>
    </Box>
</Message>
```

#### With extra data on the right

```typescript jsx
import { Rick } from 'Rick';

<Message 
    warning
    disableCloseButton
    extra={<Rick />}
>
    Cmon, Morty, the Gazorpazorp has escaped again!!!111!
   
</Message>
```

#### With long content

```typescript jsx
import { LoremIpsum } from 'LoremIpsum';
import { Typography } from '../Typography';
import { MessageAction } from '../MessageAction';

<Message
    disableCloseButton
    actions={
        <MessageAction
            useMessageColor
        >
            Buy more cake
        </MessageAction>
    }
>
    <Typography h6 marginBottom={1}>
        Important information
    </Typography>
    <LoremIpsum short />
</Message>
```

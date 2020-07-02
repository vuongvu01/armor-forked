/* eslint-disable no-console */

import React, { useState } from 'react';
import {
    withKnobs,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
import styled from 'styled-components';

import {
    Button,
    Box,
    FormFieldMessage,
    FormField,
    FormFieldTooltip,
} from '../..';
import { loremIpsum } from '../../../helpers/LoremIpsum';
import { TextInput } from '../TextInput';

export default {
    title: 'Components/TextInput',
    component: TextInput,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => (
    <>
        <TextInput
            label="Name your price"
            placeholder="Name your price"
            name="your_price"
            marginTop={10}
            displayMode="block"
        />
        <TextInput
            defaultValue="10 USD"
            label="Name your price"
            placeholder="...and type it here..."
            name="your_price"
            disableLabelEffect
            marginTop={10}
            displayMode="block"
        />
    </>
);

export const LabelAnimation = () => (
    <>
        Label = yes, placeholder = no, disableLabelEffect = no
        <TextInput
            label="Name your price"
            name="your_price"
            marginTop={5}
            displayMode="block"
        />
        <TextInput
            defaultValue="10 USD"
            label="Name your price"
            name="your_price"
            marginTop={10}
            marginBottom={10}
            displayMode="block"
        />
        Label = yes, placeholder = yes, disableLabelEffect = no
        <TextInput
            label="Name your price"
            placeholder="This is a placeholder"
            name="your_price"
            marginTop={5}
            displayMode="block"
        />
        <TextInput
            defaultValue="10 USD"
            label="Name your price"
            placeholder="This is a placeholder"
            name="your_price"
            marginTop={10}
            marginBottom={10}
            displayMode="block"
        />
        Label = yes, placeholder = no, disableLabelEffect = yes
        <TextInput
            label="Name your price"
            disableLabelEffect
            name="your_price"
            marginTop={5}
            displayMode="block"
        />
        <TextInput
            defaultValue="10 USD"
            label="Name your price"
            disableLabelEffect
            name="your_price"
            marginTop={10}
            marginBottom={10}
            displayMode="block"
        />
        Label = no, placeholder = yes, disableLabelEffect = no
        <TextInput
            placeholder="This is a placeholder"
            name="your_price"
            marginTop={5}
            displayMode="block"
        />
        <TextInput
            placeholder="This is a placeholder"
            defaultValue="10 USD"
            name="your_price"
            marginTop={10}
            marginBottom={10}
            displayMode="block"
        />
    </>
);

export const LabelOverflow = () => (
    <>
        <Box width="100px">
            <TextInput
                defaultValue="10 USD"
                label="Name your price"
                placeholder="...and type it here..."
                name="your_price"
                marginTop={5}
            />
        </Box>
        <Box width="100px">
            <TextInput
                label="Name your price"
                placeholder="...and type it here..."
                name="your_price"
                marginTop={5}
            />
        </Box>
        <Box width="100px">
            <TextInput
                label="Name your price"
                name="your_price"
                marginTop={5}
            />
        </Box>
    </>
);

export const NoLabel = () => (
    <Box>
        <TextInput placeholder="Type it here" name="your_price" />
    </Box>
);
export const Inline = () => (
    <>
        <Box>
            <TextInput
                placeholder="First name"
                name="first_name"
                marginRight={2}
            />
            <TextInput placeholder="Last name" name="last_name" />
        </Box>
        <Box marginTop={5}>
            <TextInput label="First name" name="first_name" marginRight={2} />
            <TextInput label="Last name" name="last_name" />
        </Box>
        <Box marginTop={5}>
            Quick brown{' '}
            <TextInput label="Moving animal name" defaultValue="Fox" /> jumped
            over a lazy{' '}
            <TextInput label="Sleeping animal name" defaultValue="Dog" />!
        </Box>
    </>
);

const Brick = styled.div`
    border: 1px solid gray;
    padding: 3px 7px;
    border-radius: 3px;
    margin-left: 3px;

    &:last-child {
        margin-right: 3px;
    }
`;

export const BeforeAndAfter = () => (
    <Box>
        <TextInput
            placeholder="Type it here"
            name="your_price"
            before={
                <>
                    <Brick>one</Brick>
                    <Brick>two</Brick>
                    <Brick>three</Brick>
                </>
            }
            after={
                <>
                    <Brick>four</Brick>
                    <Brick>five</Brick>
                    <Brick>six</Brick>
                </>
            }
        />
    </Box>
);

export const Multiline = () => (
    <Box>
        <TextInput
            multiline
            placeholder="Type it here"
            name="your_price"
            marginRight={2}
        />
        <TextInput multiline label="Type it here" name="your_price" />
    </Box>
);

export const Disabled = () => (
    <Box>
        <TextInput
            disabled
            multiline
            label="Type it here"
            name="your_price"
            marginRight={2}
        />
        <TextInput disabled label="Type it here" name="your_price" />
        <TextInput
            disabled
            placeholder="Type it here"
            name="your_price"
            marginLeft={2}
        />
        <TextInput
            disabled
            label="Type it here"
            defaultValue="And get your prize!"
            name="your_price"
            marginLeft={2}
        />
        <Button marginLeft={2}>Submit</Button>
    </Box>
);

export const NextToButton = () => (
    <Box>
        <TextInput label="Type it here" name="your_price" />
        <TextInput
            defaultValue="Hey check this out"
            name="your_price"
            marginLeft={2}
        />
        <Button marginLeft={2} secondary>
            Submit
        </Button>
        <Button marginLeft={2}>Submit</Button>
    </Box>
);

export const States = () => {
    const [errored, setErrored] = useState(false);
    const [disabled, setDisabled] = useState(false);

    return (
        <Box>
            <TextInput
                defaultValue="Hey check this out"
                label="This is label speaking"
                name="your_price"
                marginLeft={2}
                error={errored}
                disabled={disabled}
            />
            <Button marginLeft={2} onClick={() => setErrored(!errored)}>
                Errored
            </Button>
            <Button marginLeft={2} onClick={() => setDisabled(!disabled)}>
                Disabled
            </Button>
        </Box>
    );
};

export const Large = () => (
    <Box marginTop={5}>
        <TextInput label="This is big one" name="your_price" large />
        <TextInput
            label="This one is normal"
            name="your_price"
            marginLeft={2}
        />
    </Box>
);

export const AsFormField = () => {
    const [errored, setErrored] = useState(false);

    return (
        <Box width="50%">
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={e => e.preventDefault()}>
                <FormField autoMargin>
                    <TextInput label="First name" name="first_name" wide />
                    <FormFieldMessage>{loremIpsum}</FormFieldMessage>
                </FormField>
                <FormField autoMargin>
                    <TextInput
                        label="Last name"
                        name="last_name"
                        error={errored}
                        wide
                    />
                    <FormFieldMessage error oneLine>
                        {errored ? loremIpsum : null}
                    </FormFieldMessage>
                    <FormFieldTooltip visible={errored}>
                        Not the droids you are looking for
                    </FormFieldTooltip>
                </FormField>
                <Button onClick={() => setErrored(true)} type="submit">
                    Submit
                </Button>
                <Button
                    secondary
                    onClick={() => setErrored(false)}
                    marginLeft={2}
                >
                    Cancel
                </Button>
            </form>
        </Box>
    );
};

export const EventHandlers = () => (
    <Box marginTop={5}>
        <TextInput
            label="This is big one"
            name="your_price"
            large
            onFocus={() => console.log('Focus')}
            onBlur={() => console.log('Blur')}
            onMouseOver={() => console.log('onMouseOver')}
            onMouseOut={() => console.log('onMouseOut')}
        />
    </Box>
);

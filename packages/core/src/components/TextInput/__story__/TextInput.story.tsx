/* eslint-disable no-console */

import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import { spacing } from '@deliveryhero/armor-system';
import { LockClosedIcon, LockOpenIcon } from '@deliveryhero/armor-icons';

import {
    Button,
    Box,
    FormFieldMessage,
    FormField,
    FormFieldTooltip,
    Tag,
    Pack,
    PackItem,
    IconButton,
} from '../..';
import { loremIpsum } from '../../../helpers/LoremIpsum';
import { TextInput } from '../TextInput';
import { GroupHelper } from '../../../helpers/GroupHelper';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/TextInput',
    component: TextInput,
    decorators: [withWrapper],
    parameters: {},
};

export const AllStates = () => (
    <Box marginTop={5}>
        <Box marginBottom={2}>
            <TextInput
                label="Phone *"
                name="your_price"
                marginRight={1}
                data-testid-input="input42"
            />
            <TextInput
                label="Address *"
                placeholder="Please specify"
                name="your_price"
                marginRight={1}
            />
            <TextInput
                placeholder="Label"
                name="your_price"
                defaultValue="1000"
                marginRight={1}
            />
            <TextInput placeholder="Label" name="your_price" marginRight={1} />

            <Button marginRight={1}>Submit</Button>

            <TextInput label="Label" name="your_price" large marginRight={1} />
            <TextInput
                label="Label"
                name="your_price"
                defaultValue="1000"
                large
                marginRight={1}
            />
        </Box>
        <Box marginBottom={2}>
            <TextInput
                label="Label"
                name="your_price"
                marginRight={1}
                disabled
            />
            <TextInput
                label="Label"
                name="your_price"
                defaultValue="1000"
                marginRight={1}
                disabled
            />
            <TextInput
                placeholder="Label"
                name="your_price"
                defaultValue="1000"
                marginRight={1}
                disabled
            />
            <TextInput
                placeholder="Label"
                name="your_price"
                marginRight={1}
                disabled
            />

            <Button marginRight={1} disabled>
                Submit
            </Button>

            <TextInput
                label="Label"
                name="your_price"
                large
                marginRight={1}
                disabled
            />
            <TextInput
                label="Label"
                name="your_price"
                defaultValue="1000"
                large
                marginRight={1}
                disabled
            />
        </Box>
        <Box marginBottom={2}>
            <TextInput label="Label" name="your_price" marginRight={1} error />
            <TextInput
                label="Phone *"
                placeholder="Mobile"
                marginRight={1}
                error
            />
            <TextInput
                placeholder="Label"
                name="your_price"
                defaultValue="1000"
                marginRight={1}
                error
            />
            <TextInput
                placeholder="Label"
                name="your_price"
                marginRight={1}
                error
            />

            <Button marginRight={1}>Submit</Button>

            <TextInput
                label="Label"
                name="your_price"
                large
                marginRight={1}
                error
            />
            <TextInput
                label="Label"
                name="your_price"
                defaultValue="1000"
                large
                marginRight={1}
                error
            />
        </Box>
        <Box marginBottom={2}>
            <TextInput
                label="Label"
                name="your_price"
                marginRight={1}
                outlined
            />
            <TextInput
                label="Label"
                name="your_price"
                defaultValue="1000"
                marginRight={1}
                outlined
            />
            <TextInput
                placeholder="Label"
                name="your_price"
                defaultValue="1000"
                marginRight={1}
                outlined
            />
            <TextInput
                placeholder="Label"
                name="your_price"
                marginRight={1}
                outlined
            />

            <Button marginRight={1}>Submit</Button>

            <TextInput
                label="Label"
                name="your_price"
                large
                marginRight={1}
                outlined
            />
            <TextInput
                label="Label"
                name="your_price"
                defaultValue="1000"
                large
                marginRight={1}
                outlined
            />
        </Box>
        <Box marginBottom={2}>
            <TextInput
                label="Label"
                name="your_price"
                marginRight={1}
                multiline
            />
            <TextInput
                label="Label"
                name="your_price"
                defaultValue="1000"
                marginRight={1}
                multiline
            />

            <Button marginRight={1}>Submit</Button>

            <TextInput
                label="Label"
                name="your_price"
                large
                marginRight={1}
                multiline
            />
            <TextInput
                label="Label"
                name="your_price"
                defaultValue="1000"
                large
                marginRight={1}
                multiline
            />
        </Box>
    </Box>
);

export const Basic = () => {
    const textInputRef = useRef(null);

    return (
        <GroupHelper gap={2}>
            <Box
                padding={3}
                style={{
                    height: '500px',
                    width: '600px',
                }}
            >
                <TextInput
                    label="Name your price"
                    placeholder="Name your price"
                    name="your_price"
                    marginTop={10}
                    displayMode="block"
                    ref={textInputRef}
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
            </Box>
        </GroupHelper>
    );
};

// export const NoLabel = () => {
//     const textInputRef = useRef(null);
//
//     return (
//         <GroupHelper gap={2}>
//             <Box
//                 padding={3}
//                 style={{
//                     backgroundColor: '#F4F4F8',
//                     height: '500px',
//                     width: '600px',
//                 }}
//             >
//                 <TextInput />
//             </Box>
//         </GroupHelper>
//     );
// };

export const ExternalControl = () => {
    const textInputRef = useRef(null);
    const [value, setValue] = useState('');

    return (
        <Box
            style={{
                width: '250px',
            }}
        >
            <TextInput
                label="Set value"
                name="first_name"
                onChange={() => console.log({ textInputRef })}
                ref={textInputRef}
                value={value}
                wide
            />
            <br />
            <br />
            <Button onClick={() => setValue(Math.random().toString())}>
                Randomize timer
            </Button>
        </Box>
    );
};

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
        <TextInput />
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

export const PasswordWithOptionalVisibility = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleInputVisibility = () => setIsVisible(!isVisible);

    return (
        <TextInput
            label="Password"
            type={isVisible ? 'text' : 'password'}
            after={
                <IconButton marginRight={2} onClick={handleInputVisibility}>
                    {isVisible ? (
                        <LockOpenIcon medium onClick={handleInputVisibility} />
                    ) : (
                        <LockClosedIcon
                            medium
                            onClick={handleInputVisibility}
                        />
                    )}
                </IconButton>
            }
        />
    );
};

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

const AraraTagTextInput = styled(TextInput)`
    padding-right: ${spacing(2)};

    .TextInput-InnerContainer {
        flex-wrap: wrap;
        align-items: baseline;
    }

    .TextInput-Input {
        padding-right: ${spacing(1)};
        max-width: ${spacing(50)};
    }
`;

const AraraTag = styled(Tag)`
    margin-bottom: ${spacing(2)};
    margin-left: ${spacing(2)};
`;

export const AraraTagInput = () => {
    return (
        <AraraTagTextInput
            minHeight={30}
            enableFocusOnRootClick
            after={
                <>
                    <AraraTag>mail@email.ru</AraraTag>
                    <AraraTag>support@google.com</AraraTag>
                </>
            }
        />
    );
};

export const DynamicValue = () => {
    const [value, setValue] = useState('Hello');

    return (
        <Pack>
            <PackItem>
                <Box>
                    <TextInput
                        label="Name your price"
                        name="your_price"
                        marginRight={5}
                        value={value}
                    />
                </Box>
                <Box marginTop={2}>
                    <TextInput label="Filled" defaultValue="Filled" />
                </Box>
                <Box marginTop={2}>
                    <TextInput label="Empty" />
                </Box>
                <Box marginTop={2}>
                    <TextInput
                        label="With placeholder"
                        placeholder="With placeholder"
                    />
                </Box>
            </PackItem>
            <PackItem>
                <Box>
                    <TextInput
                        label="Name your price"
                        name="your_price"
                        marginRight={5}
                        value={value}
                        readOnly
                    />
                </Box>
                <Box marginTop={2}>
                    <TextInput label="Filled" defaultValue="Filled" readOnly />
                </Box>
                <Box marginTop={2}>
                    <TextInput label="Empty" readOnly />
                </Box>
                <Box marginTop={2}>
                    <TextInput
                        label="With placeholder"
                        placeholder="With placeholder"
                        readOnly
                    />
                </Box>
            </PackItem>
            <PackItem>
                <Box>
                    <TextInput
                        label="Name your price"
                        name="your_price"
                        marginRight={5}
                        value={value}
                        disabled
                    />
                    <Button
                        onClick={() => {
                            if (value === '') {
                                setValue('Hello');
                            } else {
                                setValue('');
                            }
                        }}
                    >
                        Update value
                    </Button>
                </Box>
                <Box marginTop={2}>
                    <TextInput label="Filled" defaultValue="Filled" disabled />
                </Box>
                <Box marginTop={2}>
                    <TextInput label="Empty" disabled />
                </Box>
                <Box marginTop={2}>
                    <TextInput
                        label="With placeholder"
                        placeholder="With placeholder"
                        disabled
                    />
                </Box>
            </PackItem>
        </Pack>
    );
};

export const Label = () => {
    return <TextInput label="Label" />;
};

const ShortTextInput = styled(TextInput)`
    width: 40px;
`;

export const Short = () => {
    return <ShortTextInput />;
};

export const NumericControlled = () => {
    const [value, setValue] = useState<number | undefined>(1);
    return (
        <>
            <TextInput
                type="number"
                label="Label"
                value={value}
                onChange={e => {
                    setValue(parseInt(e.target.value, 10));
                    e.stopPropagation();
                }}
            />
            <TextInput
                label="Label"
                marginRight={1}
                type="number"
                defaultValue={0}
                min={0}
            />
            <TextInput label="Label" marginRight={1} type="number" min={0} />
            <TextInput
                placeholder="Placeholder"
                marginRight={1}
                type="number"
                min={0}
            />
        </>
    );
};

export const TypeTime = () => {
    return (
        <>
            <TextInput type="time" required />
        </>
    );
};

export const Uncontrolled = () => {
    return <TextInput label="foo" defaultValue="Hz" />;
};

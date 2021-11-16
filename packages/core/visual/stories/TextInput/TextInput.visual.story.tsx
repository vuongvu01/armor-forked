import React, { useState } from 'react';

import { TextInput } from '../../../src/components/TextInput';

export default {
    title: 'TextInput',
    component: TextInput,
};

export const AllStates = () => (
    <>
        <div>
            <TextInput label="Label" name="your_price" marginRight={1} />
            <TextInput
                label="Label"
                name="your_price"
                defaultValue="1000"
                marginRight={1}
            />
            <TextInput
                placeholder="Label"
                name="your_price"
                defaultValue="1000"
                marginRight={1}
            />
            <TextInput placeholder="Label" name="your_price" marginRight={1} />
            <TextInput label="Label" name="your_price" large marginRight={1} />
            <TextInput
                label="Label"
                name="your_price"
                defaultValue="1000"
                large
                marginRight={1}
            />
        </div>
        <br />
        <div>
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
        </div>
        <br />
        <div>
            <TextInput label="Label" name="your_price" marginRight={1} error />
            <TextInput
                label="Label"
                name="your_price"
                defaultValue="1000"
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
        </div>
        <br />
        <div>
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
        </div>
        <br />
        <div>
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
        </div>
    </>
);

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

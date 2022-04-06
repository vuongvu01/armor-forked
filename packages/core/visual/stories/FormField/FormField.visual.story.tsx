import React from 'react';

import {
    FormField,
    FormFieldMessage,
    FormFieldTooltip,
    TextInput,
} from '../../../src';

export default {
    title: 'FormField',
    component: FormField,
};

export const Basic = () => {
    return (
        <FormField>
            <TextInput label="Last name" name="last_name" error wide />
            <FormFieldMessage error oneLine>
                Something is not right
            </FormFieldMessage>
            <FormFieldTooltip visible>
                Not the droids you are looking for
            </FormFieldTooltip>
        </FormField>
    );
};

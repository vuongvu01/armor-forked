import React from 'react';

import { FormField, FormFieldMessage, TextInput } from '../../../src';

export default {
    title: 'FormField',
    component: FormField,
};

export const Basic = () => {
    return (
        <FormField>
            <TextInput label="Last name" name="last_name" wide />
            <FormFieldMessage>Normal message</FormFieldMessage>
        </FormField>
    );
};

export const WithErrorMessage = () => {
    return (
        <FormField>
            <TextInput label="Last name" name="last_name" error wide />
            <FormFieldMessage error>Something is not right</FormFieldMessage>
        </FormField>
    );
};

export const OneLineMessage = () => {
    return (
        <FormField>
            <TextInput label="Last name" name="last_name" wide />
            <FormFieldMessage oneLine>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
            </FormFieldMessage>
        </FormField>
    );
};

export const WithLongMessage = () => {
    return (
        <FormField>
            <TextInput label="Last name" name="last_name" wide />
            <FormFieldMessage>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
            </FormFieldMessage>
        </FormField>
    );
};

/* eslint-disable @typescript-eslint/no-non-null-assertion, import/no-extraneous-dependencies */

import React from 'react';
import { cleanup, render, wait, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { TextInput } from '../..';
import { ObjectLiteralType } from '../../../type';

const renderTextInput = (props?: ObjectLiteralType) => {
    const { container } = render(<TextInput label="foo" {...props} />);

    return {
        container,
        getInput: () =>
            container.querySelector('input[type="text"]')! as HTMLInputElement,
        getLabel: () =>
            container.querySelector('.TextInput-Label')! as HTMLElement,
    };
};

const INSIDE = true;
const OUTSIDE = false;

const expectInputLabelToBe = async (
    labelPosition: boolean,
    props?: ObjectLiteralType,
) => {
    const { getLabel } = renderTextInput(props);
    const isLabelInside = getLabel().classList.contains(
        'TextInput-Label--inside',
    );

    expect(isLabelInside).toEqual(labelPosition);
};

const expectInputLabelToChangeOnAction = async (
    insideBefore: boolean,
    insideAfter: boolean,
    act: (input: HTMLInputElement) => Promise<void>,
    props?: ObjectLiteralType,
    defaultInputObject?: ObjectLiteralType,
) => {
    const { getInput, getLabel } = defaultInputObject || renderTextInput(props);
    const isLabelInsideBefore = getLabel().classList.contains(
        'TextInput-Label--inside',
    );

    await act(getInput());

    const isLabelInsideAfter = getLabel().classList.contains(
        'TextInput-Label--inside',
    );

    expect(isLabelInsideBefore).toEqual(insideBefore);
    await wait(() => expect(isLabelInsideAfter).toEqual(insideAfter), {
        timeout: 1000,
    });

    return { getLabel, getInput };
};

const expectInputLabelToChangeOnProps = async (
    insideBefore: boolean,
    insideAfter: boolean,
    propsBefore?: ObjectLiteralType,
    propsAfter?: ObjectLiteralType,
) => {
    const { getLabel: getLabelBefore } = renderTextInput(propsBefore);
    const isLabelInsideBefore = getLabelBefore().classList.contains(
        'TextInput-Label--inside',
    );

    const { getLabel: getLabelAfter } = renderTextInput(propsAfter);
    const isLabelInsideAfter = getLabelAfter().classList.contains(
        'TextInput-Label--inside',
    );

    expect(isLabelInsideBefore).toEqual(insideBefore);
    expect(isLabelInsideAfter).toEqual(insideAfter);
};

describe('<TextInput />: label', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    describe('Initial state', () => {
        it('should be Inside when the value is empty [controlled]', async () => {
            await expectInputLabelToBe(INSIDE, { value: '' });
        });

        it('should be Outside when the value is not empty [controlled]', async () => {
            await expectInputLabelToBe(OUTSIDE, { value: 'Foo' });
        });

        it('should be Inside when the value is undefined [uncontrolled]', async () => {
            await expectInputLabelToBe(INSIDE);
        });

        it('should be Inside when the value is empty [uncontrolled]', async () => {
            await expectInputLabelToBe(INSIDE);
        });

        it('should be Outside when the defaultValue is not empty [uncontrolled]', async () => {
            await expectInputLabelToBe(OUTSIDE, { defaultValue: 'Foo' });
        });
    });

    describe('Transition state', () => {
        it('should move Inside -> Outside on focus, and back on blur', async () => {
            const defaultInputObject = await expectInputLabelToChangeOnAction(
                INSIDE,
                OUTSIDE,
                async (input) => {
                    fireEvent.focus(input);
                },
                { value: '' },
            );

            await expectInputLabelToChangeOnAction(
                OUTSIDE,
                INSIDE,
                async (input) => {
                    fireEvent.blur(input);
                },
                { value: '' },
                defaultInputObject,
            );
        });

        it('should move Inside -> Outside on text input [uncontrolled]', async () => {
            await expectInputLabelToChangeOnAction(
                INSIDE,
                OUTSIDE,
                async (input) => {
                    userEvent.type(input, 'Hello, World!');
                },
            );
        });

        it('should move Outside -> Inside on text deletion [uncontrolled]', async () => {
            await expectInputLabelToChangeOnAction(
                OUTSIDE,
                INSIDE,
                async (input) => {
                    userEvent.clear(input);
                    fireEvent.blur(input);
                },
                { defaultValue: 'Foo' },
            );
        });

        it('should not move label when disableLabelEffect is true', async () => {
            await expectInputLabelToChangeOnAction(
                OUTSIDE,
                OUTSIDE,
                async (input) => {
                    fireEvent.focus(input);
                },
                { disableLabelEffect: true, value: '' },
            );
        });

        it('should move Inside -> Outside on text input [controlled]', async () => {
            await expectInputLabelToChangeOnProps(
                INSIDE,
                OUTSIDE,
                {},
                { value: 'Foo' },
            );
        });

        it('should move Outside -> Inside on text input [controlled]', async () => {
            await expectInputLabelToChangeOnProps(
                OUTSIDE,
                INSIDE,
                { value: 'Foo' },
                {},
            );
        });
    });
});

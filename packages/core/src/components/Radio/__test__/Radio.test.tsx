/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Radio } from '../Radio';
import { RadioGroup } from '../RadioGroup';
import { RadioPropsType } from '../type';

const label = 'Sample';

const typographyTypes = {
    paragraphMedium: { paragraph: true, medium: true },
    sectionTitle: { sectionTitle: true },
};

const baseRadioExample = (props: RadioPropsType) => (
    <RadioGroup name="name0" {...props}>
        <Radio value="0">{label}</Radio>
        <Radio value="1">Pasta</Radio>
    </RadioGroup>
);

const radioWithCustomTypographyType = (type: object | undefined) => (
    <RadioGroup name="name0" typographyProps={type}>
        <Radio value="0">{label}</Radio>
        <Radio value="1">Pasta</Radio>
    </RadioGroup>
);

const radioWithDisabledItem = (props: RadioPropsType) => (
    <RadioGroup name="name0" {...props}>
        <Radio value="0" disabled>
            {label}
        </Radio>
        <Radio value="1">Pasta</Radio>
    </RadioGroup>
);

describe('<Radio />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(baseRadioExample({}));
    });

    it('ensures the correct default label typography', () => {
        const { container } = render(baseRadioExample({}));

        const radioItemLabel = container.querySelector('.Radio-Label');
        expect(radioItemLabel).toBeInstanceOf(HTMLLabelElement);
    });

    it('ensures paragraph typography can be applied to label', () => {
        render(radioWithCustomTypographyType(typographyTypes.paragraphMedium));

        const radioItemLabel = screen.getByText(label);
        expect(radioItemLabel).toBeInstanceOf(HTMLDivElement);
        expect(radioItemLabel).toHaveClass(
            'Typography-Root Typography-Root--paragraph Typography-Root--medium',
        );
    });

    it('ensures section typography can be applied to label', () => {
        render(radioWithCustomTypographyType(typographyTypes.sectionTitle));

        const radioItemLabel = screen.getByText(label);
        expect(radioItemLabel).toBeInstanceOf(HTMLDivElement);
        expect(radioItemLabel).toHaveClass(
            'Typography-Root Typography-Root--sectionTitle',
        );
    });

    it('ensures respective BEM structure for checked state is', () => {
        const result = render(baseRadioExample({ checked: true }));

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Radio', {
            Root: ['checked'],
        });
    });

    it('ensures margin* property transference', () => {
        const marginAttribute = 'marginBottom';
        const marginValue = 42;

        const result = renderer
            .create(baseRadioExample({ [marginAttribute]: marginValue }))
            .toJSON();

        // @ts-ignore
        expect(result[0]).toSupportMarginAttribute(
            marginAttribute,
            marginValue,
        );
        // @ts-ignore
        expect(result[1]).toSupportMarginAttribute(
            marginAttribute,
            marginValue,
        );
    });

    it('ensures each children will accept disabled attribute', () => {
        const result = render(radioWithDisabledItem({}));

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Radio', {
            Root: ['disabled'],
        });
    });

    it('Should not call onchange callback upon clicking disabled button', () => {
        const fn = jest.fn();
        render(radioWithDisabledItem({ onChange: fn }));
        const radioItemLabel = screen.getByText(label);

        userEvent.click(radioItemLabel);

        // @ts-ignore
        expect(fn).not.toHaveBeenCalled();
    });

    it('Should not select disabled button', () => {
        const fn = jest.fn();
        const { container } = render(radioWithDisabledItem({ onChange: fn }));
        const radioItemLabel = screen.getByText(label);
        userEvent.click(radioItemLabel);
        const radioItemChecked = container.querySelector(
            '.Radio-Root--checked',
        );

        // @ts-ignore
        expect(radioItemChecked).not.toBeInTheDocument();
    });
});

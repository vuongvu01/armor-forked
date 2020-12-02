/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

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
        <Radio label={label} value="0" />
        <Radio label="Pasta" value="1" />
    </RadioGroup>
);

const radioWithCustomTypographyType = (type: object | undefined) => (
    <RadioGroup name="name0" typographyProps={type}>
        <Radio label={label} value="0" />
        <Radio label="Pasta" value="1" />
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
        render(baseRadioExample({}));

        const radioItemLabel = screen.getByText(label);
        expect(radioItemLabel).toBeInstanceOf(HTMLDivElement);
        expect(radioItemLabel).toHaveClass('Radio-Label');
    });

    it('ensures paragraph typography can be applied to label', () => {
        render(radioWithCustomTypographyType(typographyTypes.paragraphMedium));

        const radioItemLabel = screen.getByText(label);
        expect(radioItemLabel).toBeInstanceOf(HTMLParagraphElement);
        expect(radioItemLabel).toHaveClass(
            'Typography-Root Typography-Root--paragraph Typography-Root--medium',
        );
    });

    it('ensures section typography can be applied to label', () => {
        render(radioWithCustomTypographyType(typographyTypes.sectionTitle));

        const radioItemLabel = screen.getByText(label);
        expect(radioItemLabel).toBeInstanceOf(HTMLHeadingElement);
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
});

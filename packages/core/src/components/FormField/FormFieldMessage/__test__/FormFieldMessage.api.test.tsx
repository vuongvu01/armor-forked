/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { makeTheme } from '@deliveryhero/armor-system';

import { FormFieldMessage } from '../../../index';

const theme = makeTheme();

describe('<FormFieldMessage />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should support oneLine property', async () => {
        const element = <FormFieldMessage oneLine>Content</FormFieldMessage>;
        const tree = renderer.create(element).toJSON();
        expect(tree).toHaveStyleRule('white-space', 'nowrap');
    });

    it('should support error property', async () => {
        const element = <FormFieldMessage error>Content</FormFieldMessage>;
        const tree = renderer.create(element).toJSON();
        expect(tree).toHaveStyleRule('color', theme.armor.color.error.main);
    });
});

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { FormField } from '../..';

describe('<FormField />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should support enableVerticalOuterSpacing property', async () => {
        const element = (
            <FormField enableVerticalOuterSpacing>Content</FormField>
        );
        const tree = renderer.create(element).toJSON();
        expect(tree).toHaveStyleRule('margin-bottom', '8px', {
            modifier: '&:not(:last-child)',
        });
    });
});

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { FormFieldTooltip } from '../../../index';

describe('<FormFieldTooltip />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should support error property', async () => {
        const element = (
            <FormFieldTooltip visible={false}>Content</FormFieldTooltip>
        );
        const tree = renderer.create(element).toJSON();
        expect(tree).toHaveStyleRule('pointer-events', 'none');
    });
});

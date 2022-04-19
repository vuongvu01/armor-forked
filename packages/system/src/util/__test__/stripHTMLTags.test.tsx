/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup } from '@testing-library/react';

import { stripHTMLTags } from '../stripHTMLTags';

describe('stripHTMLTags', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should return correct string from ReactText labels', async () => {
        expect(stripHTMLTags('string_label')).toEqual('string_label');
        expect(stripHTMLTags(123)).toEqual('123');
    });

    it('should return correct string from ReactElement labels', async () => {
        expect(stripHTMLTags(<span>string_label</span>)).toEqual(
            'string_label',
        );
        expect(
            stripHTMLTags(
                <div style={{ border: '1px solid red' }}>
                    <span style={{ color: 'red' }}>string_label</span>
                </div>,
            ),
        ).toEqual('string_label');
        expect(
            stripHTMLTags(
                <div style={{ border: '1px solid red' }}>
                    <span style={{ color: 'red' }}>string_label_1</span>
                    <span style={{ color: 'red' }}>string_label_2</span>
                </div>,
            ),
        ).toEqual('string_label_1string_label_2');
    });
});

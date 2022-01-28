/* eslint-disable import/no-extraneous-dependencies */

import { cleanup } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { getProgressBarPreset } from '../utils';

describe('getProgressBarPreset', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should return undefined', () => {
        expect(getProgressBarPreset({})).toEqual(undefined);
    });

    it.each(['success', 'info', 'error', 'warning'])(
        'should return %s level',
        (level) => {
            // @ts-ignore
            expect(getProgressBarPreset({ level })).toEqual(level);
            expect(getProgressBarPreset({ [level]: true })).toEqual(level);
        },
    );
});

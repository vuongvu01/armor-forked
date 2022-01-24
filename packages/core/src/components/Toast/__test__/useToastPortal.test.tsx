/* eslint-disable import/no-extraneous-dependencies */

import { cleanup, act, screen } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { useToastPortal } from '../hooks';

describe('<Toast />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should not crash', async () => {
        act(() => {
            renderHook(() => useToastPortal());
        });
    });

    it('should add toast portal to the DOM', async () => {
        const { result } = renderHook(() => useToastPortal());
        const { portalId, loaded } = result.current;

        const portal = screen.getByTestId(portalId);

        expect(portal).toBeInTheDocument();
        expect(loaded).toBeTruthy();
    });

    it('should use correct zIndex value', async () => {
        const zIndexInput = 99;
        const { result } = renderHook(() => useToastPortal(zIndexInput));
        const { portalId } = result.current;

        const portal = screen.getByTestId(portalId);

        expect(portal).toHaveStyle(`position: fixed; z-index: ${zIndexInput}`);
    });
});

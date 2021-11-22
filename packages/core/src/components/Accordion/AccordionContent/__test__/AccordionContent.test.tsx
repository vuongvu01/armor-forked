/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import React, { useRef } from 'react';
import { cleanup, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { AccordionContent } from '..';

describe('<AccordionContent />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<AccordionContent />);
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(AccordionContent).toSupportPaddingAttributes();
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<AccordionContent ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(AccordionContent).toSupportRestPropsForwarding(
            'AccordionContent',
        );
    });
});

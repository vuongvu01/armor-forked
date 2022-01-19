/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { SVGIllustration } from '../SVGIllustration';

describe('<SVGIllustration />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<SVGIllustration />);
    });

    it('should render itself with margins without errors', async () => {
        render(<SVGIllustration marginRight={2} />);
    });

    // it('ensures margin* property transference', () => {
    //     const marginAttribute = 'marginY';
    //     const marginValue = 4;
    //
    //     const result = render(
    //         <Accordion {...{ [marginAttribute]: marginValue }}>
    //             <AccordionHeader title="Developers" />
    //             <AccordionContent>Get coffee</AccordionContent>
    //         </Accordion>,
    //     );
    //
    //     // @ts-ignore
    //     expect(result).toSupportMarginAttribute(
    //         marginAttribute,
    //         marginValue,
    //     );
    // });
});

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import * as Motion from '../components';

describe.each(Object.entries(Motion))('Motion', (motionName, Component) => {
    afterEach(async () => {
        cleanup();
    });

    it('renders itself without any errors !', async () => {
        render(<Component />);
    });

    it(`ensures that a className corresponding to the ${motionName} name is set`, async () => {
        const { container } = render(<Component />);
        const motion = container.querySelector(`.${motionName}`);

        expect(motion).not.toBeNull();
        expect(motion).toBeInstanceOf(HTMLDivElement);
    });

    it('allows to extend className with a custom value', async () => {
        const { container } = render(<Component className="ExtraClass" />);
        const motion = container.querySelector(`.${motionName}.ExtraClass`);

        expect(motion).not.toBeNull();
    });
});

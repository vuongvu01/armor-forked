/* eslint-disable import/no-extraneous-dependencies */

// @ts-ignore
import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { sizeProps } from '../size';

describe('size', () => {
    it('should replace spacing units in width, minWidth, maxWidth', async () => {
        const Component = styled.div`
            ${sizeProps};
        `;

        const tree = renderer
            .create(<Component width={10} minWidth={20} maxWidth={10} />)
            .toJSON();
        expect(tree).toHaveStyleRule('width', '40px');
        expect(tree).toHaveStyleRule('min-width', '80px');
        expect(tree).toHaveStyleRule('max-width', '40px');
    });

    it('should not replace string constants in width, minWidth, maxWidth', async () => {
        const Component = styled.div`
            ${sizeProps};
        `;

        const tree = renderer
            .create(
                <Component width="10rem" minWidth="20rem" maxWidth="5rem" />,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('width', '10rem');
        expect(tree).toHaveStyleRule('min-width', '20rem');
        expect(tree).toHaveStyleRule('max-width', '5rem');
    });

    it('should replace spacing units in height, minHeight, maxHeight', async () => {
        const Component = styled.div`
            ${sizeProps};
        `;

        const tree = renderer
            .create(<Component height={10} minHeight={20} maxHeight={10} />)
            .toJSON();
        expect(tree).toHaveStyleRule('height', '40px');
        expect(tree).toHaveStyleRule('min-height', '80px');
        expect(tree).toHaveStyleRule('max-height', '40px');
    });

    it('should not replace string constants in height, minHeight, maxHeight', async () => {
        const Component = styled.div`
            ${sizeProps};
        `;

        const tree = renderer
            .create(
                <Component height="10rem" minHeight="20rem" maxHeight="5rem" />,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('height', '10rem');
        expect(tree).toHaveStyleRule('min-height', '20rem');
        expect(tree).toHaveStyleRule('max-height', '5rem');
    });

    it('should replace wide, tall', async () => {
        const Component = styled.div`
            ${sizeProps};
        `;

        const tree = renderer.create(<Component wide tall />).toJSON();
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
    });
});

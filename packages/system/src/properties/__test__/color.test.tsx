/* eslint-disable import/no-extraneous-dependencies */

// @ts-ignore
import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { colorProps } from '../color';
import { makeDefaultTheme } from '../../theme';

const defaultTheme = makeDefaultTheme();

describe('color', () => {
    it('should replace prefixed color', async () => {
        const Component = styled.div`
            ${colorProps};
        `;

        const tree = renderer
            .create(<Component color="$color.primary.main" />)
            .toJSON();
        expect(tree).toHaveStyleRule(
            'color',
            defaultTheme.armor.color.primary.main,
        );
    });

    it('should replace unprefixed color', async () => {
        const Component = styled.div`
            ${colorProps};
        `;

        const tree = renderer
            .create(<Component color="primary.main" />)
            .toJSON();
        expect(tree).toHaveStyleRule(
            'color',
            defaultTheme.armor.color.primary.main,
        );
    });

    it('should not replace color hex constants', async () => {
        const Component = styled.div`
            ${colorProps};
        `;

        const tree = renderer.create(<Component color="#abcdef" />).toJSON();
        expect(tree).toHaveStyleRule('color', '#abcdef');
    });

    it('should not replace color literal constants', async () => {
        const Component = styled.div`
            ${colorProps};
        `;

        const tree = renderer.create(<Component color="orange" />).toJSON();
        expect(tree).toHaveStyleRule('color', 'orange');
    });
});

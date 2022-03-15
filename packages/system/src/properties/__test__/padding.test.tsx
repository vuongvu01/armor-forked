/* eslint-disable import/no-extraneous-dependencies */

// @ts-ignore
import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { paddingProps } from '../padding';

describe('padding', () => {
    it('should replace padding', async () => {
        const Component = styled.div`
            ${paddingProps};
        `;

        const tree = renderer.create(<Component padding={2} />).toJSON();
        expect(tree).toHaveStyleRule('padding', '8px');
    });

    it('should replace padding top, bottom, left, right', async () => {
        const Component = styled.div`
            ${paddingProps};
        `;

        const tree = renderer
            .create(
                <Component
                    paddingTop={2}
                    paddingBottom={3}
                    paddingLeft={4}
                    paddingRight={5}
                />,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('padding-top', '8px');
        expect(tree).toHaveStyleRule('padding-bottom', '12px');
        expect(tree).toHaveStyleRule('padding-left', '16px');
        expect(tree).toHaveStyleRule('padding-right', '20px');
    });

    it('should replace padding x, y', async () => {
        const Component = styled.div`
            ${paddingProps};
        `;

        const tree = renderer
            .create(<Component paddingX={2} paddingY={3} />)
            .toJSON();
        expect(tree).toHaveStyleRule('padding-top', '12px');
        expect(tree).toHaveStyleRule('padding-bottom', '12px');
        expect(tree).toHaveStyleRule('padding-left', '8px');
        expect(tree).toHaveStyleRule('padding-right', '8px');
    });
});

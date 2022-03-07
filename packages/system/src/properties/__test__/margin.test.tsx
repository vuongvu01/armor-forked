/* eslint-disable import/no-extraneous-dependencies */

// @ts-ignore
import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { marginProps } from '../margin';

describe('margin', () => {
    it('should replace margin', async () => {
        const Component = styled.div`
            ${marginProps};
        `;

        const tree = renderer.create(<Component margin={2} />).toJSON();
        expect(tree).toHaveStyleRule('margin', '8px');
    });

    it('should replace margin top, bottom, left, right', async () => {
        const Component = styled.div`
            ${marginProps};
        `;

        const tree = renderer
            .create(
                <Component
                    marginTop={2}
                    marginBottom={3}
                    marginLeft={4}
                    marginRight={5}
                />,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('margin-top', '8px');
        expect(tree).toHaveStyleRule('margin-bottom', '12px');
        expect(tree).toHaveStyleRule('margin-left', '16px');
        expect(tree).toHaveStyleRule('margin-right', '20px');
    });

    it('should replace margin x, y', async () => {
        const Component = styled.div`
            ${marginProps};
        `;

        const tree = renderer
            .create(<Component marginX={2} marginY={3} />)
            .toJSON();
        expect(tree).toHaveStyleRule('margin-top', '12px');
        expect(tree).toHaveStyleRule('margin-bottom', '12px');
        expect(tree).toHaveStyleRule('margin-left', '8px');
        expect(tree).toHaveStyleRule('margin-right', '8px');
    });
});

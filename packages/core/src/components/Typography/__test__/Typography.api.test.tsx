/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { Typography } from '../..';
import { renderJSONAlt } from '../../../helpers/renderJSON';
import { makeDefaultTheme } from '../../../compatibility';

const theme = makeDefaultTheme();

describe('<Typography />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render tag property', () => {
        const { getByText } = render(
            <Typography tag="a" href="https://google.com">
                Link
            </Typography>,
        );
        const element = getByText('Link');
        expect(element).toBeInstanceOf(HTMLAnchorElement);
        expect(element).toHaveAttribute('href', 'https://google.com');
    });

    it('should select tag basing on typography type', async () => {
        const { getByText, rerender } = render(<Typography>Text</Typography>);
        expect(getByText('Text')).toBeInstanceOf(HTMLDivElement);

        rerender(<Typography paragraph>Text</Typography>);
        expect(getByText('Text')).toBeInstanceOf(HTMLParagraphElement);

        rerender(<Typography pageTitle>Text</Typography>);
        expect(getByText('Text')).toBeInstanceOf(HTMLHeadingElement);

        rerender(<Typography sectionTitle>Text</Typography>);
        expect(getByText('Text')).toBeInstanceOf(HTMLHeadingElement);

        rerender(<Typography subSectionTitle>Text</Typography>);
        expect(getByText('Text')).toBeInstanceOf(HTMLHeadingElement);
    });

    it('should support disabled property', () => {
        let tree = renderJSONAlt(<Typography>Hi</Typography>);
        expect(tree).not.toHaveStyleRule(
            'color',
            theme.armor.color.neutral['05'],
        );

        tree = renderJSONAlt(<Typography disabled>Hi</Typography>);
        expect(tree).toHaveStyleRule('color', theme.armor.color.neutral['05']);
    });

    it('should support error property', () => {
        let tree = renderJSONAlt(<Typography>Hi</Typography>);
        expect(tree).not.toHaveStyleRule('color', theme.armor.color.error.main);

        tree = renderJSONAlt(<Typography error>Hi</Typography>);
        expect(tree).toHaveStyleRule('color', theme.armor.color.error.main);
    });

    it('should support maxLines property', () => {
        const tree = renderJSONAlt(
            <Typography maxLines={2} paragraph>
                Hi
            </Typography>,
        );
        expect(tree).toHaveStyleRule('max-height', 'calc( 1.5rem * 2 )');
    });
});

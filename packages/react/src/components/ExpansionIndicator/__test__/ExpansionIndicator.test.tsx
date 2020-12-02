/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ExpansionIndicator } from '../ExpansionIndicator';
import {
    expansionIndicatorContainer,
    expansionIndicatorContent,
    expansionIndicatorIcon,
} from '../constants';

describe('<ExpansionIndicator />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<ExpansionIndicator />);
    });

    it('should ensure that all ExpansionIndicator sections have corresponding class names set', async () => {
        render(<ExpansionIndicator />);

        const rootElement = screen.getByTestId(expansionIndicatorContainer);
        expect(rootElement).toHaveClass('ExpansionIndicator-Root');

        const contentElement = screen.getByTestId(expansionIndicatorContent);
        expect(contentElement).toHaveClass('ExpansionIndicator-Content');

        const iconElement = screen.getByTestId(expansionIndicatorIcon);
        expect(iconElement).toHaveClass('ExpansionIndicator-Icon');
    });

    it('should ensure that expanded state is reflected in class names', async () => {
        render(<ExpansionIndicator isExpanded />);

        const rootElement = screen.getByTestId(expansionIndicatorContainer);
        expect(rootElement).toHaveClass(
            'ExpansionIndicator-Root ExpansionIndicator-Root--expanded',
        );

        const contentElement = screen.getByTestId(expansionIndicatorContent);
        expect(contentElement).toHaveClass(
            'ExpansionIndicator-Content ExpansionIndicator-Content--expanded',
        );

        const iconElement = screen.getByTestId(expansionIndicatorIcon);
        expect(iconElement).toHaveClass(
            'ExpansionIndicator-Icon ExpansionIndicator-Icon--expanded',
        );
    });

    it('should reflect state combinations in class names', () => {
        const result = render(<ExpansionIndicator isExpanded disabled />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('ExpansionIndicator', {
            Root: ['expanded', 'disabled'],
        });
    });

    it('ensures margin* property transference', () => {
        const marginAttribute = 'marginY';
        const marginValue = 4;

        const result = renderer
            .create(
                <ExpansionIndicator {...{ [marginAttribute]: marginValue }} />,
            )
            .toJSON();

        // @ts-ignore
        expect(result).toSupportMarginAttribute(marginAttribute, marginValue);
    });
});

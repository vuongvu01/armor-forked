/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { Stepper } from '../Stepper';
import { Step } from '../Step';

describe('<Stepper />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', () => {
        render(<Stepper />);
    });

    it('should render 5 child <Step /> components', () => {
        const { container } = render(
            <Stepper>
                <Step />
                <Step />
                <Step />
                <Step />
                <Step />
            </Stepper>,
        );
        expect(container.querySelectorAll('.Step-Root').length).toEqual(5);
    });

    it('should render a vertical and minimal Stepper', () => {
        const { container } = render(
            <Stepper vertical minimal>
                <Step />
                <Step />
                <Step />
            </Stepper>,
        );
        expect(
            container.querySelector(
                '.Stepper-Root--vertical.Stepper-Root--minimal',
            ),
        ).toBeTruthy();
    });

    it('should render with correct activeIndex', () => {
        const { container } = render(
            <Stepper activeIndex={0}>
                <Step />
                <Step />
                <Step />
            </Stepper>,
        );

        const step = container.querySelector('.Step-Root:nth-child(1)');
        expect(step?.classList.contains('Step-Root--active')).toBeTruthy();
        const restOfSteps = container.querySelectorAll(
            '.Step-Root:not(:nth-child(1))',
        );
        expect(restOfSteps).toHaveLength(2);
    });

    it('should render one <Step /> with a warning and another one with an error', () => {
        const { container } = render(
            <Stepper activeIndex={3}>
                <Step error />
                <Step warning />
                <Step />
                <Step />
                <Step />
            </Stepper>,
        );

        const stepsWithErrors = container.querySelectorAll('.Step-Root--error');
        const stepsWithWarning = container.querySelectorAll(
            '.Step-Root--warning',
        );
        const completedSteps = container.querySelectorAll(
            '.Step-Root--complete',
        );
        const incompletedSteps = container.querySelectorAll(
            '.Step-Root--incomplete',
        );

        expect(stepsWithErrors).toHaveLength(1);
        expect(stepsWithWarning).toHaveLength(1);
        // since we are on step 4 (counts start from 0) there shall be only 3 steps completed but since we have
        // one with a warning and an error, that down to 1 completed step.
        expect(completedSteps).toHaveLength(1);
        expect(incompletedSteps).toHaveLength(1);
    });

    it('should render the correct title and descripton', () => {
        const { container } = render(
            <Stepper>
                <Step title="Order" />
                <Step
                    title="Delivery address"
                    description="We deliver worldwide."
                />
                <Step title="Payment" />
            </Stepper>,
        );

        const firstStep = container.querySelector('.Step-Root:nth-child(1)');
        const secondStep = container.querySelector('.Step-Root:nth-child(2)');
        const thirdStep = container.querySelector('.Step-Root:nth-child(3)');
        expect(firstStep?.querySelector('.Step-Title')).toHaveTextContent(
            'Order',
        );
        expect(firstStep?.querySelector('.Step-Description')).toHaveTextContent(
            '',
        );
        expect(secondStep?.querySelector('.Step-Title')).toHaveTextContent(
            'Delivery address',
        );
        expect(
            secondStep?.querySelector('.Step-Description'),
        ).toHaveTextContent('We deliver worldwide.');
        expect(thirdStep?.querySelector('.Step-Title')).toHaveTextContent(
            'Payment',
        );
        expect(thirdStep?.querySelector('.Step-Description')).toHaveTextContent(
            '',
        );
    });

    it('should allow clicking and the previous completed steps', () => {
        const setSelectedStepIndex = jest.fn();

        const { container } = render(
            <Stepper activeIndex={2} onActiveIndexChange={setSelectedStepIndex}>
                <Step title="Order" />
                <Step title="Delivery" />
                <Step title="Payment" />
                <Step title="Review" />
            </Stepper>,
        );
        const firstStep = container.querySelector('.Step-Root:nth-child(1)');
        const secondStep = container.querySelector('.Step-Root:nth-child(2)');
        const thirdStep = container.querySelector('.Step-Root:nth-child(3)'); // active one
        const fourthStep = container.querySelector('.Step-Root:nth-child(4)');

        expect(firstStep?.classList).toContain('Step-Root--complete');
        expect(secondStep?.classList).toContain('Step-Root--complete');
        expect(thirdStep?.classList).toContain('Step-Root--active');
        expect(fourthStep?.classList).toContain('Step-Root--incomplete');

        // Moving one step backwards
        fireEvent.click(secondStep!);
        expect(firstStep?.classList).toContain('Step-Root--complete');
        expect(secondStep?.classList).toContain('Step-Root--active');
        expect(thirdStep?.classList).toContain('Step-Root--incomplete');
        expect(fourthStep?.classList).toContain('Step-Root--incomplete');

        // Moving one step backwards
        fireEvent.click(firstStep!);
        expect(firstStep?.classList).toContain('Step-Root--active');
        expect(secondStep?.classList).toContain('Step-Root--incomplete');
        expect(thirdStep?.classList).toContain('Step-Root--incomplete');
        expect(fourthStep?.classList).toContain('Step-Root--incomplete');
    });

    it('should contain correct status class in ActivityLog mode', () => {
        const { container } = render(
            <Stepper readOnly>
                <Step title="Order" />
                <Step title="Delivery" warning />
                <Step title="Payment" error />
                <Step title="Review" info />
                <Step title="Review" success />
            </Stepper>,
        );
        const firstStep = container.querySelector('.Step-Root:nth-child(1)');
        const secondStep = container.querySelector('.Step-Root:nth-child(2)');
        const thirdStep = container.querySelector('.Step-Root:nth-child(3)');
        const fourthStep = container.querySelector('.Step-Root:nth-child(4)');
        const fifthStep = container.querySelector('.Step-Root:nth-child(5)');

        expect(firstStep?.classList).toContain('Step-Root--log');
        expect(secondStep?.classList).toContain('Step-Root--warning');
        expect(thirdStep?.classList).toContain('Step-Root--error');
        expect(fourthStep?.classList).toContain('Step-Root--info');
        expect(fifthStep?.classList).toContain('Step-Root--success');
    });

    it('should render the correct order in case of `null` passed as child', () => {
        const { container } = render(
            <Stepper readOnly>
                {null}
                <Step title="Delivery" />
                <Step title="Payment" />
                <Step title="Review" />
                <Step title="Review" />
            </Stepper>,
        );
        
        const firstStep = container.querySelector('.Step-Root:nth-child(1)');
        const secondStep = container.querySelector('.Step-Root:nth-child(2)');
        const thirdStep = container.querySelector('.Step-Root:nth-child(3)');
        const fourthStep = container.querySelector('.Step-Root:nth-child(4)');

        expect(container.querySelectorAll('.Step-Root').length).toEqual(4);
        expect(firstStep?.querySelector('.Step-Number')).toHaveTextContent('1');
        expect(secondStep?.querySelector('.Step-Number')).toHaveTextContent('2');
        expect(thirdStep?.querySelector('.Step-Number')).toHaveTextContent('3');
        expect(fourthStep?.querySelector('.Step-Number')).toHaveTextContent('4');
    });
});

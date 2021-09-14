import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { Stepper } from '../Stepper';
import { Step } from '../Step';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Stepper',
    component: Stepper,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const DefaultLayout = () => {
    const [step, setStep] = React.useState(2);
    const onSomething = (index: any) => {
        setStep(index);
    };

    return (
        <div>
            <Stepper
                marginBottom={8}
                onActiveIndexChange={onSomething}
                activeIndex={step}
            >
                <Step title="Summary" description="Your order details" />
                <Step
                    title="Delivery"
                    description="Where should we deliver this?"
                />
                <Step
                    title="Payment"
                    description="Pay with credit card or Crypto"
                />
                <Step
                    title="Review"
                    description="Make sure everything in order"
                />
            </Stepper>
            <div style={{ marginLeft: 240 }}>
                <button onClick={() => setStep(step > 0 ? step - 1 : step)}>
                    prev
                </button>
                <button onClick={() => setStep(step + 1)}>next</button>
            </div>
        </div>
    );
};

export const VerticalLayout = () => (
    <Stepper activeIndex={1} vertical>
        <Step title="Summary" description="Your order details" />
        <Step title="Delivery" description="Where should we deliver this?" />
        <Step title="Payment" description="Pay with credit card or Crypto" />
        <Step title="Review" description="Make sure everything in order" />
    </Stepper>
);

export const HorizontalLayoutWithErrorsAndWarning = () => (
    <Stepper activeIndex={4} vertical>
        <Step warning title="Summary" description="Your order details" />
        <Step
            error
            title="Delivery"
            description="Where should we deliver this?"
        />
        <Step title="Payment" description="Pay with credit card or Crypto" />
        <Step title="Review" description="Make sure everything in order" />
        <Step title="Review" description="Make sure everything in order" />
    </Stepper>
);

export const MinimalHorizontalLayout = () => (
    <Stepper activeIndex={2} minimal>
        <Step title="Summary" description="Your order details" />
        <Step title="Delivery" description="Where should we deliver this?" />
        <Step title="Payment" description="Pay with credit card or Crypto" />
        <Step title="Review" description="Make sure everything in order" />
    </Stepper>
);

export const MinimalVerticalLayout = () => (
    <Stepper activeIndex={3} vertical minimal>
        <Step title="Summary" description="Your order details" />
        <Step title="Delivery" description="Where should we deliver this?" />
        <Step title="Payment" description="Pay with credit card or Crypto" />
        <Step title="Review" description="Make sure everything in order" />
    </Stepper>
);

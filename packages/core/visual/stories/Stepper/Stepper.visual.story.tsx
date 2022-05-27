import React from 'react';

import { TickThickIcon } from '@deliveryhero/armor-icons';

import { Stepper, Step } from '../../../src/components';

export default {
    title: 'Stepper',
    component: Stepper,
};

export const DefaultLayout = () => {
    return (
        <Stepper activeIndex={1}>
            <Step title="Summary" description="Your order details" />
            <Step
                title="Delivery"
                description="Where should we deliver this?"
            />
            <Step
                title="Payment"
                description="Pay with credit card or Crypto"
            />
            <Step title="Review" description="Make sure everything in order" />
        </Stepper>
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

export const MinimalVerticalLayout = () => (
    <Stepper activeIndex={3} vertical minimal>
        <Step title="Summary" description="Your order details" />
        <Step title="Delivery" description="Where should we deliver this?" />
        <Step title="Payment" description="Pay with credit card or Crypto" />
        <Step title="Review" description="Make sure everything in order" />
    </Stepper>
);

export const StepperAsActivityLog = () => {
    const ContentExample = (
        <div style={{ float: 'left' }}>
            Lorem ipsum dolor sit amet
            <br />
            Lorem ipsum dolor sit amet
            <br />
            Lorem ipsum dolor sit amet
        </div>
    );

    return (
        <>
            <Stepper vertical readOnly>
                <Step
                    title="Application Approved"
                    description={ContentExample}
                    extraInfo="01.01.2022, 12:00"
                    icon={<TickThickIcon small />}
                    success
                />
                <Step
                    title="Resubmit Document"
                    description={ContentExample}
                    extraInfo="01.01.2022, 12:00"
                    icon={<TickThickIcon small />}
                    warning
                />
                <Step
                    title="Rejected Document"
                    description={ContentExample}
                    icon={<TickThickIcon small />}
                    extraInfo="01.01.2022, 12:00"
                    error
                />
            </Stepper>
            <Stepper vertical readOnly>
                <Step
                    title="Title"
                    description={ContentExample}
                    icon={<TickThickIcon small />}
                    extraInfo="01.01.2022, 12:00"
                />
                <Step
                    title="More info"
                    description={ContentExample}
                    icon={<TickThickIcon small />}
                    info
                    extraInfo="01.01.2022, 12:00"
                />
                <Step
                    title="Title"
                    description={ContentExample}
                    icon={<TickThickIcon small />}
                    warning
                    extraInfo="01.01.2022, 12:00"
                />
            </Stepper>

            <Stepper vertical readOnly minimal>
                <Step
                    title="Title"
                    description={ContentExample}
                    extraInfo="01.01.2022, 12:00"
                    error
                />
                <Step
                    title="More info"
                    description={ContentExample}
                    info
                    extraInfo="01.01.2022, 12:00"
                />
                <Step
                    title="Title"
                    description={ContentExample}
                    warning
                    extraInfo="01.01.2022, 12:00"
                />
                <Step
                    title="Title"
                    description={ContentExample}
                    extraInfo="01.01.2022, 12:00"
                    success
                />
                <Step
                    title="Title"
                    description={ContentExample}
                    extraInfo="01.01.2022, 12:00"
                />
            </Stepper>
        </>
    );
};

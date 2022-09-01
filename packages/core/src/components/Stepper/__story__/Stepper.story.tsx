import React from 'react';
import {
    LockClosedIcon,
    TickThickIcon,
    CancelIcon,
    SyncOneDirectionIcon,
} from '@deliveryhero/armor-icons';
import { Typography } from '../../Typography';
import { Box } from '../../Box';
import { Stepper } from '../Stepper';
import { Step } from '../Step';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Core/Stepper',
    component: Stepper,
    decorators: [withWrapper],
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

export const StepperAsActivityLog = () => {
    const ContentExample = (
        <Box marginBottom={4} marginTop={1}>
            <div>
                Sub 1:{' '}
                <span style={{ color: '#000' }}>
                    Lorem ipsum dolor sit amet
                </span>
            </div>
            <div>
                Sub 2:{' '}
                <span style={{ color: '#000' }}>
                    Lorem ipsum dolor sit amet, consectetur
                </span>
            </div>
            <div>
                Sub 3: <span style={{ color: '#000' }}>Lorem ipsum dolor</span>
            </div>
        </Box>
    );

    const ContentExample2 = (
        <Box
            marginTop={1}
            marginBottom={4}
            style={{
                padding: 16,
                border: '1px solid #DBDBDB',
                borderRadius: 8,
                display: 'grid',
                placeItems: 'center',
            }}
        >
            Lorem ipsum dolor sit amet
            <br />
            Lorem ipsum dolor sit amet
            <br />
            Lorem ipsum dolor sit amet
        </Box>
    );

    return (
        <>
            <Typography sectionTitle marginTop={1}>
                Multiline content
            </Typography>
            <Box width={100}>
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
                        icon={<SyncOneDirectionIcon medium />}
                        warning
                    />
                    <Step
                        title="Rejected Document"
                        description={ContentExample}
                        icon={<CancelIcon small />}
                        extraInfo="01.01.2022, 12:00"
                        error
                    />
                </Stepper>
            </Box>
            <Typography sectionTitle marginTop={1}>
                Custom content
            </Typography>
            <Box width={100}>
                <Stepper vertical readOnly>
                    <Step
                        title="Title"
                        description={ContentExample2}
                        icon={<LockClosedIcon medium />}
                        extraInfo="01.01.2022, 12:00"
                    />
                    <Step
                        title="More info"
                        description={ContentExample2}
                        icon={<TickThickIcon small />}
                        info
                        extraInfo="01.01.2022, 12:00"
                    />
                    <Step
                        title="Title"
                        description={ContentExample2}
                        icon={<TickThickIcon small />}
                        warning
                        extraInfo="01.01.2022, 12:00"
                    />
                </Stepper>
            </Box>
            <Typography sectionTitle marginTop={1}>
                Minimal view
            </Typography>
            <Box width={100}>
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
            </Box>
        </>
    );
};

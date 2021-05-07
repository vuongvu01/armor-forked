import React, { ChangeEvent, useState, MouseEvent } from 'react';
import { InfoIcon } from '@deliveryhero/armor-icons';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';
import { Accordion } from '../Accordion';
import { AccordionContent } from '../AccordionContent';
import { AccordionHeader } from '../AccordionHeader';
import { Typography } from '../../Typography';
import { Dropdown } from '../../Dropdown';
import { Box } from '../../Box';
import { Radio, RadioGroup } from '../../Radio';
import { Checkbox } from '../../Checkbox';
import { Tooltip } from '../../Tooltip';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const MinimumConfiguration = () => {
    const groupName1 = 'radioName1';
    const groupName2 = 'radioName2';
    const [group1SelectedValue, setSelectedValueGroup1] = useState('');

    const handleChangeGroup1 = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event?.target?.value;

        if (selectedValue) {
            setSelectedValueGroup1(selectedValue);
        }
    };
    const handleOnToggle = (
        event: MouseEvent<HTMLDivElement>,
        isExpanded: boolean,
    ) =>
        // eslint-disable-next-line no-console
        console.log('Toggle: ', isExpanded);

    return (
        <>
            <Accordion onToggle={handleOnToggle}>
                <AccordionHeader title="Developers" />
                <AccordionContent>Get coffee</AccordionContent>
            </Accordion>
            <Accordion onToggle={handleOnToggle}>
                <AccordionHeader title="Support" />
                <AccordionContent>
                    Please contact us at{' '}
                    <a href="https://app.slack.com/client/T052P4KCD/CUMDG3PPZ">
                        #armor-news
                    </a>{' '}
                    Slack channel
                </AccordionContent>
            </Accordion>
            <Accordion onToggle={handleOnToggle}>
                <AccordionHeader title="Meals" />
                <AccordionContent>
                    <Box marginY={5}>
                        <Typography subSectionTitle marginTop={0}>
                            Meal combo
                        </Typography>
                        <Dropdown
                            options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
                            onSelect={() => {}}
                            label="Main dish"
                            marginY={2}
                            marginRight={6}
                            defaultValue={0}
                        />
                        <Dropdown
                            options={['French fries', 'Rice', 'Beans', 'Corn']}
                            onSelect={() => {}}
                            label="Side dish"
                            marginTop={2}
                            marginBottom={6}
                            defaultValue={2}
                        />
                    </Box>
                    <Box marginBottom={10}>
                        <Typography subSectionTitle>Pick a sauce</Typography>
                        <RadioGroup
                            name={groupName1}
                            selectedValue={group1SelectedValue}
                            onChange={handleChangeGroup1}
                            marginBottom={2}
                        >
                            <Radio value="val1" label="Mild" />
                            <Radio value="val2" label="Medium" />
                            <Radio value="val3" label="Spicy" />
                        </RadioGroup>
                    </Box>
                    <Box marginBottom={10}>
                        <Typography subSectionTitle>
                            Wähle eine Sauce
                        </Typography>
                        <RadioGroup
                            name={groupName2}
                            selectedValue={group1SelectedValue}
                            onChange={handleChangeGroup1}
                            marginBottom={2}
                        >
                            <Radio value="val1" label="Mild" />
                            <Radio value="val2" label="Medium" />
                            <Radio value="val3" label="Scharf" />
                        </RadioGroup>
                    </Box>
                    <Box marginBottom={10}>
                        <Typography subSectionTitle marginTop={4}>
                            Extras
                        </Typography>
                        <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <Checkbox
                                onChange={() => {}}
                                label="Soft drink"
                                marginBottom={2}
                            />
                            <Checkbox
                                onChange={() => {}}
                                label="Chips"
                                marginBottom={2}
                            />
                            <Checkbox
                                onChange={() => {}}
                                label="Chocolate chip cookie"
                                marginBottom={2}
                            />
                            <Checkbox
                                onChange={() => {}}
                                label="Extra cheese"
                                marginBottom={2}
                            />
                            <Checkbox
                                onChange={() => {}}
                                label="Lettuce salad with dressing of your choice"
                                marginBottom={2}
                            />
                        </div>
                    </Box>
                </AccordionContent>
            </Accordion>
            <Accordion onToggle={handleOnToggle}>
                <AccordionHeader title="Settings" />
                <AccordionContent>Please configure them</AccordionContent>
            </Accordion>
        </>
    );
};

export const DisabledAccordionItem = () => {
    const handleOnToggle = (
        event: MouseEvent<HTMLDivElement>,
        isExpanded: boolean,
    ) =>
        // eslint-disable-next-line no-console
        console.log('Toggle: ', isExpanded);

    return (
        <>
            <Accordion onToggle={handleOnToggle}>
                <AccordionHeader title="Test" />
                <AccordionContent>Content</AccordionContent>
            </Accordion>
            <Accordion disabled onToggle={handleOnToggle}>
                <AccordionHeader title="Disabled test" />
                <AccordionContent>Content</AccordionContent>
            </Accordion>
        </>
    );
};

export const ExpandedByDefault = () => {
    const handleOnToggle = (event: MouseEvent, isExpanded: boolean) =>
        // eslint-disable-next-line no-console
        console.log('Toggle: ', isExpanded);

    return (
        <>
            <Accordion defaultExpanded onToggle={handleOnToggle}>
                <AccordionHeader title="Test" />
                <AccordionContent>Content</AccordionContent>
            </Accordion>
            <Accordion onToggle={handleOnToggle}>
                <AccordionHeader title="Another test" />
                <AccordionContent>Content</AccordionContent>
            </Accordion>
        </>
    );
};

export const NestedInAParent = () => {
    const handleOnToggle = (event: MouseEvent, isExpanded: boolean) =>
        // eslint-disable-next-line no-console
        console.log('Toggle: ', isExpanded);

    return (
        <div style={{ width: '500px' }}>
            <Accordion onToggle={handleOnToggle}>
                <AccordionHeader title="Test" />
                <AccordionContent>Content</AccordionContent>
            </Accordion>
            <Accordion onToggle={handleOnToggle}>
                <AccordionHeader title="Another test" />
                <AccordionContent>Content</AccordionContent>
            </Accordion>
        </div>
    );
};

export const ControlledExample = () => {
    const accordion0 = 'accordion0';
    const accordion1 = 'accordion1';
    const accordion2 = 'accordion2';
    const [currentlyExpanded, setCurrentlyExpanded] = useState(accordion0);

    const handleToggle = (panel: string) => (
        event: MouseEvent,
        isExpanded: boolean,
    ) => {
        if (isExpanded) {
            setCurrentlyExpanded(panel);
        }
    };

    return (
        <div style={{ width: '500px' }}>
            <Accordion
                expanded={currentlyExpanded === accordion0}
                onToggle={handleToggle(accordion0)}
            >
                <AccordionHeader title="Accordion 0" />
                <AccordionContent>Content 0</AccordionContent>
            </Accordion>
            <Accordion
                expanded={currentlyExpanded === accordion1}
                onToggle={handleToggle(accordion1)}
            >
                <AccordionHeader title="Accordion 1" />
                <AccordionContent>Content 1</AccordionContent>
            </Accordion>
            <Accordion
                expanded={currentlyExpanded === accordion2}
                onToggle={handleToggle(accordion2)}
            >
                <AccordionHeader title="Accordion 2" />
                <AccordionContent>Content 2</AccordionContent>
            </Accordion>
        </div>
    );
};

export const CustomHeaderContents = () => {
    const accordion0 = 'accordion0';
    const accordion1 = 'accordion1';
    const accordion2 = 'accordion2';
    const [currentlyExpanded, setCurrentlyExpanded] = useState('');

    const handleToggle = (panel: string) => (
        event: MouseEvent,
        isExpanded: boolean,
    ) => {
        if (isExpanded) {
            setCurrentlyExpanded(panel);
        }
    };

    return (
        <div style={{ width: '500px' }}>
            <Accordion
                expanded={currentlyExpanded === accordion0}
                onToggle={handleToggle(accordion0)}
            >
                <AccordionHeader>
                    <Typography label medium>
                        Optimise delivery areas
                    </Typography>

                    <Tooltip align="bottom" content="Hello world!">
                        <span style={{ height: '16px' }}>
                            <InfoIcon marginLeft={3} />
                        </span>
                    </Tooltip>
                </AccordionHeader>
                <AccordionContent>Content 0</AccordionContent>
            </Accordion>
            <Accordion
                expanded={currentlyExpanded === accordion1}
                onToggle={handleToggle(accordion1)}
            >
                <AccordionHeader title="Accordion 1" />
                <AccordionContent>Content 1</AccordionContent>
            </Accordion>
            <Accordion
                expanded={currentlyExpanded === accordion2}
                onToggle={handleToggle(accordion2)}
            >
                <AccordionHeader title="Accordion 2" />
                <AccordionContent>Content 2</AccordionContent>
            </Accordion>
        </div>
    );
};

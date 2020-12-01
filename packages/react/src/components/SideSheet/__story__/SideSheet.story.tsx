import React, { ChangeEvent, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { SideSheet } from '../SideSheet';
import { Button } from '../../Button';
import { SideSheetBody, SideSheetFooter, SideSheetHeader } from '../index';
import { Dropdown } from '../../Dropdown';
import { Radio, RadioGroup } from '../../Radio';
import { Typography } from '../../Typography';
import { Box } from '../../Box';
import { Checkbox } from '../../Checkbox';

export default {
    title: 'Components/SideSheet',
    component: SideSheet,
    decorators: [withKnobs],
    parameters: {},
};

export const DefaultLayout = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    return (
        <>
            <SideSheet open={open} onClose={onClose}>
                <SideSheetHeader
                    title="Header title"
                    description="Header description"
                />
                <SideSheetBody>Body content</SideSheetBody>
                <SideSheetFooter>Footer actions</SideSheetFooter>
            </SideSheet>

            <Button onClick={() => setOpen(true)}>Show Layout</Button>
        </>
    );
};

export const WideLookExpandedOnLoadWithNoOverlayBackground = () => {
    const [open, setOpen] = useState(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <SideSheet
                disableEffects
                disableOverlay
                open={open}
                onClose={onClose}
                wide={boolean('Wide', true)}
            >
                <SideSheetHeader
                    title="Header title"
                    description="Header description"
                />
                <SideSheetBody>Body content</SideSheetBody>
                <SideSheetFooter>Footer actions</SideSheetFooter>
            </SideSheet>
            <Button onClick={() => setOpen(true)}>Open SideSheet</Button>
        </>
    );
};

export const SampleUseCase = () => {
    const groupName1 = 'radioName1';
    const [open, setOpen] = useState(false);
    const [group1SelectedValue, setSelectedValueGroup1] = useState('');

    const handleChangeGroup1 = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event?.target?.value;

        if (selectedValue) {
            setSelectedValueGroup1(selectedValue);
        }
    };
    const onClose = () => setOpen(false);

    return (
        <>
            <SideSheet open={open} onClose={onClose}>
                <SideSheetHeader
                    title="Mix as you wish"
                    description="Please pick your dish & drink combination"
                />
                <SideSheetBody>
                    <Typography subSectionTitle marginTop={0}>
                        Meal combo
                    </Typography>
                    <Dropdown
                        options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
                        onSelect={() => {}}
                        label="Main dish"
                        marginY={2}
                        marginRight={6}
                        defaultValue={1}
                    />
                    <Dropdown
                        options={['French fries', 'Rice', 'Beans', 'Corn']}
                        onSelect={() => {}}
                        label="Side dish"
                        marginTop={2}
                        marginBottom={6}
                        selectedIndex={2}
                    />
                    <Box marginBottom={10}>
                        <Typography subSectionTitle>Pick a sauce</Typography>
                        <RadioGroup
                            name={groupName1}
                            selectedValue={group1SelectedValue}
                            onChange={handleChangeGroup1}
                            marginBottom={8}
                        >
                            <Radio value="val1" label="Mild" />
                            <Radio value="val2" label="Medium" />
                            <Radio value="val3" label="Spicy" />
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
                </SideSheetBody>
                <SideSheetFooter style={{ justifyContent: 'flex-end' }}>
                    <Button tertiary onClick={onClose}>
                        Cancel
                    </Button>
                    <Button marginLeft={6} onClick={onClose}>
                        Confirm
                    </Button>
                </SideSheetFooter>
            </SideSheet>

            <Button onClick={() => setOpen(true)}>Configure</Button>
        </>
    );
};

export const WideLookWithNoCloseOption = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    return (
        <>
            <SideSheet
                disableOverlay
                isCloseButtonVisible={false}
                open={open}
                onClose={onClose}
                wide={boolean('Wide', true)}
            >
                <SideSheetHeader
                    title="Header title"
                    description="Header description"
                />
                <SideSheetBody>Body content</SideSheetBody>
                <SideSheetFooter>Footer actions</SideSheetFooter>
            </SideSheet>
            <Button onClick={() => setOpen(true)}>Open SideSheet</Button>
        </>
    );
};

export const FixedHeaderAndFooter = () => {
    const groupName1 = 'radioName1';
    const groupName2 = 'radioName2';
    const groupName3 = 'radioName3';
    const groupName4 = 'radioName4';
    const groupName5 = 'radioName5';
    const [open, setOpen] = useState(false);
    const [group1SelectedValue, setSelectedValueGroup1] = useState('');

    const handleChangeGroup1 = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event?.target?.value;

        if (selectedValue) {
            setSelectedValueGroup1(selectedValue);
        }
    };
    const onClose = () => setOpen(false);

    return (
        <>
            <SideSheet
                open={open}
                onClose={onClose}
                wide={boolean('Wide', false)}
            >
                <SideSheetHeader
                    title="Mix as you wish"
                    description="Please pick your dish & drink combination"
                />
                <SideSheetBody>
                    <Typography subSectionTitle marginTop={0}>
                        Meal combo
                    </Typography>
                    <Dropdown
                        options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
                        onSelect={() => {}}
                        label="Main dish"
                        marginY={2}
                        marginRight={6}
                        selectedIndex={1}
                    />
                    <Dropdown
                        options={['French fries', 'Rice', 'Beans', 'Corn']}
                        onSelect={() => {}}
                        label="Side dish"
                        marginTop={2}
                        marginBottom={6}
                        selectedIndex={2}
                    />
                    <Box marginBottom={10}>
                        <Typography subSectionTitle>Pick a sauce</Typography>
                        <RadioGroup
                            name={groupName1}
                            selectedValue={group1SelectedValue}
                            onChange={handleChangeGroup1}
                            marginBottom={8}
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
                            marginBottom={8}
                        >
                            <Radio value="val1" label="Mild" />
                            <Radio value="val2" label="Medium" />
                            <Radio value="val3" label="Scharf" />
                        </RadioGroup>
                    </Box>
                    <Box marginBottom={10}>
                        <Typography subSectionTitle>
                            Escoge una salsa
                        </Typography>
                        <RadioGroup
                            name={groupName3}
                            selectedValue={group1SelectedValue}
                            onChange={handleChangeGroup1}
                            marginBottom={8}
                        >
                            <Radio value="val1" label="Leve" />
                            <Radio value="val2" label="Medio" />
                            <Radio value="val3" label="Picante" />
                        </RadioGroup>
                    </Box>
                    <Box marginBottom={10}>
                        <Typography subSectionTitle>Chọn nước sốt</Typography>
                        <RadioGroup
                            name={groupName4}
                            selectedValue={group1SelectedValue}
                            onChange={handleChangeGroup1}
                            marginBottom={8}
                        >
                            <Radio value="val1" label="Nhẹ" />
                            <Radio value="val2" label="Trung bình" />
                            <Radio value="val3" label="Vị cay" />
                        </RadioGroup>
                    </Box>
                    <Box marginBottom={10}>
                        <Typography subSectionTitle>Alege un sos</Typography>
                        <RadioGroup
                            name={groupName5}
                            selectedValue={group1SelectedValue}
                            onChange={handleChangeGroup1}
                            marginBottom={8}
                        >
                            <Radio value="val1" label="Blând" />
                            <Radio value="val2" label="Mediu" />
                            <Radio value="val3" label="Picant" />
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
                </SideSheetBody>
                <SideSheetFooter style={{ justifyContent: 'flex-end' }}>
                    <Button tertiary onClick={onClose}>
                        Cancel
                    </Button>
                    <Button marginLeft={6} onClick={onClose}>
                        Confirm
                    </Button>
                </SideSheetFooter>
            </SideSheet>

            <Button onClick={() => setOpen(true)}>Configure</Button>
        </>
    );
};

export const DisableCloseByEscape = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    return (
        <>
            <SideSheet open={open} onClose={onClose} disableCloseByEscape>
                <SideSheetHeader
                    title="Header title"
                    description="Header description"
                />
                <SideSheetBody>Body content</SideSheetBody>
                <SideSheetFooter>Footer actions</SideSheetFooter>
            </SideSheet>

            <Button onClick={() => setOpen(true)}>No close by Escape</Button>
        </>
    );
};

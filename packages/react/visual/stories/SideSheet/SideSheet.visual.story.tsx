import React from 'react';

import {
    SideSheet,
    SideSheetHeader,
    SideSheetBody,
    SideSheetFooter,
    Dropdown,
    Radio,
    RadioGroup,
    Typography,
    Checkbox,
    Box,
    Button,
} from '../../../src/components';

export default {
    title: 'SideSheet',
    component: SideSheet,
};

export const SideSheetLayout = () => (
    <SideSheet zIndex={0} open={true}>
        <SideSheetHeader
            title="Header title"
            description="Header description"
        />
        <SideSheetBody>Body content</SideSheetBody>
        <SideSheetFooter>Footer actions</SideSheetFooter>
    </SideSheet>
);

export const SideSheetLayoutNoDescription = () => (
    <SideSheet zIndex={0} open={true}>
        <SideSheetHeader title="Header title" />
        <SideSheetBody>Body content</SideSheetBody>
        <SideSheetFooter>Footer actions</SideSheetFooter>
    </SideSheet>
);

export const WideLookExpandedOnLoadNoOverlay = () => (
    <SideSheet disableOverlay open={true} wide={true}>
        <SideSheetHeader
            title="Header title"
            description="Header description"
        />
        <SideSheetBody>Body content</SideSheetBody>
        <SideSheetFooter>Footer actions</SideSheetFooter>
    </SideSheet>
);

export const FixedHeaderAndFooterAndPopulatedWithContent = () => {
    const groupName1 = 'radioName1';
    const groupName2 = 'radioName2';
    const groupName3 = 'radioName3';
    const groupName4 = 'radioName4';
    const groupName5 = 'radioName5';

    return (
        <SideSheet open={true}>
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
                />
                <Dropdown
                    options={['French fries', 'Rice', 'Beans', 'Corn']}
                    onSelect={() => {}}
                    label="Side dish"
                    marginTop={2}
                    marginBottom={6}
                />
                <Box marginBottom={10}>
                    <Typography subSectionTitle>Pick a sauce</Typography>
                    <RadioGroup name={groupName1} marginBottom={8}>
                        <Radio value="val1" label="Mild" />
                        <Radio value="val2" label="Medium" />
                        <Radio value="val3" label="Spicy" />
                    </RadioGroup>
                </Box>
                <Box marginBottom={10}>
                    <Typography subSectionTitle>Wähle eine Sauce</Typography>
                    <RadioGroup name={groupName2} marginBottom={8}>
                        <Radio value="val1" label="Mild" />
                        <Radio value="val2" label="Medium" />
                        <Radio value="val3" label="Scharf" />
                    </RadioGroup>
                </Box>
                <Box marginBottom={10}>
                    <Typography subSectionTitle>Escoge una salsa</Typography>
                    <RadioGroup name={groupName3} marginBottom={8}>
                        <Radio value="val1" label="Leve" />
                        <Radio value="val2" label="Medio" />
                        <Radio value="val3" label="Picante" />
                    </RadioGroup>
                </Box>
                <Box marginBottom={10}>
                    <Typography subSectionTitle>Chọn nước sốt</Typography>
                    <RadioGroup name={groupName4} marginBottom={8}>
                        <Radio value="val1" label="Nhẹ" />
                        <Radio value="val2" label="Trung bình" />
                        <Radio value="val3" label="Vị cay" />
                    </RadioGroup>
                </Box>
                <Box marginBottom={10}>
                    <Typography subSectionTitle>Alege un sos</Typography>
                    <RadioGroup name={groupName5} marginBottom={8}>
                        <Radio value="val1" label="Blând" />
                        <Radio value="val2" label="Mediu" />
                        <Radio value="val3" label="Picant" />
                    </RadioGroup>
                </Box>
                <Box marginBottom={10}>
                    <Typography subSectionTitle marginTop={4}>
                        Extras
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                <Button tertiary>Cancel</Button>
                <Button marginLeft={6}>Confirm</Button>
            </SideSheetFooter>
        </SideSheet>
    );
};

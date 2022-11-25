/* eslint-disable no-console,import/no-unresolved */

import React, { useMemo, useState, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { add } from 'date-fns';
import { makeTheme, ThemeProvider } from '@deliveryhero/armor-system';

import {
    Box,
    Button,
    FormField,
    Typography,
    ContentSwitcher,
    ContentSwitcherControl,
} from '@deliveryhero/armor';
import { withWrapper } from '../../../helpers/Wrapper';
import { DatePicker, DateRangePicker, DateRangePickerPropsType } from '..';
import { DateVector } from '../utils/DateVector';
import { makeDateString } from '../__test__/util';

export default {
    title: 'Extras/DateRangePicker',
    component: DateRangePicker,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    return (
        <Box paddingTop={20}>
            <DateRangePicker data-testid-input="input42" />
        </Box>
    );
};

export const Large = () => {
    return (
        <>
            <Box paddingTop={20}>
                <Typography>Large input</Typography>
                <DateRangePicker data-testid-input="input42" large />
            </Box>
            <Box paddingTop={20}>
                <Typography>Normal input</Typography>
                <DateRangePicker data-testid-input="input42" />
            </Box>
        </>
    );
};

export const WithMaskedInput = () => {
    return (
        <Box paddingTop={20}>
            <DateRangePicker
                data-testid-input="input43"
                inputMaskEnabled={true}
            />
        </Box>
    );
};

export const Controlled = () => {
    const [dateRange, setDateRange] = useState<[Date, Date] | undefined | null>(
        [new Date(), new Date()],
    );

    const onDateValueChange = (range?: [Date, Date] | null) => {
        setDateRange(range);
        if (range) {
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                dateValue={dateRange}
                onDateValueChange={onDateValueChange}
            />
        </Box>
    );
};

export const Uncontrolled = () => {
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(),
        new Date(),
    ]);

    const onDateValueChange = (range?: [Date, Date] | null) => {
        if (range) {
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                defaultDateValue={dateRange}
                onDateValueChange={onDateValueChange}
                defaultOpen
            />
        </Box>
    );
};

export const UncontrolledWithTime = () => {
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(),
        new Date(),
    ]);

    const onDateValueChange = (range?: [Date, Date] | null) => {
        if (range) {
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                defaultDateValue={dateRange}
                onDateValueChange={onDateValueChange}
                defaultOpen
                enableTimePicker
            />
        </Box>
    );
};

export const WithConfirmation = () => {
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(2021, 4, 18, 10, 30),
        new Date(2021, 4, 28, 15, 40),
    ]);

    const onDateValueChange = (range?: [Date, Date] | null) => {
        if (range) {
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                defaultDateValue={dateRange}
                onDateValueChange={onDateValueChange}
                defaultOpen
                enableActionButtons
            />
        </Box>
    );
};

export const WithConfirmationAndTime = () => {
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(2021, 4, 18, 10, 30),
        new Date(2021, 4, 28, 15, 40),
    ]);

    const onDateValueChange = (range?: [Date, Date] | null) => {
        if (range) {
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                defaultDateValue={dateRange}
                onDateValueChange={onDateValueChange}
                defaultOpen
                enableActionButtons
                enableTimePicker
            />
        </Box>
    );
};

const moveForward = (range: [Date, Date]) => {
    const nextDateStart = DateVector.createFromLocalDate(range[0]);
    const nextDateEnd = DateVector.createFromLocalDate(range[1]);

    nextDateStart.addDay(1);
    nextDateStart.addMinute(1);
    nextDateEnd.addDay(1);
    nextDateEnd.addMinute(1);

    return [
        nextDateStart.convertToLocalDate(),
        nextDateEnd.convertToLocalDate(),
    ] as [Date, Date];
};

export const ControlledSetExternally = () => {
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(),
        new Date(),
    ]);

    const onDateValueChange = (range?: [Date, Date] | null) => {
        if (range) {
            setDateRange(range);
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    const updateDates = () => {
        setDateRange(moveForward(dateRange));
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <Button onClick={updateDates}>Update dates</Button>
            <DateRangePicker
                dateValue={dateRange}
                onDateValueChange={onDateValueChange}
                enableTimePicker
            />
        </Box>
    );
};

export const Many = () => {
    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker />
            <DateRangePicker />
            <br />
            <DateRangePicker />
        </Box>
    );
};

const customTheme = makeTheme({
    armor: {
        components: {
            DateRangePicker: {
                borderWidth: '10px',
            },
            DatePicker: {
                borderWidth: '10px',
            },
        },
    },
});

export const CustomTheme = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <DateRangePicker />
            <DatePicker />
        </ThemeProvider>
    );
};

export const WithTimePickerAndNotSelected = () => {
    return <DateRangePicker open enableTimePicker />;
};

const dateRangeStatic = [
    new Date(2021, 4, 18, 10, 30),
    new Date(2021, 4, 28, 15, 40),
] as [Date, Date];

export const NoMinWidthAutoCorrection = () => {
    return (
        <Box paddingTop={20} paddingLeft={50}>
            <FormField>
                <DateRangePicker
                    enableTimePicker
                    enableMinWidthAutoCorrection={false}
                    error
                    dateValue={dateRangeStatic}
                    width={70}
                />
            </FormField>
        </Box>
    );
};

export const AlwaysFiveDays = () => {
    const [dateStart, setDateStart] = useState(new Date());
    const value = useMemo(() => {
        return [
            dateStart,
            add(dateStart, { days: 5 }),
        ] as DateRangePickerPropsType['dateValue'];
    }, [dateStart]);

    return (
        <DateRangePicker
            enableMinWidthAutoCorrection={false}
            dateValue={value}
            onDateValueChange={(newValue) => {
                if (newValue) {
                    setDateStart(newValue[0]);
                }
            }}
        />
    );
};

export const Errored = () => {
    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker data-testid-input="input42" error />
        </Box>
    );
};

export const WithDisabledDates = () => {
    const [dateRange, setDateRange] = useState<[Date, Date] | undefined | null>(
        [new Date(), new Date()],
    );

    const onDateValueChange = (range?: [Date, Date] | null) => {
        setDateRange(range);
        if (range) {
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    const map = useMemo<Record<string, boolean>>(() => ({}), []);
    const freeMap = useMemo<Record<string, boolean>>(() => ({}), []);

    const isDateAllowed = useCallback(
        (date: Date) => {
            const dateString = makeDateString(date);
            if (!(dateString in map)) {
                map[dateString] = Math.random() * 1000 > 500;
            }

            return map[dateString];
        },
        [map],
    );

    const isDateFree = useCallback(
        (date: Date) => {
            const dateString = makeDateString(date);
            if (!(dateString in freeMap)) {
                if (map[dateString]) {
                    freeMap[dateString] = true;
                } else {
                    freeMap[dateString] = Math.random() * 1000 > 500;
                }
            }

            return freeMap[dateString];
        },
        [map, freeMap],
    );

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                dateValue={dateRange}
                onDateValueChange={onDateValueChange}
                isDateAllowed={isDateAllowed}
                isDateFree={isDateFree}
            />
        </Box>
    );
};

export const WithClearButton = () => {
    const [dateRange, setDateRange] = useState<[Date, Date] | undefined | null>(
        [new Date(), new Date()],
    );

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                dateValue={dateRange}
                onDateValueChange={setDateRange}
                enableCloseOnSelect
                enableClearSelectionButton
                enableActionButtons
            />
        </Box>
    );
};

export const AlwaysFiveDaysOneClick = () => {
    const [dateStart, setDateStart] = useState(new Date());
    const value = useMemo(() => {
        return [
            dateStart,
            add(dateStart, { days: 5 }),
        ] as DateRangePickerPropsType['dateValue'];
    }, [dateStart]);

    return (
        <DateRangePicker
            enableMinWidthAutoCorrection={false}
            enableOnChangeOnSingleClick={true}
            dateValue={value}
            onDateValueChange={(newValue) => {
                if (newValue) {
                    setDateStart(newValue[0]);
                }
            }}
        />
    );
};

export const WithHeadSlotControlled = () => {
    const [dateRange, setDateRange] = useState<[Date, Date] | undefined | null>(
        null,
    );

    const handleDateValueChange = (range?: [Date, Date] | null) => {
        setDateRange(range);
    };

    const headSlot = (
        <ContentSwitcher
            defaultSwitchName="3"
            onSwitchNameChange={(switchName: string) => {
                const currentDate = new Date();
                switch (switchName) {
                    case '1':
                        handleDateValueChange([
                            new Date(
                                currentDate.setDate(currentDate.getDate() - 7),
                            ),
                            new Date(),
                        ]);
                        break;
                    case '2':
                        handleDateValueChange([
                            new Date(
                                currentDate.setDate(currentDate.getDate() - 30),
                            ),
                            new Date(),
                        ]);
                        break;
                    case '3':
                        handleDateValueChange(null);
                        break;
                    default:
                        handleDateValueChange(null);
                        break;
                }
            }}
        >
            <ContentSwitcherControl switchName="1">
                <Typography small>Last 7 days</Typography>
            </ContentSwitcherControl>
            <ContentSwitcherControl switchName="2">
                <Typography small>Last 30 days</Typography>
            </ContentSwitcherControl>
            <ContentSwitcherControl switchName="3">
                <Typography small>Custom</Typography>
            </ContentSwitcherControl>
        </ContentSwitcher>
    );

    return (
        <DateRangePicker
            dateValue={dateRange}
            headSlot={headSlot}
            onDateValueChange={handleDateValueChange}
        />
    );
};

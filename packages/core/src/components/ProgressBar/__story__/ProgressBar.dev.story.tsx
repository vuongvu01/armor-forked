/* eslint-disable no-console,import/no-unresolved */

import React, { useState, useEffect } from 'react';
import { withWrapper } from '../../../helpers/Wrapper';

import { ProgressBar } from '../ProgressBar';
import { Stack } from '../../Stack';
import { Typography } from '../../Typography';

export default {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    const [progress, setProgress] = useState(0);
    const [update, setupdate] = useState(false);

    useEffect(() => {
        setProgress((p) => (p >= 100 ? 0 : p + 10));
    }, [update]);

    return (
        <>
            <button
                onClick={() => {
                    setupdate((t) => !t);
                }}
            >
                Update
            </button>
            <Stack gutterSpacing={3} marginY={4}>
                <Typography label medium marginY={4}>
                    Default
                </Typography>
                <ProgressBar progress={progress} />
                <Typography label medium marginY={4}>
                    With custom height and width
                </Typography>
                <ProgressBar progress={progress} height="10px" width="50%" />
                <Typography label medium marginY={4}>
                    With custom color
                </Typography>
                <ProgressBar
                    progress={progress}
                    color="red"
                    backgroundColor="grey"
                />
            </Stack>
        </>
    );
};

export const PresetColors = () => {
    const [progress, setProgress] = useState(0);
    const [update, setupdate] = useState(false);

    useEffect(() => {
        setProgress((p) => (p >= 100 ? 0 : p + 10));
    }, [update]);

    return (
        <>
            <button
                onClick={() => {
                    setupdate((t) => !t);
                }}
            >
                Update
            </button>
            <Stack gutterSpacing={3} marginY={4}>
                <Typography label medium marginY={4}>
                    Success
                </Typography>
                <ProgressBar progress={progress} preset="success" />
                <Typography label medium marginY={4}>
                    Info
                </Typography>
                <ProgressBar progress={progress} preset="info" />
                <Typography label medium marginY={4}>
                    Warning
                </Typography>
                <ProgressBar progress={progress} preset="warning" />
                <Typography label medium marginY={4}>
                    Error
                </Typography>
                <ProgressBar progress={progress} preset="error" />
                <Typography label medium marginY={4}>
                    File Upload
                </Typography>
                <ProgressBar progress={progress} preset="fileUpload" />
            </Stack>
        </>
    );
};

export const AutoRunode = () => {
    return (
        <>
            <Stack gutterSpacing={3} marginY={4}>
                <Typography label medium marginY={4}>
                    Auto run, duration 10s
                </Typography>
                <ProgressBar autoRun duration={10000} preset="fileUpload" />
                <Typography label medium marginY={4}>
                    Auto run, duration 10s, reversed
                </Typography>
                <ProgressBar
                    autoRun
                    duration={10000}
                    reverse
                    preset="fileUpload"
                />
            </Stack>
        </>
    );
};

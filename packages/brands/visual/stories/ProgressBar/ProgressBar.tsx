import React from 'react';
import { Stack, ProgressBar } from '@deliveryhero/armor';

export default {
    title: 'ProgressBar',
    component: ProgressBar,
};

export const Basic = () => {
    return (
        <Stack gutterSpacing={2}>
            <ProgressBar progress={50} />
            <ProgressBar progress={50} height="10px" width="50%" />
            <ProgressBar progress={50} color="red" backgroundColor="grey" />
        </Stack>
    );
};

export const PresetColors = () => (
    <Stack gutterSpacing={2}>
        <ProgressBar progress={50} preset="success" />
        <ProgressBar progress={50} preset="info" />
        <ProgressBar progress={50} preset="warning" />
        <ProgressBar progress={50} preset="error" />
        <ProgressBar progress={50} preset="fileUpload" />
    </Stack>
);

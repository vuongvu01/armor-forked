import React from 'react';
// eslint-disable-next-line import/no-unresolved

import { Switch } from '../../../src';

export default {
    title: 'Switch',
    component: Switch,
};

export const States = () => {
    return (
        <>
            <h2>States</h2>
            <p>Enabled / OFF</p>
            <Switch onChange={() => {}} label="Enable location" />
            <p>Enabled / ON by default</p>
            <Switch
                defaultChecked
                onChange={() => {}}
                label="Enable delivery"
            />

            <p>Disabled / OFF</p>
            <Switch disabled onChange={() => {}} label="Enable delivery" />
            <p>Disabled / ON</p>
            <Switch
                defaultChecked
                disabled
                onChange={() => {}}
                label="Enable location"
            />
        </>
    );
};

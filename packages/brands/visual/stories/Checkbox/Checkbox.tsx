import React from 'react';
import { Checkbox } from '@deliveryhero/armor';

export default {
    title: 'Checkbox',
    component: Checkbox,
};

export const States = () => {
    return (
        <>
            <Checkbox onChange={() => {}} label="add mozzarella" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>Checked by default</p>
                <Checkbox
                    defaultChecked
                    onChange={() => {}}
                    label="add olives"
                    marginBottom={2}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>Checked dash by default</p>
                <Checkbox
                    defaultChecked
                    onChange={() => {}}
                    label="add olives"
                    checkedIcon="dash"
                    marginBottom={2}
                />
            </div>
            <div>
                <p>Default disabled</p>
                <Checkbox disabled label="add olives" />
            </div>
            <div>
                <p>Default checked disabled</p>
                <Checkbox
                    disabled
                    checked
                    onChange={() => {}}
                    label="add mozzarella"
                />
            </div>
            <div>
                <p>Default checked dash disabled</p>
                <Checkbox
                    disabled
                    checked
                    onChange={() => {}}
                    checkedIcon="dash"
                    label="add mozzarella"
                />
            </div>
        </>
    );
};

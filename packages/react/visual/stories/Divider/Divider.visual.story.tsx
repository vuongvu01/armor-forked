import React from 'react';
import { Divider } from '../../../src/components/Divider';

export default {
    title: 'Divider',
    component: Divider,
};

export const HorizontalDivider = () => {
    return <Divider />;
};

export const VerticalDivider = () => {
    return (
        <div
            style={{
                height: '10rem',
                border: '1px solid black',
            }}
        >
            <Divider vertical marginLeft={10} />
        </div>
    );
};

export const DividerWithSpacing = () => {
    return (
        <Divider
            marginTop={10}
            marginBottom={10}
            marginLeft={10}
            marginRight={10}
        />
    );
};

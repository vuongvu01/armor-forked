import React from 'react';

import { ExpansionIndicator } from '../../../src/components';

export default {
    title: 'ExpansionIndicator',
    component: ExpansionIndicator,
};

export const Collapsed = () => <ExpansionIndicator />;

export const Disabled = () => <ExpansionIndicator disabled />;

export const Expanded = () => <ExpansionIndicator isExpanded />;

export const WithSeparator = () => <ExpansionIndicator displaySeparator />;

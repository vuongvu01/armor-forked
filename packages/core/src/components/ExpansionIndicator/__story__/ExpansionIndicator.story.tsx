import React, { useState } from 'react';

import { ExpansionIndicator } from '../ExpansionIndicator';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/ExpansionIndicator',
    component: ExpansionIndicator,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => <ExpansionIndicator />;

export const Disabled = () => <ExpansionIndicator disabled />;

export const IncreasedArea = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <ExpansionIndicator
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
            padding={5}
        />
    );
};

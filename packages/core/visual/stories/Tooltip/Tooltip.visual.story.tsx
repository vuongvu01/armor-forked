import React from 'react';
import { DisablePortal } from '@deliveryhero/armor-system';

import { Tooltip } from '../../../src/components/Tooltip';
import { Button } from '../../../src/components/Button';
import { Checkbox } from '../../../src';

export default {
    title: 'Tooltip',
    component: Tooltip,
};

export const PlacementTop = () => {
    return (
        <DisablePortal>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Tooltip align="top" content={'Top'} defaultOpen>
                <Button>Top</Button>
            </Tooltip>
        </DisablePortal>
    );
};

export const PlacementBottom = () => {
    return (
        <DisablePortal>
            <Tooltip align="bottom" content={'Bottom'} defaultOpen>
                <Button>Bottom</Button>
            </Tooltip>
        </DisablePortal>
    );
};

export const DisplayOnlyChildrenWhenNoContentSpecified = () => {
    return (
        <DisablePortal>
            <Tooltip align="bottom" defaultOpen>
                <Button>Bottom</Button>
            </Tooltip>
        </DisablePortal>
    );
};

export const DefaultOpenSmall = () => {
    return (
        <DisablePortal>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Tooltip align="top" content={'Top'} small defaultOpen>
                <Button>Top</Button>
            </Tooltip>
        </DisablePortal>
    );
};

export const ControlledBodyWidth = () => {
    return (
        <DisablePortal>
            <Tooltip
                align="bottom"
                content="From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body. From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body. From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body"
                defaultOpen
                maxWidth="300px"
            >
                <Button marginLeft={30}>Controlled width</Button>
            </Tooltip>
        </DisablePortal>
    );
};

export const OnCheckboxWithCustomOffset = () => {
    return (
        <DisablePortal>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Tooltip
                content="This week contains at least one sub-category without availability"
                align="top-start"
                arrowPadding={10}
                offset={[-10, 10]}
                open
            >
                <Checkbox
                    disabled
                    style={{ marginRight: '1rem', paddingTop: '0.2rem' }}
                    checked
                />
            </Tooltip>
        </DisablePortal>
    );
};

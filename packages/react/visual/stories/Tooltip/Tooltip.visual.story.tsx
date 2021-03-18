import React from 'react';

import { Tooltip } from '../../../src/components/Tooltip';
import { Button } from '../../../src/components/Button';

export default {
    title: 'Tooltip',
    component: Tooltip,
};

export const PlacementTop = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Tooltip align="top" content={'Top'} defaultOpen>
                <Button>Top</Button>
            </Tooltip>
        </>
    );
};

export const PlacementBottom = () => {
    return (
        <>
            <Tooltip align="bottom" content={'Bottom'} defaultOpen>
                <Button>Bottom</Button>
            </Tooltip>
        </>
    );
};

export const DefaultOpenSmall = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Tooltip align="top" content={'Top'} small defaultOpen>
                <Button>Top</Button>
            </Tooltip>
        </>
    );
};

export const ControlledBodyWidth = () => {
    return (
        <>
            <Tooltip
                align="bottom"
                content="From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body. From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body. From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body"
                defaultOpen
                maxWidth="300px"
            >
                <Button marginLeft={30}>Controlled width</Button>
            </Tooltip>
        </>
    );
};

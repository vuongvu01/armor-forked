/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Tooltip, IconButton } from '@deliveryhero/armor';
import { PlaceholderIcon } from '@deliveryhero/armor-icons';

const withCanvas = (Story: any) => (
    <div
        style={{
            padding: '300px',
        }}
    >
        <Story />
    </div>
);

export default {
    title: 'Tooltip',
    component: Tooltip,
    decorators: [withCanvas],
};

export const Small = () => (
    <Tooltip content="Small" small open>
        <IconButton light>
            <PlaceholderIcon small />
        </IconButton>
    </Tooltip>
);

export const Regular = () => (
    <Tooltip content="Regular" open>
        <IconButton light>
            <PlaceholderIcon small />
        </IconButton>
    </Tooltip>
);

export const Error = () => (
    <Tooltip content="Error" error open>
        <IconButton light>
            <PlaceholderIcon small />
        </IconButton>
    </Tooltip>
);

export const MaxWidth = () => (
    <Tooltip
        content="From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body. From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body. From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body"
        defaultOpen
        maxWidth="300px"
    >
        <IconButton light>
            <PlaceholderIcon small />
        </IconButton>
    </Tooltip>
);

export const CustomOffset = () => (
    <Tooltip content="Tooltip" defaultOpen offset={[0, 15]}>
        <IconButton light>
            <PlaceholderIcon small />
        </IconButton>
    </Tooltip>
);

// eslint-disable-next-line react/display-name
const makeAlign = (align: any) => () =>
    (
        <Tooltip content={align} align={align} open>
            <IconButton light>
                <PlaceholderIcon small />
            </IconButton>
        </Tooltip>
    );

export const AlignTopStart = makeAlign('top-start');
export const AlignTop = makeAlign('top');
export const AlignTopEnd = makeAlign('top-end');

export const AlignRightStart = makeAlign('right-start');
export const AlignRight = makeAlign('right');
export const AlignRightEnd = makeAlign('right-end');

export const AlignBottomStart = makeAlign('bottom-start');
export const AlignBottom = makeAlign('bottom');
export const AlignBottomEnd = makeAlign('bottom-end');

export const AlignLeftStart = makeAlign('left-start');
export const AlignLeft = makeAlign('left');
export const AlignLeftEnd = makeAlign('left-end');

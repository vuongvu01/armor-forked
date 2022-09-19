/* eslint-disable no-console */

import React from 'react';

import { PlaceholderIcon } from '@deliveryhero/armor-icons';
import { FlexItem } from '../../Flex';
import { IconButton } from '../../IconButton';
import { TextInput } from '../../TextInput';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
import { TOOLTIP_ALIGN_PLACEMENTS } from '../constants';
import { TooltipCanvas } from './style';

export default {
    title: 'Core/Tooltip',
    component: Tooltip,
};

export const Sizes = () => (
    <TooltipCanvas>
        <FlexItem>
            <Tooltip content="Small" small open>
                <IconButton light>
                    <PlaceholderIcon small />
                </IconButton>
            </Tooltip>
        </FlexItem>

        <FlexItem>
            <Tooltip content="Regular" open>
                <IconButton light>
                    <PlaceholderIcon small />
                </IconButton>
            </Tooltip>
        </FlexItem>
    </TooltipCanvas>
);

export const Align = () => (
    <TooltipCanvas>
        {TOOLTIP_ALIGN_PLACEMENTS.map((align) => (
            <FlexItem key={align}>
                <Tooltip content={align} align={align as any} open>
                    <IconButton light>
                        <PlaceholderIcon small />
                    </IconButton>
                </Tooltip>
            </FlexItem>
        ))}
    </TooltipCanvas>
);

export const Error = () => (
    <TooltipCanvas>
        <FlexItem>
            <Tooltip content="Tooltip" error open>
                <IconButton light>
                    <PlaceholderIcon small />
                </IconButton>
            </Tooltip>
        </FlexItem>
    </TooltipCanvas>
);

export const WithDisabledButton = () => (
    <TooltipCanvas>
        <FlexItem>
            <Tooltip content="Tooltip" defaultOpen>
                <Button small disabled>
                    Hover me
                </Button>
            </Tooltip>
        </FlexItem>
    </TooltipCanvas>
);

export const WithDisabledTextField = () => (
    <TooltipCanvas>
        <FlexItem>
            <Tooltip content="Tooltip" defaultOpen>
                <TextInput disabled label="First name" value="J. P. Anderson" />
            </Tooltip>
        </FlexItem>
    </TooltipCanvas>
);

export const Controlled = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <TooltipCanvas>
            <FlexItem>
                <Tooltip content="Tooltip" open={open}>
                    <Button small onClick={() => setOpen(!open)}>
                        Toggle
                    </Button>
                </Tooltip>
            </FlexItem>
        </TooltipCanvas>
    );
};

export const DefaultOpen = () => {
    return (
        <TooltipCanvas>
            <FlexItem>
                <Tooltip content="Tooltip" defaultOpen>
                    <IconButton light>
                        <PlaceholderIcon small />
                    </IconButton>
                </Tooltip>
            </FlexItem>
        </TooltipCanvas>
    );
};

export const MaxWidth = () => {
    return (
        <TooltipCanvas>
            <FlexItem>
                <Tooltip
                    content="From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body. From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body. From what i am seeing in the code, the small parameter is only responsible for decreasing the padding in the tooltip body"
                    defaultOpen
                    maxWidth="300px"
                >
                    <IconButton light>
                        <PlaceholderIcon small />
                    </IconButton>
                </Tooltip>
            </FlexItem>
        </TooltipCanvas>
    );
};

export const CustomOffset = () => {
    return (
        <TooltipCanvas>
            <FlexItem>
                <Tooltip content="Tooltip" defaultOpen offset={[0, 15]}>
                    <IconButton light>
                        <PlaceholderIcon small />
                    </IconButton>
                </Tooltip>
            </FlexItem>
        </TooltipCanvas>
    );
};

export const DisableInteractive = () => (
    <TooltipCanvas>
        <FlexItem>
            <Tooltip
                content={
                    <div>
                        This tooltip is <button>interactive</button>
                    </div>
                }
                defaultOpen
            >
                <Button small>Default (interactive)</Button>
            </Tooltip>
        </FlexItem>
        <FlexItem>
            <Tooltip
                content="This tooltip will close"
                disableInteractive
                defaultOpen
            >
                <Button small>Disable Interactive</Button>
            </Tooltip>
        </FlexItem>
    </TooltipCanvas>
);

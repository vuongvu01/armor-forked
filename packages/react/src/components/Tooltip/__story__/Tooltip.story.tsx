/* eslint-disable no-console */

import React, { useEffect, useRef, useState } from 'react';
import {
    withKnobs,
    text,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';

import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
import { FileUploadButton } from '../../FileUploadButton';
import { withWrapper } from '../../../helpers/Wrapper';
import { Checkbox } from '../../Checkbox';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Basic = () => (
    <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button marginRight={2}>No tooltip</Button>
        <Tooltip content={text('Children', 'Hello world!')} align="top">
            <button
                onMouseOver={() =>
                    // eslint-disable-next-line no-console
                    console.log('Original event still works: onMouseOver')
                }
                onMouseOut={() =>
                    // eslint-disable-next-line no-console
                    console.log('Original event still works: onMouseOut')
                }
            >
                Default
            </button>
        </Tooltip>
        <Tooltip content={text('Children', 'Hello world!')}>
            <Button marginLeft={2}>Should be as well</Button>
        </Tooltip>
        <Tooltip content={'Sort by Ascending'} small>
            <Button marginLeft={2}>Small tooltip</Button>
        </Tooltip>
    </>
);

export const Empty = () => (
    <>
        <Button marginRight={2}>Left</Button>
        <Tooltip>
            <Button>I got a tooltip, but empty!</Button>
        </Tooltip>
    </>
);

export const TopBottom = () => (
    <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Tooltip align="top" content={'Hello, top'}>
            <Button>Top</Button>
        </Tooltip>
        <Tooltip align="bottom" content={'Hello, bottom'}>
            <Button>Bottom</Button>
        </Tooltip>
    </>
);

export const StartEnd = () => (
    <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Tooltip align="top-start" content="Hello, top start">
            <Button marginRight={2}>Top start</Button>
        </Tooltip>
        <Tooltip align="top-end" content="Top end">
            <Button>Top end</Button>
        </Tooltip>
        <br />
        <Tooltip align="bottom-start" content="Hello, bottom start">
            <Button marginRight={2} marginTop={2}>
                Bottom start
            </Button>
        </Tooltip>
        <Tooltip align="bottom-end" content="Hello, bottom end">
            <Button marginTop={2}>Bottom end</Button>
        </Tooltip>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </>
);

export const WeirdComponents = () => (
    <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Tooltip align="top" content={'Top'}>
            Text!
        </Tooltip>
        <br />
        <Tooltip align="top" content={'Top'}>
            <div>Multiple</div>
            <div>Nodes</div>
        </Tooltip>
        <Tooltip align="top" content={'Top'}>
            <>
                <div>Fragment</div>
                <div>Fragment</div>
            </>
        </Tooltip>
    </>
);

export const OriginalRef = () => {
    const btnRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        setTimeout(() => {
            // eslint-disable-next-line no-console
            console.log(btnRef.current);
        }, 0);
    }, []);

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Tooltip align="top" content={'Top'}>
                <Button ref={btnRef}>Top</Button>
            </Tooltip>
        </>
    );
};

export const Controlled = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Tooltip align="top" content={'Top'} open={open}>
                <Button>Top</Button>
            </Tooltip>

            <Button onClick={() => setOpen(!open)}>Open tooltip</Button>
        </>
    );
};

export const DefaultOpen = () => {
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

export const ControlledBodyWidth = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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

export const OnCheckboxWithCustomOffset = () => {
    return (
        <>
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
            >
                <Checkbox
                    disabled
                    style={{ marginRight: '1rem', paddingTop: '0.2rem' }}
                    checked
                />
            </Tooltip>
        </>
    );
};

export const NoTooltipDisplayOnEmptyContent = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Tooltip align="top">
                <Button>Top</Button>
            </Tooltip>
        </>
    );
};

export const OnFileUploader = () => {
    return (
        <div>
            <FileUploadButton
                onFileSelect={() => console.log('select')}
                onClick={() => console.log('click')}
            >
                {text('Button children', 'Upload file...')}
            </FileUploadButton>
            <Tooltip content="Dummy Text">
                <FileUploadButton
                    onFileSelect={() => console.log('select')}
                    onClick={() => console.log('click on file upload')}
                >
                    {text('Button children', 'Upload file...')}
                </FileUploadButton>
            </Tooltip>
            <Tooltip content="Dummy Text">
                <Button onClick={() => console.log('click on regular button')}>
                    {text('Button children', 'Upload file...')}
                </Button>
            </Tooltip>
        </div>
    );
};

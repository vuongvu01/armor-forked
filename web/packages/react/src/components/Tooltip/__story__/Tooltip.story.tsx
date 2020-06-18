import React, { useEffect, useRef } from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved
import { action } from '@storybook/addon-actions';

import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    decorators: [withKnobs],
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
        <Tooltip content={text('Children', 'Dark!')} dark align="bottom-start">
            <button>Dark</button>
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
        <Tooltip align="top" content={'Top'}>
            <Button>Top</Button>
        </Tooltip>
        <Tooltip align="bottom" content={'Bottom'}>
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
        <Tooltip align="top-start" content="Top start">
            <Button marginRight={2}>Top start</Button>
        </Tooltip>
        <Tooltip align="top-end" content="Top end">
            <Button>Top end</Button>
        </Tooltip>
        <br />
        <Tooltip align="bottom-start" content="Bottom start">
            <Button marginRight={2} marginTop={2}>
                Bottom start
            </Button>
        </Tooltip>
        <Tooltip align="bottom-end" content="Bottom end">
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
    const btnRef = useRef();
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

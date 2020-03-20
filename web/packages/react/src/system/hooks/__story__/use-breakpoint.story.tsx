import React from 'react';
import { Button } from '../../../components';
import { useBreakpointUp, useBreakpointDown } from '../use-breakpoint';

export default {
    title: 'useBreakpoint()',
    component: Button,
    decorators: [],
    parameters: {},
};

const WrapperUp = () => {
    const match = useBreakpointUp('md');

    return (
        <Button>
            {match && <>The screen is big</>}
            {!match && <>The screen is small</>}
        </Button>
    );
};

export const BreakpointUp = () => <WrapperUp />;

const WrapperDown = () => {
    const match = useBreakpointDown('md');

    return (
        <Button>
            {match && <>The screen is small</>}
            {!match && <>The screen is big</>}
        </Button>
    );
};

export const BreakpointDown = () => <WrapperDown />;

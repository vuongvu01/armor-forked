import React from 'react';
import {
    withKnobs,
    text,
    number,
    color,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
import { EditIconShape } from '../../../icons/EditIcon';
import { SVGIcon } from '../SVGIcon';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/SVGIcon',
    component: SVGIcon,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Playground = () => (
    <SVGIcon
        width={number('Size', 30)}
        title={text('Title', 'Edit icon')}
        color={color('Color', '#000')}
    >
        <EditIconShape />
    </SVGIcon>
);

export const InheritColor = () => (
    <div style={{ color: 'blue' }}>
        <SVGIcon>
            <EditIconShape />
        </SVGIcon>
    </div>
);

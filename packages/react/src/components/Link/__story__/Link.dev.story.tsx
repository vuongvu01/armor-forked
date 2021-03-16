/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import { text } from '@storybook/addon-knobs';
import { withWrapper } from '../../../helpers/Wrapper';
import { MapIcon } from '../../../../../icons/src/icons/Map';
import { Typography } from '../../Typography';

import { Link } from '../Link';

export default {
    title: 'Components/Link',
    component: Link,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    return (
        <Link href="https://www.google.com" small>
            Link here
        </Link>
    );
};

export const Medium = () => {
    return <Link medium>{text('Children', 'Link here')}</Link>;
};

export const Large = () => {
    return <Link large>Link here</Link>;
};

export const Disabled = () => {
    return <Link disabled>Link here</Link>;
};

export const LinkWithIcon = () => {
    return (
        <>
            <Link>
                <MapIcon marginRight={2}></MapIcon>
                Link here
            </Link>
        </>
    );
};

export const Inline = () => {
    return <Link inline>Link here</Link>;
};

export const InContext = () => {
    return (
        <>
            <Typography>
                Please follow the <Link>link</Link> to find out more
            </Typography>
        </>
    );
};

/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import { text } from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MapIcon } from '@deliveryhero/armor-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';
import { withWrapper } from '../../../helpers/Wrapper';
import { Typography } from '../../Typography';

import { Link } from '../Link';

export default {
    title: 'Components/Link',
    component: Link,
    decorators: [withWrapper],
    parameters: {},
};

export const Small = () => {
    return <Link small>{text('Children', 'Link here')}</Link>;
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

export const Underlined = () => {
    return <Link underline>Link here</Link>;
};

export const InContext = () => (
    <>
        <Typography>
            Please follow the <Link>link</Link> to find out more Go to{' '}
            <Link href="https://www.deliveryhero.com" target="_blank">
                DeliveryHero
            </Link>{' '}
            to find out more
        </Typography>
    </>
);

export const LinkWithRouter = () => (
    <BrowserRouter>
        <Typography>
            This link user react router Link to{' '}
            <Link tag={RouterLink} to="/homepage">
                link
            </Link>{' '}
            to /homepage
        </Typography>
    </BrowserRouter>
);

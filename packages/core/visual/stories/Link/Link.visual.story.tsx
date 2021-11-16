import React from 'react';

import { Link } from '../../../src/components/Link';

export default {
    title: 'Link',
    component: Link,
};

export const DefaultLayout = () => <Link>Link here</Link>;

export const WithCustomMargins = () => (
    <Link marginLeft={10} marginRight={4} marginY={4}>
        Link here
    </Link>
);

export const InlinedSmallLink = () => (
    <Link underline small>
        Link here
    </Link>
);

export const DisabledLargeLink = () => (
    <Link disabled large>
        Link here
    </Link>
);

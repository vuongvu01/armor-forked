import React from 'react';
import { Badge } from '@deliveryhero/armor';

export default {
    title: 'Badge',
    component: Badge,
};

export const DefaultLayout = () => <Badge>42</Badge>;

export const WithCustomMargins = () => (
    <Badge marginLeft={10} marginRight={4} marginY={4}>
        42
    </Badge>
);

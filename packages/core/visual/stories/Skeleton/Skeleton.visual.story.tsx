import React from 'react';

import { Skeleton } from '../../../src';

export default {
    title: 'Skeleton',
    component: Skeleton,
};

export const Shapes = () => {
    return (
        <>
            <Skeleton animated={false} width={78} height={6} rounded />
            <Skeleton animated={false} width={78} height={12} />
            <Skeleton animated={false} width={30} height={30} />
            <Skeleton animated={false} width={30} height={30} rounded />
        </>
    );
};

export const ImagePlaceholders = () => {
    return (
        <>
            <Skeleton
                width={30}
                height={30}
                imagePlaceholder
                animated={false}
            />
            <Skeleton
                width={30}
                height={30}
                rounded
                imagePlaceholder
                animated={false}
            />
        </>
    );
};

export const CustomSizeAndMargins = () => {
    return (
        <>
            <Skeleton width="20px" height="40px" animated={false} />
            <Skeleton width="100px" height="80px" animated={false} />
            <Skeleton width="20px" height="20px" animated={false} />
            <Skeleton height="30px" width="30px" rounded animated={false} />
        </>
    );
};
import React from 'react';

import * as I from '../../src/illustrations';

export default {
    title: 'Illustrations',
    component: I,
};

export const AllIllustrations = () => (
    <>
        {Object.values(I)
            .sort()
            .map((IllustrationComponent, index) => {
                return <IllustrationComponent width="100px" key={index} />;
            })}
    </>
);

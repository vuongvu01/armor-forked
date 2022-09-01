import React from 'react';
import { withWrapper } from '../../../helpers/Wrapper';
import { GroupHelper } from '../../../helpers/GroupHelper';

import { ClearButton } from '../ClearButton';

export default {
    title: 'Core/ClearButton',
    component: ClearButton,
    decorators: [withWrapper],
    parameters: {},
};

const groupStyle = {
    display: 'flex',
    alignItems: 'flex-end',
};

export const TypeCircleFilledWithAllStates = () => {
    return (
        <GroupHelper styles={groupStyle}>
            <ClearButton type="circle-filled" marginRight={1} />
            <ClearButton type="circle-filled" state="hover" marginRight={1} />
            <ClearButton type="circle-filled" state="pressed" marginRight={1} />
            <ClearButton type="circle-filled" state="disabled" />
        </GroupHelper>
    );
};

export const TypeThinWithAllStates = () => {
    return (
        <GroupHelper styles={groupStyle}>
            <ClearButton type="thin" marginRight={1} />
            <ClearButton type="thin" state="hover" marginRight={1} />
            <ClearButton type="thin" state="pressed" marginRight={1} />
            <ClearButton type="thin" state="disabled" />
        </GroupHelper>
    );
};

export const TypeCircleFilledWithIconSizes = () => {
    return (
        <GroupHelper styles={groupStyle}>
            <ClearButton
                type="circle-filled"
                iconSize="medium"
                marginRight={1}
            />
            <ClearButton
                type="circle-filled"
                iconSize="large"
                marginRight={1}
            />
        </GroupHelper>
    );
};

export const TypeCircleFilledWithSizes = () => {
    return (
        <GroupHelper styles={groupStyle}>
            <ClearButton type="circle-filled" size="medium" marginRight={1} />
            <ClearButton type="circle-filled" size="large" marginRight={1} />
        </GroupHelper>
    );
};

export const TypeThinWithIconSizes = () => {
    return (
        <GroupHelper styles={groupStyle}>
            <ClearButton type="thin" iconSize="small" marginRight={1} />
            <ClearButton type="thin" iconSize="medium" marginRight={1} />
        </GroupHelper>
    );
};

export const TypeThinWithSizes = () => {
    return (
        <GroupHelper styles={groupStyle}>
            <ClearButton type="thin" size="medium" marginRight={1} />
            <ClearButton type="thin" size="large" marginRight={1} />
        </GroupHelper>
    );
};

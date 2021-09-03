import React, { FunctionComponent } from 'react';

import { Container, PageOffset, Story } from '../../components';
import { PageLayout } from '../../components/PageLayout';

import * as DropdownStories from '../../../../src/components/Dropdown/__story__/Dropdown.dev.story';

type DropdownPagePropsType = {};

const Dropdown: FunctionComponent<DropdownPagePropsType> = () => {
    return (
        <PageLayout title="Dropdown">
            <br />
            <br />
            <br />
            <br />
            Dropdown stories
            <Story stories={DropdownStories} />
            <PageOffset />
        </PageLayout>
    );
};

export default Dropdown;

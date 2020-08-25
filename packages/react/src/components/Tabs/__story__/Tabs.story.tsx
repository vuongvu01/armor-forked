import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Tabs } from '../Tabs';
import { Box } from '../../Box';
import { Tab } from '../../Tab';
import { TabView } from '../../TabView';

export default {
    title: 'Components/Tabs',
    component: Tabs,
    decorators: [withKnobs],
    parameters: {},
};

export const DefaultLayoutMinimumConfiguration = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleChange = (tabIndex: number) => setSelectedTabIndex(tabIndex);

    return (
        <>
            <GroupHelper gap={2}>
                <Box
                    padding={3}
                    style={{
                        backgroundColor: '#F4F4F8',
                        height: '500px',
                        width: '600px',
                    }}
                >
                    <Tabs onSwitch={handleChange}>
                        <Tab label="Pizza" />
                        <Tab label="Pasta" />
                        <Tab label="Risotto" />
                        <Tab label="Beverages" />
                        <Tab label="Alcoholic beverages" disabled />
                    </Tabs>
                    <TabView value={0} selectedValue={selectedTabIndex}>
                        <p>Pizza</p>
                    </TabView>
                    <TabView value={1} selectedValue={selectedTabIndex}>
                        <p>Pasta</p>
                    </TabView>
                    <TabView value={2} selectedValue={selectedTabIndex}>
                        <p>Risotto</p>
                    </TabView>
                    <TabView value={3} selectedValue={selectedTabIndex}>
                        <p>Beverages</p>
                    </TabView>
                    <TabView value={4} selectedValue={selectedTabIndex}>
                        <p>Alcoholic beverages</p>
                    </TabView>
                </Box>
            </GroupHelper>
        </>
    );
};

export const DefaultActiveTabSetOnLoad = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleChange = (tabIndex: number) => setSelectedTabIndex(tabIndex);

    return (
        <>
            <GroupHelper gap={2}>
                <Box
                    padding={3}
                    style={{
                        backgroundColor: '#F4F4F8',
                        height: '500px',
                        width: '600px',
                    }}
                >
                    <Tabs defaultActiveTab={2} onSwitch={handleChange}>
                        <Tab label="Pizza" />
                        <Tab label="Pasta" />
                        <Tab label="Risotto" />
                        <Tab label="Beverages" />
                        <Tab label="Alcoholic beverages" disabled />
                    </Tabs>
                    <TabView value={0} selectedValue={selectedTabIndex}>
                        <p>Pizza</p>
                    </TabView>
                    <TabView value={1} selectedValue={selectedTabIndex}>
                        <p>Pasta</p>
                    </TabView>
                    <TabView value={2} selectedValue={selectedTabIndex}>
                        <p>Risotto</p>
                    </TabView>
                    <TabView value={3} selectedValue={selectedTabIndex}>
                        <p>Beverages</p>
                    </TabView>
                    <TabView value={4} selectedValue={selectedTabIndex}>
                        <p>Alcoholic beverages</p>
                    </TabView>
                </Box>
            </GroupHelper>
        </>
    );
};

export const MultipleTabsToSingleContent = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleChange = (tabIndex: number) => setSelectedTabIndex(tabIndex);

    return (
        <>
            <GroupHelper gap={2}>
                <Box
                    padding={3}
                    style={{
                        backgroundColor: '#F4F4F8',
                        height: '500px',
                        width: '600px',
                    }}
                >
                    <Tabs onSwitch={handleChange}>
                        <Tab label="Pizza" value={0} />
                        <Tab label="Pasta" value={0} />
                        <Tab label="Risotto" />
                        <Tab label="Beverages" value={0} />
                        <Tab label="Alcoholic beverages" disabled />
                    </Tabs>
                    <TabView value={0} selectedValue={selectedTabIndex}>
                        <p>
                            Pizza, Pasta and Beverages all point to the same
                            content
                        </p>
                    </TabView>
                    <TabView value={1} selectedValue={selectedTabIndex}>
                        <p>Pasta</p>
                    </TabView>
                    <TabView value={2} selectedValue={selectedTabIndex}>
                        <p>Risotto has a content of its own</p>
                    </TabView>
                    <TabView value={3} selectedValue={selectedTabIndex}>
                        <p>Beverages</p>
                    </TabView>
                    <TabView value={4} selectedValue={selectedTabIndex}>
                        <p>Alcoholic beverages</p>
                    </TabView>
                </Box>
            </GroupHelper>
        </>
    );
};

export const FullWidth = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleChange = (tabIndex: number) => setSelectedTabIndex(tabIndex);

    return (
        <>
            <GroupHelper gap={2}>
                <Box
                    padding={3}
                    style={{
                        height: '250px',
                        backgroundColor: '#F4F4F8',
                    }}
                >
                    <Tabs wide onSwitch={handleChange}>
                        <Tab label="Pizza" value={1} />
                        <Tab label="Pasta" value={2} />
                    </Tabs>
                    <TabView value={0} selectedValue={selectedTabIndex}>
                        <p>Pizza</p>
                    </TabView>
                    <TabView value={1} selectedValue={selectedTabIndex}>
                        <p>Pasta</p>
                    </TabView>
                    <TabView value={2} selectedValue={selectedTabIndex}>
                        <p>Risotto</p>
                    </TabView>
                    <TabView value={3} selectedValue={selectedTabIndex}>
                        <p>Beverages</p>
                    </TabView>
                    <TabView value={4} selectedValue={selectedTabIndex}>
                        <p>Alcoholic beverages</p>
                    </TabView>
                </Box>
            </GroupHelper>
        </>
    );
};

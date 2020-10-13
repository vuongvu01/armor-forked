import React, { useState } from 'react';

import { Tabs } from '../../../src/components/Tabs';
import { Box } from '../../../src/components/Box';
import { Tab } from '../../../src/components/Tab';
import { TabView } from '../../../src/components/TabView';

export default {
    title: 'Tabs',
    component: Tabs,
};

export const DefaultLayoutMinimumConfiguration = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleChange = (tabIndex: number) => setSelectedTabIndex(tabIndex);

    return (
        <Box
            padding={3}
            style={{
                height: '500px',
                width: '510px',
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
    );
};

export const DefaultActiveTabSetOnLoad = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleChange = (tabIndex: number) => setSelectedTabIndex(tabIndex);

    return (
        <Box
            padding={3}
            style={{
                height: '500px',
                width: '510px',
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
    );
};

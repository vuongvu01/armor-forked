import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

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
                <Tab>Pizza</Tab>
                <Tab>Pasta</Tab>
                <Tab>Risotto</Tab>
                <Tab>Beverages</Tab>
                <Tab disabled>Alcoholic beverages</Tab>
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

export const CustomRouterAndAnchorTags = () => {
    const [selectedTabIndex] = useState(0);

    return (
        <BrowserRouter>
            <Tabs>
                <Tab tag="a" href="https://www.google.com" target="_blank">
                    Pizza @href
                </Tab>
                <Tab tag={Link} to="/pasta">
                    Pasta
                </Tab>
                <Tab tag={Link} to="/risotto">
                    Risotto
                </Tab>
                <Tab tag={Link} to="/beverages">
                    Beverages
                </Tab>
                <Tab tag={Link} to="/alcoholic-beverages" disabled>
                    Alcoholic beverages
                </Tab>
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
        </BrowserRouter>
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
                <Tab>Pizza</Tab>
                <Tab>Pasta</Tab>
                <Tab>Risotto</Tab>
                <Tab>Beverages</Tab>
                <Tab disabled>Alcoholic beverages</Tab>
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

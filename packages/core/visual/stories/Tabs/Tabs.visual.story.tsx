import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { Tabs } from '../../../src/components/Tabs';
import { Box } from '../../../src/components/Box';
import { Tab } from '../../../src/components/Tab';
import { TabView } from '../../../src/components/TabView';
import { Badge } from '../../../src/components/Badge';
import { Stack, StackItem } from '../../../src/components/Stack';
import { Typography } from '../../../src/components/Typography';
import { Pack, PackItem } from '../../../src/components/Pack';
import { Indicator } from '../../../src/components/Indicator';

export default {
    title: 'Tabs',
    component: Tabs,
};

export const DefaultLayoutMinimumConfiguration = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<
        number | undefined
    >(0);

    const handleChange = (tabIndex?: number) => setSelectedTabIndex(tabIndex);

    return (
        <Box
            padding={3}
            style={{
                height: '500px',
                width: '610px',
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

export const WithCounterBadge = () => {
    const badgeLeftMargin = 4;
    const [selectedTabIndex, setSelectedTabIndex] = useState<
        number | undefined
    >(0);

    const handleChange = (tabIndex?: number) => setSelectedTabIndex(tabIndex);

    return (
        <>
            <Tabs onSwitch={handleChange}>
                <Tab>
                    Pizza <Badge marginLeft={badgeLeftMargin}>42</Badge>
                </Tab>
                <Tab>
                    Pasta<Badge marginLeft={badgeLeftMargin}>53</Badge>
                </Tab>
                <Tab>
                    Risotto<Badge marginLeft={badgeLeftMargin}>64</Badge>
                </Tab>
                <Tab>
                    Beverages<Badge marginLeft={badgeLeftMargin}>+2</Badge>
                </Tab>
                <Tab disabled>
                    Alcoholic beverages
                    <Badge marginLeft={badgeLeftMargin}>11</Badge>
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
        </>
    );
};

export const CustomRouterAndAnchorTags = () => {
    const [selectedTabIndex] = useState<number | undefined>(0);

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
    const [selectedTabIndex, setSelectedTabIndex] = useState<
        number | undefined
    >(0);

    const handleChange = (tabIndex?: number) => setSelectedTabIndex(tabIndex);

    return (
        <Box
            padding={3}
            style={{
                height: '500px',
                width: '610px',
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

export const FullWidth = () => {
    const badgeLeftMargin = 4;
    const [selectedTabIndex, setSelectedTabIndex] = useState<
        number | undefined
    >(0);

    const handleChange = (tabIndex?: number) => setSelectedTabIndex(tabIndex);

    return (
        <>
            <Tabs wide onSwitch={handleChange}>
                <Tab value={1}>
                    Pizza <Badge marginLeft={badgeLeftMargin}>42</Badge>
                </Tab>
                <Tab value={2}>Pasta</Tab>
            </Tabs>
            <TabView value={0} selectedValue={selectedTabIndex}>
                <p>Pizza</p>
            </TabView>
            <TabView value={1} selectedValue={selectedTabIndex}>
                <p>Pasta</p>
            </TabView>
        </>
    );
};

export const Alignment = () => {
    const [selectedTabIndex1, setSelectedTabIndex1] = useState<
        number | undefined
    >(0);
    const [selectedTabIndex2, setSelectedTabIndex2] = useState<
        number | undefined
    >(0);
    const [selectedTabIndex3, setSelectedTabIndex3] = useState<
        number | undefined
    >(0);

    const handleChange1 = (tabIndex1?: number) =>
        setSelectedTabIndex1(tabIndex1);
    const handleChange2 = (tabIndex2?: number) =>
        setSelectedTabIndex2(tabIndex2);
    const handleChange3 = (tabIndex3?: number) =>
        setSelectedTabIndex3(tabIndex3);

    return (
        <>
            <Stack>
                <StackItem marginBottom={5}>
                    <Typography>Left-aligned</Typography>
                    <Tabs onSwitch={handleChange1}>
                        <Tab>Pizza</Tab>
                        <Tab>Pasta</Tab>
                        <Tab>Risotto</Tab>
                    </Tabs>
                    <TabView value={0} selectedValue={selectedTabIndex1}>
                        <p>Pizza</p>
                    </TabView>
                    <TabView value={1} selectedValue={selectedTabIndex1}>
                        <p>Pasta</p>
                    </TabView>
                    <TabView value={2} selectedValue={selectedTabIndex1}>
                        <p>Risotto</p>
                    </TabView>
                </StackItem>
                <StackItem marginBottom={5}>
                    <Typography>Center-aligned</Typography>
                    <Pack justifyContent="center">
                        <PackItem>
                            <Tabs onSwitch={handleChange2}>
                                <Tab>Pizza</Tab>
                                <Tab>Pasta</Tab>
                                <Tab>Risotto</Tab>
                            </Tabs>
                        </PackItem>
                    </Pack>
                    <TabView value={0} selectedValue={selectedTabIndex2}>
                        <p>Pizza</p>
                    </TabView>
                    <TabView value={1} selectedValue={selectedTabIndex2}>
                        <p>Pasta</p>
                    </TabView>
                    <TabView value={2} selectedValue={selectedTabIndex2}>
                        <p>Risotto</p>
                    </TabView>
                </StackItem>
                <StackItem marginBottom={5}>
                    <Typography>Right-aligned</Typography>
                    <Pack justifyContent="flex-end">
                        <PackItem>
                            <Tabs onSwitch={handleChange3}>
                                <Tab>Pizza</Tab>
                                <Tab>Pasta</Tab>
                                <Tab>Risotto</Tab>
                            </Tabs>
                        </PackItem>
                    </Pack>
                    <TabView value={0} selectedValue={selectedTabIndex3}>
                        <p>Pizza</p>
                    </TabView>
                    <TabView value={1} selectedValue={selectedTabIndex3}>
                        <p>Pasta</p>
                    </TabView>
                    <TabView value={2} selectedValue={selectedTabIndex3}>
                        <p>Risotto</p>
                    </TabView>
                </StackItem>
            </Stack>
        </>
    );
};

export const ActiveDisabled = () => {
    return (
        <Tabs onSwitch={() => {}} defaultActiveTabIndex={0}>
            <Tab disabled>Disabled</Tab>
            <Tab>Normal</Tab>
        </Tabs>
    );
};

export const WithIndicator = () => {
    return (
        <Tabs onSwitch={() => {}} defaultActiveTabIndex={0}>
            <Tab>
                With indicator
                <Indicator marginLeft={4} />
            </Tab>
            <Tab>Normal</Tab>
        </Tabs>
    );
};

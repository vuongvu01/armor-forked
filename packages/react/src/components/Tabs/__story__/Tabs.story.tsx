import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';
import { Tabs } from '../Tabs';
import { Tab } from '../../Tab';
import { TabView } from '../../TabView';
import { Badge } from '../../Badge';
import { withWrapper } from '../../../helpers/Wrapper';
import { Typography } from '../../Typography';
import { Stack, StackItem } from '../../Stack';
import { Pack, PackItem } from '../../Pack';

export default {
    title: 'Components/Tabs',
    component: Tabs,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const DefaultLayoutMinimumConfiguration = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<
        number | undefined
    >(0);

    const handleChange = (tabIndex?: number) => setSelectedTabIndex(tabIndex);

    return (
        <>
            <Tabs onSwitch={handleChange}>
                {/* eslint-disable-next-line no-console */}
                <Tab onClick={() => console.log('click')}>Pizza</Tab>
                <Tab>Pasta</Tab>
                <Tab>Risotto</Tab>
                <Tab>Beverages</Tab>
                <Tab>Alcoholic beverages</Tab>
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
    const [selectedTabIndex, setSelectedTabIndex] = useState<
        number | undefined
    >(0);

    const handleChange = (tabIndex?: number) => setSelectedTabIndex(tabIndex);

    return (
        <BrowserRouter>
            <Tabs onSwitch={handleChange}>
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
        <>
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
        </>
    );
};

export const MultipleTabsToSingleContent = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<
        number | undefined
    >(0);

    const handleChange = (tabIndex?: number) => setSelectedTabIndex(tabIndex);

    return (
        <>
            <Tabs onSwitch={handleChange}>
                <Tab value={0}>Pizza</Tab>
                <Tab value={0}>Pasta</Tab>
                <Tab>Risotto</Tab>
                <Tab value={0}>Beverages</Tab>
                <Tab disabled>Alcoholic beverages</Tab>
            </Tabs>
            <TabView value={0} selectedValue={selectedTabIndex}>
                <p>Pizza, Pasta and Beverages all point to the same content</p>
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
        </>
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
                <Tab value={0}>
                    Pizza <Badge marginLeft={badgeLeftMargin}>42</Badge>
                </Tab>
                <Tab marginLeft={badgeLeftMargin} value={1}>
                    Pasta
                </Tab>
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

export const NoLeftPadding = () => (
    <Stack>
        <StackItem marginBottom={5}>
            <Typography>removePaddingLeft</Typography>
            <Tabs removePaddingLeft>
                <Tab>Pizza</Tab>
                <Tab>Pasta</Tab>
                <Tab>Risotto</Tab>
            </Tabs>
            <TabView>
                <p>Pizza</p>
            </TabView>
            <TabView>
                <p>Pasta</p>
            </TabView>
            <TabView>
                <p>Risotto</p>
            </TabView>
        </StackItem>
    </Stack>
);

export const NoRightPadding = () => (
    <Stack>
        <StackItem marginBottom={5}>
            <Typography>removePaddingRight</Typography>
            <Pack>
                <PackItem>
                    <Tabs defaultActiveTabIndex={2} removePaddingRight>
                        <Tab>Pizza</Tab>
                        <Tab>Pasta</Tab>
                        <Tab>Risotto</Tab>
                    </Tabs>
                </PackItem>
            </Pack>
            <TabView>
                <p>Pizza</p>
            </TabView>
            <TabView>
                <p>Pasta</p>
            </TabView>
            <TabView>
                <p>Risotto</p>
            </TabView>
        </StackItem>
    </Stack>
);

export const NoRightOrLeftPadding = () => (
    <Stack>
        <StackItem marginBottom={5}>
            <Typography>removePaddingLeft and removePaddingRight</Typography>
            <Tabs removePaddingLeft removePaddingRight>
                <Tab>Pizza</Tab>
                <Tab>Pasta</Tab>
                <Tab>Risotto</Tab>
            </Tabs>
            <TabView>
                <p>Pizza</p>
            </TabView>
            <TabView>
                <p>Pasta</p>
            </TabView>
            <TabView>
                <p>Risotto</p>
            </TabView>
        </StackItem>
    </Stack>
);

export const ActiveTabIndexControlled = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<
        number | undefined
    >(2);

    return (
        <>
            <Tabs
                activeTabIndex={selectedTabIndex}
                onActiveTabIndexChange={setSelectedTabIndex}
            >
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
        </>
    );
};

export const ActiveTabIndexUncontrolled = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<
        number | undefined
    >(2);

    return (
        <>
            <Tabs
                defaultActiveTabIndex={selectedTabIndex}
                onActiveTabIndexChange={setSelectedTabIndex}
            >
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
        </>
    );
};

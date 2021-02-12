/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { Tabs } from '../Tabs';
import { Tab } from '../../Tab';
import { getSelectedTab } from './helpers';

describe('<Tabs />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<Tabs />);
    });

    it('should support controlled mode for activeTabIndex', async () => {
        const setSelectedTabIndex = jest.fn();

        const { container } = render(
            <Tabs
                activeTabIndex={2}
                onActiveTabIndexChange={setSelectedTabIndex}
            >
                <Tab>Pizza</Tab>
                <Tab>Pasta</Tab>
                <Tab>Risotto</Tab>
                <Tab>Beverages</Tab>
            </Tabs>,
        );

        let selectedTab = getSelectedTab(container);
        expect(selectedTab!.innerHTML.indexOf('Risotto') >= 0).toBeTruthy();

        const tab = container.querySelector('.Tab-Root:nth-child(2)');
        fireEvent.click(tab!);

        expect(setSelectedTabIndex).toHaveBeenCalledWith(1);

        // still the same
        selectedTab = getSelectedTab(container);
        expect(selectedTab!.innerHTML.indexOf('Risotto') >= 0).toBeTruthy();

        const { container: containerNext } = render(
            <Tabs
                activeTabIndex={1}
                onActiveTabIndexChange={setSelectedTabIndex}
            >
                <Tab>Pizza</Tab>
                <Tab>Pasta</Tab>
                <Tab>Risotto</Tab>
                <Tab>Beverages</Tab>
            </Tabs>,
        );

        selectedTab = getSelectedTab(containerNext);
        expect(selectedTab!.innerHTML.indexOf('Pasta') >= 0).toBeTruthy();
    });

    it('should support uncontrolled mode for activeTabIndex', async () => {
        const setSelectedTabIndex = jest.fn();

        const { container } = render(
            <Tabs
                defaultActiveTabIndex={2}
                onActiveTabIndexChange={setSelectedTabIndex}
            >
                <Tab>Pizza</Tab>
                <Tab>Pasta</Tab>
                <Tab>Risotto</Tab>
                <Tab>Beverages</Tab>
            </Tabs>,
        );

        let selectedTab = getSelectedTab(container);
        expect(selectedTab!.innerHTML.indexOf('Risotto') >= 0).toBeTruthy();

        const tab = container.querySelector('.Tab-Root:nth-child(2)');
        fireEvent.click(tab!);

        expect(setSelectedTabIndex).toHaveBeenCalledWith(1);

        selectedTab = getSelectedTab(container);
        expect(selectedTab!.innerHTML.indexOf('Pasta') >= 0).toBeTruthy();
    });
});

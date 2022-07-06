import React, { useState } from 'react';

import { screen, userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { IconPlaceholderIcon, PinMarkerIcon } from '@deliveryhero/armor-icons';
import {
    DropdownSelectedOptionType,
    DropdownValueType,
    OptionObjectType,
    ExpansionIndicator,
} from '@deliveryhero/armor';
import { LEFT } from '@deliveryhero/armor-system';
import {
    HeaderNavigationSelector,
    HeaderNavigation,
    HeaderNavigationSelectorItem,
    HeaderNavigationProfile,
} from '../../../src/components/HeaderNavigation';
import DHLogo from './DHLogo';

// Component mock implementation
export const HeaderNavigationSelectorOnSelect = () => {
    const countries = [
        {
            value: -1,
            label: <HeaderNavigationSelectorItem label="All countries" />,
        },
        {
            value: 2,
            label: <HeaderNavigationSelectorItem label="Australia" />,
        },
        {
            value: 1,
            label: <HeaderNavigationSelectorItem label="Canada" />,
        },
        {
            value: 3,
            label: <HeaderNavigationSelectorItem label="Sweden" />,
        },
    ];

    const plugins = [
        {
            value: -1,
            label: (
                <HeaderNavigationSelectorItem
                    label="All Plugins"
                    icon={<IconPlaceholderIcon />}
                />
            ),
        },
        {
            value: 2,
            label: (
                <HeaderNavigationSelectorItem
                    label="Plugin name 2"
                    icon={<IconPlaceholderIcon />}
                />
            ),
        },
        {
            value: 1,
            label: (
                <HeaderNavigationSelectorItem
                    label="Plugin name 1"
                    icon={<IconPlaceholderIcon />}
                />
            ),
        },
        {
            value: 3,
            label: (
                <HeaderNavigationSelectorItem
                    label="Plugin name 3"
                    icon={<IconPlaceholderIcon />}
                />
            ),
        },
    ];

    const language = [
        { value: 2, label: 'English', code: 'en' },
        { value: 1, label: 'Deutsch', code: 'de' },
        { value: 3, label: 'Italian', code: 'it' },
    ];
    const [currentCountry, setCurrentCountry] =
        useState<DropdownSelectedOptionType>(countries[0]);
    const [currentPlugin, setCurrentPlugin] =
        useState<DropdownSelectedOptionType>(plugins[0]);
    const [currentLanguage, setCurrentLanguage] =
        useState<DropdownValueType>(2);

    const selectorCountryProps = {
        label: 'Country',
        options: countries,
        value: (currentCountry as OptionObjectType).value,
    };

    const selectorPluginProps = {
        label: 'Plugins',
        options: plugins,
        value: (currentPlugin as OptionObjectType).value,
    };

    return (
        <HeaderNavigation
            title={<DHLogo />}
            brandColor="#D81E27"
            selector={
                <>
                    <HeaderNavigationSelector
                        navigationSelectorParams={selectorPluginProps}
                        onOptionSelect={(
                            plugin: DropdownSelectedOptionType,
                        ) => {
                            setCurrentPlugin(plugin);
                        }}
                        selectorIcon={<ExpansionIndicator />}
                    />
                    <HeaderNavigationSelector
                        navigationSelectorParams={selectorCountryProps}
                        enableSearchOption
                        onOptionSelect={(
                            country: DropdownSelectedOptionType,
                        ) => {
                            setCurrentCountry(country);
                        }}
                        iconAlign={LEFT}
                        selectorIcon={<PinMarkerIcon />}
                    />
                </>
            }
            profile={
                <HeaderNavigationProfile
                    usernameInitials="VS"
                    selectorLabel="Language"
                    selectedValue={currentLanguage}
                    onSelectedValueChange={(lang) => {
                        setCurrentLanguage(lang);
                    }}
                    selectorOptions={language}
                    menuLinks={[
                        {
                            id: 1,
                            linkLabel: 'Development',
                            linkAction: () => {
                                alert('linkaction 1');
                            },
                        },
                        {
                            id: 2,
                            linkLabel: 'GDPR policy',
                            href: 'https://google.com',
                            target: '_blank',
                        },
                        {
                            id: 3,
                            linkLabel: 'Logout',
                            linkAction: () => {
                                alert('linkaction 3');
                            },
                        },
                    ]}
                />
            }
        />
    );
};

// Interactive tests with Play function
HeaderNavigationSelectorOnSelect.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Change value of plugin selector
    const headerSelectorPlugin = await canvas.findByText('All Plugins');

    userEvent.click(headerSelectorPlugin);

    const PluginItem = await screen.findByText('Plugin name 2');

    userEvent.click(PluginItem);

    // Change value of country selector
    const headerSelectorCountry = await canvas.findByText('All countries');

    userEvent.click(headerSelectorCountry);

    const CountryItem = await screen.findByText('Sweden');

    userEvent.click(CountryItem);

    // Change value of Language selector
    const headerSelectorLanguage = await canvas.findByText('VS');

    userEvent.click(headerSelectorLanguage);

    const LanguageItem = await screen.findByDisplayValue('English');

    userEvent.click(LanguageItem);

    const LanguageItemNew = await screen.findByText('Deutsch');

    userEvent.click(LanguageItemNew);
};

export default {
    title: 'Integration/HeaderNavigation/HeaderNavigationSelectorOnSelectOption',
    component: HeaderNavigationSelectorOnSelect,
};

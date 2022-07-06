import React, { useState } from 'react';
import { IconPlaceholderIcon, PinMarkerIcon } from '@deliveryhero/armor-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LEFT } from '@deliveryhero/armor-system';

import {
    DropdownSelectedOptionType,
    DropdownValueType,
    ExpansionIndicator,
    OptionObjectType,
} from '@deliveryhero/armor';
import { HeaderNavigation } from '../HeaderNavigation';

import { HeaderNavigationSelector } from '../HeaderNavigationSelector';
import { withWrapper } from '../../../helpers/Wrapper';
import { HeaderNavigationProfile } from '../HeaderNavigationProfile';
import { HeaderNavigationSelectorItem } from '../HeaderNavigationSelector/HeaderNavigationSelectorItem';
import DHLogo from './DHLogo';

export default {
    title: 'Components/HeaderNavigation',
    component: HeaderNavigation,
    decorators: [withWrapper],
    parameters: {},
};

export const OpsPortalUseCase = () => {
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

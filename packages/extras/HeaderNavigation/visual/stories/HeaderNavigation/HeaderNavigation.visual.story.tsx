/* eslint-disable no-console */
import React, { useState } from 'react';
import { IconPlaceholderIcon, PinMarkerIcon } from '@deliveryhero/armor-icons';
import { LEFT } from '@deliveryhero/armor-system';

import { ExpansionIndicator } from '@deliveryhero/armor';
import {
    HeaderNavigation,
    HeaderNavigationSelector,
    HeaderNavigationProfile,
    HeaderNavigationSelectorItem,
} from '../../../src/components';
import DHLogo from './DHLogo';

export default {
    title: 'HeaderNavigation',
    component: HeaderNavigation,
};

export const OpsPortalUseCase = () => {
    const [currentCountry, setCurrentCountry] = useState<number>(2);
    const [currentPlugin, setCurrentPlugin] = useState<number>(2);
    const [currentLanguage, setCurrentLanguage] = useState<number>(2);

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

    const selectorCountryProps = {
        label: 'Country',
        options: countries,
        value: currentCountry,
    };

    const selectorPluginProps = {
        label: 'Plugins',
        options: plugins,
        value: currentPlugin,
    };

    return (
        <HeaderNavigation
            title={<DHLogo />}
            brandColor="#D81E27"
            selector={
                <>
                    <HeaderNavigationSelector
                        navigationSelectorParams={selectorPluginProps}
                        onOptionSelect={(plugin) => {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            setCurrentPlugin(plugin.value);
                        }}
                        selectorIcon={<ExpansionIndicator />}
                    />
                    <HeaderNavigationSelector
                        navigationSelectorParams={selectorCountryProps}
                        enableSearchOption
                        onOptionSelect={(country) => {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            setCurrentCountry(country.value);
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
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
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

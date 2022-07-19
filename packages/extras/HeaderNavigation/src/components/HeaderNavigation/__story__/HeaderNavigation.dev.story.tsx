import React, { useState } from 'react';
import { IconPlaceholderIcon, PinMarkerIcon } from '@deliveryhero/armor-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LEFT } from '@deliveryhero/armor-system';

import {
    Button,
    DropdownSelectedOptionType,
    DropdownValueType,
    ExpansionIndicator,
    OptionObjectType,
} from '@deliveryhero/armor';
import { HeaderNavigation } from '../HeaderNavigation';

import { HeaderNavigationSelector } from '../HeaderNavigationSelector';
import { withWrapper } from '../../../helpers/Wrapper';
import {
    HeaderNavigationProfile,
    HeaderNavigationProfileMenuLink,
} from '../HeaderNavigationProfile';
import { HeaderNavigationSelectorItem } from '../HeaderNavigationSelector/HeaderNavigationSelectorItem';
import DHLogo from './DHLogo';

export default {
    title: 'Components/HeaderNavigation',
    component: HeaderNavigation,
    decorators: [withWrapper],
    parameters: {},
};

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
    {
        value: -11,
        label: <HeaderNavigationSelectorItem label="India" />,
    },
    {
        value: 21,
        label: <HeaderNavigationSelectorItem label="New Zealand" />,
    },
    {
        value: 12,
        label: <HeaderNavigationSelectorItem label="France" />,
    },
    {
        value: 33,
        label: <HeaderNavigationSelectorItem label="Italy" />,
    },
    {
        value: -12,
        label: <HeaderNavigationSelectorItem label="Spain" />,
    },
    {
        value: 24,
        label: <HeaderNavigationSelectorItem label="Deutschland" />,
    },
    {
        value: 15,
        label: <HeaderNavigationSelectorItem label="Poland" />,
    },
    {
        value: 37,
        label: <HeaderNavigationSelectorItem label="Portugal" />,
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

const menuLink: HeaderNavigationProfileMenuLink[] = [
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
        linkLabel: <span data-test-id="test-jsx">JSX tag</span>,
        href: 'https://google.com',
        target: '_blank',
    },
    {
        id: 4,
        linkLabel: 'Logout',
        linkAction: () => {
            alert('linkaction 3');
        },
    },
];

export const OpsPortalUseCase = () => {
    const [currentCountry, setCurrentCountry] =
        useState<DropdownSelectedOptionType>(countries[0]);
    const [currentPlugin, setCurrentPlugin] =
        useState<DropdownSelectedOptionType>(plugins[0]);
    const [currentLanguage, setCurrentLanguage] =
        useState<DropdownValueType>(2);

    const [open, setOpen] = useState(false);

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
        <>
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
                        open={open}
                        onOpenChange={(openVal) => {
                            setOpen(openVal);
                        }}
                        menuLinks={menuLink}
                    />
                }
            />
        </>
    );
};

export const WithDisabledCountryDropdown = () => {
    const [currentCountry, setCurrentCountry] =
        useState<DropdownSelectedOptionType>(countries[0]);
    const [currentPlugin, setCurrentPlugin] =
        useState<DropdownSelectedOptionType>(plugins[0]);
    const [currentLanguage, setCurrentLanguage] =
        useState<DropdownValueType>(2);

    const [open, setOpen] = useState(false);

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
        <>
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
                            showDropDownContent={false}
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
                        open={open}
                        onOpenChange={(openVal) => {
                            setOpen(openVal);
                        }}
                        menuLinks={menuLink}
                    />
                }
            />
        </>
    );
};

export const WithControlledProfileMenuDropdown = () => {
    const [currentCountry, setCurrentCountry] =
        useState<DropdownSelectedOptionType>(countries[0]);
    const [currentPlugin, setCurrentPlugin] =
        useState<DropdownSelectedOptionType>(plugins[0]);
    const [currentLanguage, setCurrentLanguage] =
        useState<DropdownValueType>(2);

    const [open, setOpen] = useState(false);

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
        <>
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
                            showDropDownContent={false}
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
                        open={open}
                        onOpenChange={(openVal) => {
                            setOpen(openVal);
                        }}
                        menuLinks={menuLink}
                    />
                }
            />
            <br />
            <Button onClick={() => setOpen(false)}>Close Profile menu</Button>
        </>
    );
};

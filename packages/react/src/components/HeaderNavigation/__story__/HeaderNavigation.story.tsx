import React, { ChangeEvent, useState } from 'react';
import {
    QuestionCircleFilledIcon,
    LogoutIcon,
} from '@deliveryhero/armor-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Link } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';
import { HeaderNavigation } from '../HeaderNavigation';
import {
    HeaderNavigationMenuContent,
    HeaderNavigationMenuContentBody,
    HeaderNavigationMenuContentHeader,
    HeaderNavigationMenuContentLogistics,
} from '../HeaderNavigationMenu/HeaderNavigationMenuContent';
import {
    HeaderNavigationLink,
    HeaderNavigationLinks,
} from '../HeaderNavigationLinks';
import { Image } from './Image';
import { Image2 } from './Image2';
import { ScalarType } from '../../../type';
import {
    HeaderNavigationAction,
    HeaderNavigationActionItem,
} from '../HeaderNavigationAction';
import { SuggestionObjectType } from '../../Search/type';
import { OptionType } from '../HeaderNavigationMenu/HeaderNavigationMenuContent/HeaderNavigationMenuContentBodyOptions/type';
import { HeaderNavigationTitle } from '../HeaderNavigationTitle';
import { HeaderNavigationSelector } from '../HeaderNavigationSelector';
import { HeaderNavigationSearch } from '../HeaderNavigationSearch';
import { DropdownSelectedOptionType } from '../../Dropdown/type';
import { Pack, PackItem } from '../../Pack';

export default {
    title: 'Components/HeaderNavigation',
    component: HeaderNavigation,
    decorators: [withKnobs],
    parameters: {},
};

const restaurantsMenuContentBodyOptions = [
    {
        category: 'General tools',
        label: 'General tools',
        value: 'cat_0',
        options: [
            {
                value: 'value_0',
                label: 'CAS',
            },
            {
                value: 'value_1',
                label: 'Vendor Monitor',
            },
            {
                value: 'value_2',
                label: 'Vendor Management',
            },
            {
                value: 'value_3',
                label: 'Test Order Tool',
            },
            {
                value: 'value_4',
                label: 'Device Management',
            },
        ],
    },
    {
        category: 'POS Vendor Tools',
        label: 'POS Vendor Tools',
        value: 'cat_0',
        options: [
            {
                value: 'value_5',
                label: 'POS Credentials',
            },
            {
                value: 'value_6',
                label: 'Menu Importer',
            },
            {
                value: 'value_7',
                label: 'Middleware',
            },
        ],
    },
];

const logisticsMenuContentBodyOptions = [
    {
        value: 'value_0',
        label: 'Arara',
    },
    {
        value: 'value_1',
        label: 'Rooster',
    },
    {
        value: 'value_2',
        label: 'DPS',
    },
    {
        value: 'value_3',
        label: 'Delivery Area Service',
    },
    {
        value: 'value_4',
        label: 'Tweety',
    },
    {
        value: 'value_5',
        label: 'TES',
    },
    {
        value: 'value_6',
        label: 'Hurrier',
    },
];

const foodOptions = [
    { value: 0, label: 'Biryani' },
    { value: 1, label: 'Tacos' },
    {
        value: 2,
        label:
            'This is a very long label that needs to be truncated with an ellipsis',
    },
    { value: 3, label: 'Risotto' },
    { value: 4, label: 'Pizza' },
    { value: 5, label: 'Enchiladas' },
    { value: 6, label: 'Börek' },
    { value: 7, label: 'Quiche' },
    { value: 8, label: 'Köfte' },
    { value: 9, label: 'Pad Thai' },
    { value: 10, label: 'Churrasco' },
    { value: 11, label: 'Baozi' },
    { value: 12, label: 'Ceviche' },
    { value: 13, label: 'Mac & Cheese' },
    { value: 14, label: 'Paella' },
    { value: 15, label: 'Dim sum' },
    { value: 16, label: 'Hamburger' },
    { value: 17, label: 'Ramen' },
    { value: 18, label: 'Sushi' },
    { value: 19, label: 'Burrito' },
];

const NavigationMenuTitle = <div>Dashboard</div>;

const NavigationMenuContent = (
    <HeaderNavigationMenuContent>
        <HeaderNavigationMenuContentHeader
            title="Restaurant"
            label="Backoffice"
            image={<Image />}
        />
        <HeaderNavigationMenuContentBody
            options={restaurantsMenuContentBodyOptions}
        />
    </HeaderNavigationMenuContent>
);

const NavigationMenuContent2 = (
    <HeaderNavigationMenuContent>
        <HeaderNavigationMenuContentHeader
            label="Logistics"
            image={<Image2 />}
        />
        <HeaderNavigationMenuContentBody
            options={logisticsMenuContentBodyOptions}
        />
    </HeaderNavigationMenuContent>
);

const NavigationAction = (
    <HeaderNavigationAction>
        <HeaderNavigationActionItem
            onClick={() => {
                // eslint-disable-next-line no-console
                console.log('Log out');
            }}
        >
            <LogoutIcon style={{ paddingTop: '8px', paddingBottom: '0' }} />
        </HeaderNavigationActionItem>
    </HeaderNavigationAction>
);

const NavigationActionMultiple = (
    <HeaderNavigationAction>
        <HeaderNavigationActionItem
            onClick={() => {
                // eslint-disable-next-line no-console
                console.log('Show help');
            }}
        >
            <QuestionCircleFilledIcon
                style={{ paddingTop: '8px', paddingBottom: '0' }}
            />
        </HeaderNavigationActionItem>
        <HeaderNavigationActionItem
            onClick={() => {
                // eslint-disable-next-line no-console
                console.log('Log out');
            }}
        >
            <LogoutIcon style={{ paddingTop: '8px', paddingBottom: '0' }} />
        </HeaderNavigationActionItem>
    </HeaderNavigationAction>
);

const selectorParams = {
    label: 'Platform and Country',
    isMultiselect: false,
    options: [
        { value: 0, label: 'Japan' },
        { value: 1, label: 'Laos' },
        { value: 2, label: 'Sweden' },
        { value: 3, label: 'Vietnam' },
    ],
};

export const ExtensiveExample = () => {
    const accountsLinkName = 'Accounts';
    const vendorsLinkName = 'Vendors';
    const scheduleLinkName = 'Schedule';
    const workflowsLinkName = 'Workflows';

    const [productSelected, setProductSelected] = useState(
        restaurantsMenuContentBodyOptions[0].options[3].label,
    );
    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_3');
    const [selectedLinkName, setSelectedLinkName] = useState<string>(
        accountsLinkName,
    );
    const [searchQuery, setSearchQuery] = useState('');
    const [countrySelected, setCountrySelected] = useState('');

    const handleOptionSelect = (selectedItem: OptionType) => {
        // eslint-disable-next-line no-console
        console.log('handleOptionSelect', { selectedItem });

        setSelectedValue(selectedItem?.value);
        setProductSelected(selectedItem?.label);
    };

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event?.target?.value || '';
        setSearchQuery(query);

        // eslint-disable-next-line no-console
        console.log({ query });
    };

    const handleSearchItemSelect = (option: SuggestionObjectType) => {
        setSearchQuery(option.label);

        // eslint-disable-next-line no-console
        console.log({ option });
    };

    const handleSelect = (selectedOption: DropdownSelectedOptionType) => {
        // eslint-disable-next-line no-console
        console.log('selected', { selectedOption });

        setCountrySelected(
            typeof selectedOption === 'string'
                ? selectedOption
                : selectedOption?.label,
        );
    };

    const handleLinkClick = (name: string) => {
        // eslint-disable-next-line no-console
        console.log('link clicked', { name });

        return setSelectedLinkName(name);
    };

    const homeLink = '/accounts';

    return (
        <BrowserRouter>
            <HeaderNavigation
                title={
                    <HeaderNavigationTitle
                        tag={Link}
                        to={homeLink}
                        name={accountsLinkName}
                        onLinkClick={handleLinkClick}
                    >
                        {productSelected}
                    </HeaderNavigationTitle>
                }
                navigationMenuContent={
                    <HeaderNavigationMenuContent>
                        <HeaderNavigationMenuContentHeader
                            title="Restaurant"
                            label="Backoffice"
                            image={<Image />}
                        />
                        <HeaderNavigationMenuContentBody
                            options={restaurantsMenuContentBodyOptions}
                            selectedValue={selectedValue}
                            onOptionSelect={handleOptionSelect}
                        />
                    </HeaderNavigationMenuContent>
                }
                links={
                    <HeaderNavigationLinks onLinkClick={handleLinkClick}>
                        <HeaderNavigationLink
                            name={accountsLinkName}
                            isActive={accountsLinkName === selectedLinkName}
                            tag={Link}
                            to={homeLink}
                        >
                            Accounts
                        </HeaderNavigationLink>
                        <HeaderNavigationLink
                            name={vendorsLinkName}
                            isActive={vendorsLinkName === selectedLinkName}
                            tag={Link}
                            to="/vendors"
                        >
                            Vendors
                        </HeaderNavigationLink>
                        <HeaderNavigationLink
                            name={scheduleLinkName}
                            isActive={scheduleLinkName === selectedLinkName}
                            tag={Link}
                            to="/schedule"
                        >
                            Schedule
                        </HeaderNavigationLink>
                        <HeaderNavigationLink
                            name={workflowsLinkName}
                            isActive={workflowsLinkName === selectedLinkName}
                            tag={Link}
                            to="/workflows"
                        >
                            Workflows
                        </HeaderNavigationLink>
                    </HeaderNavigationLinks>
                }
                search={
                    <HeaderNavigationSearch
                        options={foodOptions}
                        onChange={handleSearchChange}
                        onItemSelect={handleSearchItemSelect}
                    />
                }
                selector={
                    <HeaderNavigationSelector
                        navigationSelectorParams={selectorParams}
                        onOptionSelect={handleSelect}
                    />
                }
                navigationAction={NavigationAction}
            />
            <br />
            <br />
            <br />
            <p>
                Selected product: <strong> {productSelected}</strong>
            </p>
            <p>
                Navigated link: <strong>{selectedLinkName}</strong>{' '}
            </p>
            <p>
                Search query: <strong>{searchQuery}</strong>{' '}
            </p>
            <p>
                Platform/Country: <strong>{countrySelected}</strong>{' '}
            </p>
        </BrowserRouter>
    );
};

export const ExpandedSelector = () => {
    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_5');

    const handleOptionSelect = (selectedItem: OptionType) => {
        // eslint-disable-next-line no-console
        console.log('handleOptionSelect', { selectedItem });

        setSelectedValue(selectedItem?.value);
    };

    // eslint-disable-next-line no-console
    console.log('story', { selectedValue });

    return (
        <HeaderNavigation
            title="Vendor Monitor"
            navigationMenuTitle={NavigationMenuTitle}
            navigationMenuContent={
                <HeaderNavigationMenuContent>
                    <HeaderNavigationMenuContentHeader
                        label="Logistics"
                        image={<Image2 />}
                    />
                    <HeaderNavigationMenuContentBody
                        options={logisticsMenuContentBodyOptions}
                        selectedValue={selectedValue}
                        onOptionSelect={handleOptionSelect}
                    />
                </HeaderNavigationMenuContent>
            }
            selector={
                <HeaderNavigationSelector
                    navigationSelectorParams={{
                        ...selectorParams,
                        isExpanded: true,
                    }}
                />
            }
            navigationAction={NavigationActionMultiple}
        />
    );
};

export const MultiselectCountryPlatformSelector = () => {
    const [value, setValue] = useState<any>();

    // eslint-disable-next-line no-console
    console.log({ value });

    const handleOptionSelect = (
        selectedOption: {
            label: string;
            value: string | number;
            [key: string]: any;
        },
        itemIndex?: number,
    ) => {
        // eslint-disable-next-line no-console
        console.log('selected', { selectedOption, itemIndex });

        return setValue(selectedOption?.labe);
    };

    return (
        <HeaderNavigation
            title="Vendor Monitor"
            navigationMenuTitle={NavigationMenuTitle}
            navigationMenuContent={NavigationMenuContent}
            selector={
                <HeaderNavigationSelector
                    navigationSelectorParams={{
                        ...selectorParams,
                        isMultiselect: true,
                    }}
                />
            }
            onOptionSelect={handleOptionSelect}
            navigationAction={NavigationAction}
        />
    );
};

export const PreSelectedCountryAndExpandedMenuOnLoad = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        isMenuExpanded={true}
        navigationMenuTitle={NavigationMenuTitle}
        navigationMenuContent={NavigationMenuContent2}
        selector={
            <HeaderNavigationSelector
                navigationSelectorParams={{
                    ...selectorParams,
                    defaultValue: 2,
                }}
            />
        }
        navigationAction={NavigationAction}
    />
);

export const MultiplePreSelectedCountry = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        navigationMenuTitle={NavigationMenuTitle}
        navigationMenuContent={NavigationMenuContent}
        selector={
            <HeaderNavigationSelector
                navigationSelectorParams={{
                    ...selectorParams,
                    isMultiselect: true,
                    defaultValue: [0, 1],
                }}
            />
        }
        navigationAction={NavigationAction}
    />
);

export const Arara = () => {
    const [currentCountry, setCurrentCountry] = useState<number>(2);

    const countries = [
        { value: -1, label: 'All countries', code: null },
        { value: 2, label: 'Australia', code: 'au' },
        { value: 1, label: 'Austria', code: 'at' },
        { value: 3, label: 'Canada', code: 'ca' },
        { value: 5, label: 'Finland', code: 'fi' },
        { value: 6, label: 'France', code: 'fr' },
        { value: 4, label: 'Germany', code: 'de' },
        { value: 7, label: 'Italy', code: 'it' },
        { value: 8, label: 'Netherlands', code: 'nl' },
        { value: 9, label: 'Norway', code: 'no' },
        { value: 10, label: 'Sweden', code: 'se' },
    ];

    const selectorProps = {
        label: 'Country',
        options: countries,
        value: currentCountry,
    };

    return (
        <BrowserRouter>
            <HeaderNavigation
                navigationMenuTitle={
                    <HeaderNavigationTitle tag={Link} to="/">
                        <Pack>
                            {/* <PackItem paddingLeft={2}> */}
                            {/*    <Image /> */}
                            {/* </PackItem> */}
                            <PackItem>Arara</PackItem>
                        </Pack>
                    </HeaderNavigationTitle>
                }
                navigationMenuContent={<HeaderNavigationMenuContentLogistics />}
                links={
                    <HeaderNavigationLinks>
                        <HeaderNavigationLink
                            to="/applicants"
                            tag={Link}
                            isActive
                        >
                            Applicants
                        </HeaderNavigationLink>
                        <HeaderNavigationLink to="/schedules" tag={Link}>
                            Schedules
                        </HeaderNavigationLink>
                        <HeaderNavigationLink to="/workflows" tag={Link}>
                            Workflows
                        </HeaderNavigationLink>
                        <HeaderNavigationLink to="/forms" tag={Link}>
                            Forms
                        </HeaderNavigationLink>
                        <HeaderNavigationLink href="/forms" tag="a">
                            Forms Href
                        </HeaderNavigationLink>
                        <HeaderNavigationLink>Forms Span</HeaderNavigationLink>
                        <HeaderNavigationLink to="/configurations" tag={Link}>
                            Configurations
                        </HeaderNavigationLink>
                    </HeaderNavigationLinks>
                }
                selector={
                    <HeaderNavigationSelector
                        navigationSelectorParams={selectorProps}
                        onOptionSelect={country => {
                            // @ts-ignore
                            setCurrentCountry(country.value);
                        }}
                    />
                }
                navigationAction={
                    <HeaderNavigationAction>
                        <HeaderNavigationActionItem>
                            <LogoutIcon />
                        </HeaderNavigationActionItem>
                    </HeaderNavigationAction>
                }
            />
        </BrowserRouter>
    );
};

/* eslint-disable no-console */
import React, { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import {
    LogoutIcon,
    QuestionCircleFilledIcon,
    // eslint-disable-next-line import/no-extraneous-dependencies
} from '@deliveryhero/armor-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Link } from 'react-router-dom';
import { ScalarType } from '@deliveryhero/armor-system';

import { HeaderNavigation } from '../HeaderNavigation';
import {
    HeaderNavigationMenuContent,
    HeaderNavigationMenuContentBody,
    HeaderNavigationMenuContentHeader,
    HeaderNavigationMenuContentLogistics,
} from '../HeaderNavigationMenu';
import {
    HeaderNavigationLink,
    HeaderNavigationLinks,
} from '../HeaderNavigationLinks';
import { Image } from './Image';
import { Image2 } from './Image2';
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
import { withWrapper } from '../../../helpers/Wrapper';
import { Navigation } from '../../Navigation';
import { Tag } from '../../Tag';
import { columns, dataSource } from '../../DataTable/__story__/demoData';
import { DataTable } from '../../DataTable';

export default {
    title: 'Components/HeaderNavigation',
    component: HeaderNavigation,
    decorators: [withWrapper],
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
        value: 'value_6',
        label: 'Hurrier',
    },
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
];

const foodOptions = [
    { value: 0, label: 'Biryani' },
    { value: 1, label: 'Tacos' },
    {
        value: 2,
        label: 'This is a very long label that needs to be truncated with an ellipsis',
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
        <HeaderNavigationActionItem onClick={() => {}}>
            <LogoutIcon />
        </HeaderNavigationActionItem>
    </HeaderNavigationAction>
);

const NavigationActionMultiple = (
    <HeaderNavigationAction>
        <HeaderNavigationActionItem
            onClick={() => {
                console.log('Show help');
            }}
        >
            <QuestionCircleFilledIcon />
        </HeaderNavigationActionItem>
        <HeaderNavigationActionItem
            onClick={() => {
                console.log('Log out!');
            }}
        >
            <LogoutIcon />
        </HeaderNavigationActionItem>
    </HeaderNavigationAction>
);

const selectorParams = {
    label: 'Country',
    isMultiselect: false,
    options: [
        { value: 0, label: 'Japan' },
        { value: 1, label: 'Laos' },
        { value: 2, label: 'Sweden' },
        { value: 3, label: 'Vietnam' },
        { value: 4, label: 'United States of America', disabled: true },
    ],
};

export const ExtensiveExample = () => {
    const accountsLinkName = 'Accounts';
    const vendorsLinkName = 'Vendors';
    const scheduleLinkName = 'Schedule';
    const workflowsLinkName = 'Workflows';

    const [structure, setStructure] = useState([
        {
            id: 'blacklist',
            label: 'Blacklist',
            selected: false,
        },
        {
            id: 'country-settings',
            label: 'Country Settings',
            selected: false,
        },
        {
            id: 'location-settings',
            label: 'Location settings',
            selected: false,
            expanded: false,
            items: [
                {
                    id: '3243242323',
                    label: 'New York',
                },
                {
                    id: '456654',
                    label: 'Los Angeles',
                },
            ],
        },
    ]);

    const [productSelected, setProductSelected] = useState(
        restaurantsMenuContentBodyOptions[0].options[3].label,
    );
    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_3');
    const [selectedLinkName, setSelectedLinkName] =
        useState<string>(accountsLinkName);
    const [searchQuery, setSearchQuery] = useState('');
    const [countrySelected, setCountrySelected] = useState('');

    const handleOptionSelect = (selectedItem: OptionType) => {
        setSelectedValue(selectedItem?.value);
        setProductSelected(selectedItem?.label);

        console.log('handleOptionSelect', { selectedItem });
    };

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event?.target?.value || '';
        setSearchQuery(query);

        console.log('handleSearchChange', { query });
    };

    const handleSearchItemSelect = (option: SuggestionObjectType) => {
        setSearchQuery(option.label);

        console.log('handleSearchItemSelect', { option });
    };

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        console.log('handleClick', { event });
    };

    const handleSelect = (
        selectedOption: DropdownSelectedOptionType,
        itemIndex?: number,
    ) => {
        console.log('selected', { selectedOption, itemIndex });

        setCountrySelected(
            typeof selectedOption === 'string'
                ? selectedOption.toString()
                : selectedOption?.label.toString(),
        );
    };

    const handleLinkClick = (name: string) => {
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
                            <Tag small marginLeft={2} deleteOption="disabled">
                                99
                            </Tag>
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
                        onClick={handleClick}
                    />
                }
                navigationAction={NavigationAction}
            />
            <br />
            <br />
            <Navigation
                items={structure}
                width="400px"
                enableEffects={false}
                onElementClick={(id, item) => {
                    // eslint-disable-next-line no-param-reassign
                    item.expanded = !item.expanded;

                    setStructure([...structure]);
                }}
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
        console.log('handleOptionSelect', { selectedItem });

        setSelectedValue(selectedItem?.value);
    };

    return (
        <HeaderNavigation
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
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event?.target?.value || '';

        console.log({ query });
    };

    const handleSearchItemSelect = (option: SuggestionObjectType) => {
        console.log({ option });
    };

    const handleOptionSelect = (selectedOption: DropdownSelectedOptionType) => {
        console.log({ selectedOption });
    };

    return (
        <HeaderNavigation
            title="Vendor Monitor"
            navigationMenuTitle={NavigationMenuTitle}
            navigationMenuContent={NavigationMenuContent}
            search={
                <HeaderNavigationSearch
                    options={foodOptions}
                    onChange={handleSearchChange}
                    onItemSelect={handleSearchItemSelect}
                />
            }
            selector={
                <HeaderNavigationSelector
                    navigationSelectorParams={{
                        ...selectorParams,
                        isMultiselect: true,
                    }}
                    enableSelectAllOption
                    onOptionSelect={handleOptionSelect}
                />
            }
            navigationAction={NavigationAction}
        />
    );
};

export const MultiselectCountryPlatformSelectorWithSelectAllOptionEnabled =
    () => {
        const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
            const query = event?.target?.value || '';

            console.log({ query });
        };

        const handleSearchItemSelect = (option: SuggestionObjectType) => {
            console.log({ option });
        };

        const handleOptionSelect = (
            selectedOption: DropdownSelectedOptionType,
        ) => {
            console.log({ selectedOption });
        };

        return (
            <HeaderNavigation
                title="Vendor Monitor"
                navigationMenuTitle={NavigationMenuTitle}
                navigationMenuContent={NavigationMenuContent}
                search={
                    <HeaderNavigationSearch
                        options={foodOptions}
                        onChange={handleSearchChange}
                        onItemSelect={handleSearchItemSelect}
                    />
                }
                selector={
                    <HeaderNavigationSelector
                        navigationSelectorParams={{
                            ...selectorParams,
                            isMultiselect: true,
                        }}
                        enableSelectAllOption
                        onOptionSelect={handleOptionSelect}
                    />
                }
                navigationAction={NavigationAction}
            />
        );
    };

export const WithCustomSelectionRenderer = () => {
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event?.target?.value || '';

        console.log({ query });
    };

    const handleSearchItemSelect = (option: SuggestionObjectType) => {
        console.log({ option });
    };

    const handleOptionSelect = (selectedOption: DropdownSelectedOptionType) => {
        console.log({ selectedOption });
    };

    return (
        <HeaderNavigation
            title="Vendor Monitor"
            navigationMenuTitle={NavigationMenuTitle}
            navigationMenuContent={NavigationMenuContent}
            search={
                <HeaderNavigationSearch
                    options={foodOptions}
                    onChange={handleSearchChange}
                    onItemSelect={handleSearchItemSelect}
                />
            }
            selector={
                <HeaderNavigationSelector
                    navigationSelectorParams={{
                        ...selectorParams,
                        isMultiselect: true,
                    }}
                    onOptionSelect={handleOptionSelect}
                    onRenderSelectedValue={(
                        value: ReadonlyArray<unknown>,
                        options: ReadonlyArray<unknown>,
                    ) => {
                        return `${value.length} of ${options.length}`;
                    }}
                />
            }
            navigationAction={NavigationAction}
        />
    );
};

export const PreSelectedCountryAndExpandedMenuOnLoad = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        defaultExpanded={true}
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

const CustomHeaderNavigation = styled(HeaderNavigation)`
    border-bottom: 1px solid red;
`;

export const CustomStylization = () => (
    <CustomHeaderNavigation
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
                        onOptionSelect={(country) => {
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

export const NoMenuUseCase = () => {
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
                title={
                    <Pack>
                        <PackItem marginLeft={4}>Dashboard</PackItem>
                    </Pack>
                }
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
                    </HeaderNavigationLinks>
                }
                selector={
                    <HeaderNavigationSelector
                        navigationSelectorParams={selectorProps}
                        onOptionSelect={(country) => {
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

export const WithHeaderNavigation = () => {
    const wrapperRef = useRef(null);
    const [data] = useState<typeof dataSource>(dataSource);

    return (
        <BrowserRouter>
            <HeaderNavigation
                title={
                    <HeaderNavigationTitle
                        tag={Link}
                        to="/home"
                        name="Homr"
                        onLinkClick={() => {}}
                    >
                        Our product
                    </HeaderNavigationTitle>
                }
                selector={
                    <HeaderNavigationSelector
                        navigationSelectorParams={{
                            label: 'Country',
                            options: [
                                { value: 0, label: 'Japan' },
                                { value: 1, label: 'Laos' },
                                { value: 2, label: 'Sweden' },
                                { value: 3, label: 'Vietnam' },
                                { value: 4, label: 'United States of America' },
                            ],
                        }}
                    />
                }
                navigationAction={
                    <HeaderNavigationAction>
                        <HeaderNavigationActionItem onClick={() => {}}>
                            <LogoutIcon />
                        </HeaderNavigationActionItem>
                    </HeaderNavigationAction>
                }
            />
            <div
                style={{
                    overflowY: 'scroll',
                    height: '20rem',
                    marginTop: '1rem',
                }}
                ref={wrapperRef}
            >
                <DataTable
                    columns={columns}
                    data={data}
                    enableVirtualization
                    parentContainerRef={wrapperRef}
                />
            </div>
        </BrowserRouter>
    );
};

export const IsActiveCallback = () => {
    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_5');
    const handleOptionSelect = (selectedItem: OptionType) => {
        setSelectedValue(selectedItem?.value);
    };
    const [selectedLinkName, setSelectedLinkName] = useState<string>('TASKS');
    const handleLinkClick = (name: string) => {
        console.log('link clicked', { name });
        return setSelectedLinkName(name);
    };

    return (
        <BrowserRouter>
            <HeaderNavigation
                navigationMenuTitle={
                    <Pack justifyContent="space-between">
                        <PackItem paddingLeft={4}>Rooster Dashboard</PackItem>
                    </Pack>
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
                navigationAction={
                    <HeaderNavigationAction>
                        <HeaderNavigationActionItem>
                            <LogoutIcon onClick={() => {}} />
                        </HeaderNavigationActionItem>
                    </HeaderNavigationAction>
                }
                links={
                    <HeaderNavigationLinks onLinkClick={handleLinkClick}>
                        <HeaderNavigationLink
                            name="TASKS"
                            to="/tasks"
                            tag={Link}
                            isActive={() => {
                                return (
                                    selectedLinkName === 'TASKS' && !!(42 / 8)
                                );
                            }}
                        >
                            Tasks
                        </HeaderNavigationLink>
                        <HeaderNavigationLink
                            name="COMPLIANCE"
                            to="/compliance/violations"
                            tag={Link}
                            isActive={selectedLinkName === 'COMPLIANCE'}
                        >
                            Compliance
                        </HeaderNavigationLink>
                    </HeaderNavigationLinks>
                }
            />
        </BrowserRouter>
    );
};

export const WithSearchOptionEnableOnSelector = () => {
    const handleOptionSelect = (selectedOption: DropdownSelectedOptionType) => {
        console.log({ selectedOption });
    };

    return (
        <HeaderNavigation
            title="Vendor Monitor"
            selector={
                <HeaderNavigationSelector
                    navigationSelectorParams={selectorParams}
                    onOptionSelect={handleOptionSelect}
                    enableSearchOption
                    dropdownWidth={80}
                />
            }
            navigationAction={NavigationAction}
        />
    );
};

export const WithLongListItemOnSelector = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        navigationMenuTitle={NavigationMenuTitle}
        selector={
            <HeaderNavigationSelector
                navigationSelectorParams={{
                    ...selectorParams,
                    isExpanded: true,
                    options: [
                        { value: 0, label: 'Afghanistan' },
                        { value: 1, label: 'Albania' },
                        { value: 2, label: 'Algeria' },
                        { value: 3, label: 'Andorra' },
                        { value: 4, label: 'Angola' },
                        { value: 5, label: 'Antigua and Barbuda' },
                        { value: 6, label: 'Argentina' },
                        { value: 7, label: 'Armenia' },
                        { value: 8, label: 'Australia' },
                        { value: 9, label: 'Austria' },
                        { value: 10, label: 'Azerbaijan' },
                        { value: 11, label: 'Bahamas' },
                        { value: 12, label: 'Bahrain' },
                        { value: 13, label: 'Bangladesh' },
                        { value: 14, label: 'Barbados' },
                        { value: 15, label: 'Belarus' },
                        { value: 16, label: 'Belgium' },
                        { value: 17, label: 'Belize' },
                        { value: 18, label: 'Benin' },
                        { value: 19, label: 'Bhutan' },
                        { value: 20, label: 'Bolivia' },
                        { value: 21, label: 'Bosnia and Herzegovina' },
                        { value: 22, label: 'Botswana' },
                        { value: 23, label: 'Brazil' },
                        { value: 24, label: 'Brunei' },
                    ],
                }}
            />
        }
        navigationAction={NavigationAction}
    />
);

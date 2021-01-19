/* eslint-disable no-console */
import React, { useState } from 'react';
import styled from 'styled-components';
import { QuestionChatIcon, LogoutIcon } from '@deliveryhero/armor-icons';
import { BrowserRouter, Link } from 'react-router-dom';

import {
    HeaderNavigation,
    HeaderNavigationMenuContent,
    HeaderNavigationMenuContentBody,
    HeaderNavigationMenuContentHeader,
    HeaderNavigationAction,
    HeaderNavigationActionItem,
    HeaderNavigationLink,
    HeaderNavigationLinks,
    HeaderNavigationTitle,
    HeaderNavigationSelector,
    HeaderNavigationSearch,
} from '../../../src/components';
import { Image2 } from '../../../src/components/HeaderNavigation/__story__/Image2';
import { Image } from '../../../src/components/HeaderNavigation/__story__/Image';
import { ScalarType } from '../../../src/type';
import { OptionType } from '../../../src/components/HeaderNavigation/HeaderNavigationMenu/HeaderNavigationMenuContent/HeaderNavigationMenuContentBodyOptions/type';

export default {
    title: 'HeaderNavigation',
    component: HeaderNavigation,
};

const restaurantsMenuContentBodyOptions = [
    {
        category: 'General tools',
        label: 'General tools',
        value: 'cat_0',
        options: [
            { value: 'value_0', label: 'CAS' },
            { value: 'value_1', label: 'Vendor Monitor' },
            { value: 'value_2', label: 'Vendor Management' },
            { value: 'value_3', label: 'Test Order Tool' },
            { value: 'value_4', label: 'Device Management' },
        ],
    },
    {
        category: 'POS Vendor Tools',
        label: 'POS Vendor Tools',
        value: 'cat_0',
        options: [
            { value: 'value_5', label: 'POS Credentials' },
            { value: 'value_6', label: 'Menu Importer' },
            { value: 'value_7', label: 'Middleware' },
        ],
    },
];

const logisticsMenuContentBodyOptions = [
    { value: 'value_0', label: 'Arara' },
    { value: 'value_1', label: 'Rooster' },
    { value: 'value_2', label: 'DPS' },
    { value: 'value_3', label: 'Delivery Area Service' },
    { value: 'value_4', label: 'Tweety' },
    { value: 'value_5', label: 'TES' },
    { value: 'value_6', label: 'Hurrier' },
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

const NavigationMenuContentRestaurant = (
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

const NavigationMenuContentLogistics = (
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
                console.log('Log out');
            }}
        >
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
            <QuestionChatIcon />
        </HeaderNavigationActionItem>
        <HeaderNavigationActionItem
            onClick={() => {
                console.log('Log out');
            }}
        >
            <LogoutIcon />
        </HeaderNavigationActionItem>
    </HeaderNavigationAction>
);

const selectorParams = {
    label: 'Platform and Country',
    isMultiselect: false,
    onSelect: (
        selectedOption:
            | string
            | { label: string; value: string | number; [key: string]: any }, // similarly here - to expose into storybook, otherwise it says just OptionItemType
        itemIndex?: number,
    ) => {
        console.log('selected', { selectedOption, itemIndex });
    },
    options: [
        { value: 0, label: 'Japan' },
        { value: 1, label: 'Laos' },
        { value: 2, label: 'Sweden' },
        { value: 3, label: 'Vietnam' },
        { value: 4, label: 'United States of America' },
    ],
};

export const Layout = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        navigationMenuTitle={NavigationMenuTitle}
        navigationMenuContent={NavigationMenuContentRestaurant}
        selector={
            <HeaderNavigationSelector
                navigationSelectorParams={selectorParams}
            />
        }
        navigationAction={NavigationAction}
    />
);

export const ExpandedSelector = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        navigationMenuTitle={NavigationMenuTitle}
        navigationMenuContent={NavigationMenuContentLogistics}
        selector={
            <HeaderNavigationSelector
                navigationSelectorParams={{
                    ...selectorParams,
                    isExpanded: true,
                }}
            />
        }
        navigationAction={NavigationAction}
    />
);

export const PreSelectedCountry = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        navigationMenuTitle={NavigationMenuTitle}
        navigationMenuContent={NavigationMenuContentRestaurant}
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

export const MultipleNavigationActionItems = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        navigationMenuTitle={NavigationMenuTitle}
        navigationMenuContent={NavigationMenuContentRestaurant}
        selector={
            <HeaderNavigationSelector
                navigationSelectorParams={{
                    ...selectorParams,
                    defaultValue: 2,
                }}
            />
        }
        navigationAction={NavigationActionMultiple}
    />
);

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

export const ExpandedSelectorWithCountryPreSelected = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        navigationMenuTitle={NavigationMenuTitle}
        navigationMenuContent={NavigationMenuContentLogistics}
        selector={
            <HeaderNavigationSelector
                navigationSelectorParams={{
                    ...selectorParams,
                    isExpanded: true,
                    defaultValue: 2,
                }}
            />
        }
        navigationAction={NavigationAction}
    />
);

export const DefaultMenuLook = () => (
    <HeaderNavigation
        title="Test Order Tool"
        navigationMenuContent={NavigationMenuContentLogistics}
        selector={
            <HeaderNavigationSelector
                navigationSelectorParams={{
                    ...selectorParams,
                    isExpanded: true,
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
        navigationMenuContent={NavigationMenuContentLogistics}
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

export const MultiplePreSelectedCountryAndExpandedSelector = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        navigationMenuTitle={NavigationMenuTitle}
        navigationMenuContent={NavigationMenuContentLogistics}
        selector={
            <HeaderNavigationSelector
                navigationSelectorParams={{
                    ...selectorParams,
                    isMultiselect: true,
                    isExpanded: true,
                    defaultValue: [0, 1],
                }}
            />
        }
        navigationAction={NavigationAction}
    />
);

export const MultiplePreSelectedCountryEllipsisVisible = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        navigationMenuTitle={NavigationMenuTitle}
        navigationMenuContent={NavigationMenuContentLogistics}
        selector={
            <HeaderNavigationSelector
                navigationSelectorParams={{
                    ...selectorParams,
                    isMultiselect: true,
                    defaultValue: [0, 1, 2, 3, 4],
                }}
            />
        }
        navigationAction={NavigationAction}
    />
);

export const ExpandedCategorizedMenuOnLoad = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        defaultExpanded={true}
        navigationMenuTitle={NavigationMenuTitle}
        navigationMenuContent={NavigationMenuContentRestaurant}
        selector={
            <HeaderNavigationSelector
                navigationSelectorParams={selectorParams}
            />
        }
        navigationAction={NavigationAction}
    />
);

export const ExpandedCategorizedPreselectedMenuItemOnLoad = () => {
    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_3');

    const handleOptionSelect = (selectedItem: OptionType) => {
        console.log('handleOptionSelect', { selectedItem });

        setSelectedValue(selectedItem?.value);
    };

    return (
        <HeaderNavigation
            title="Vendor Monitor"
            defaultExpanded={true}
            navigationMenuTitle={NavigationMenuTitle}
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
            selector={
                <HeaderNavigationSelector
                    navigationSelectorParams={selectorParams}
                />
            }
            navigationAction={NavigationAction}
        />
    );
};

export const NavigationLinksWithReachRouterLink = () => {
    const accountsLinkName = 'CAS_accounts';
    const vendorsLinkName = 'CAS_vendors';
    const scheduleLinkName = 'CAS_schedule';
    const workflowsLinkName = 'CAS_workflows';

    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_3');
    const [selectedLinkName, setSelectedLinkName] = useState<string>(
        accountsLinkName,
    );

    const handleOptionSelect = (selectedItem: OptionType) => {
        console.log('handleOptionSelect', { selectedItem });

        setSelectedValue(selectedItem?.value);
    };

    const handleLinkClick = (name: string) => {
        console.log('link clicked', { name });

        return setSelectedLinkName(name);
    };

    return (
        <HeaderNavigation
            title="Vendor Monitor"
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
                <BrowserRouter>
                    <HeaderNavigationLinks onLinkClick={handleLinkClick}>
                        <HeaderNavigationLink
                            name={accountsLinkName}
                            isActive={accountsLinkName === selectedLinkName}
                            tag={Link}
                            to="/vendors"
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
                </BrowserRouter>
            }
            selector={
                <HeaderNavigationSelector
                    navigationSelectorParams={selectorParams}
                />
            }
            navigationAction={NavigationAction}
        />
    );
};

export const NavigationLinksWithHref = () => {
    const accountsLinkName = 'CAS_accounts';
    const vendorsLinkName = 'CAS_vendors';
    const scheduleLinkName = 'CAS_schedule';
    const workflowsLinkName = 'CAS_workflows';

    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_3');
    const [selectedLinkName, setSelectedLinkName] = useState<string>(
        accountsLinkName,
    );

    const handleOptionSelect = (selectedItem: OptionType) => {
        console.log('handleOptionSelect', { selectedItem });

        setSelectedValue(selectedItem?.value);
    };

    const handleLinkClick = (name: string) => {
        //
        console.log('link clicked', { name });

        return setSelectedLinkName(name);
    };

    return (
        <HeaderNavigation
            title="Vendor Monitor"
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
                <BrowserRouter>
                    <HeaderNavigationLinks onLinkClick={handleLinkClick}>
                        <HeaderNavigationLink
                            name={accountsLinkName}
                            isActive={accountsLinkName === selectedLinkName}
                            href="https://google.com"
                        >
                            Accounts
                        </HeaderNavigationLink>
                        <HeaderNavigationLink
                            name={vendorsLinkName}
                            isActive={vendorsLinkName === selectedLinkName}
                            href="https://google.com"
                        >
                            Vendors
                        </HeaderNavigationLink>
                        <HeaderNavigationLink
                            name={scheduleLinkName}
                            isActive={scheduleLinkName === selectedLinkName}
                            href="https://google.com"
                        >
                            Schedule
                        </HeaderNavigationLink>
                        <HeaderNavigationLink
                            name={workflowsLinkName}
                            isActive={workflowsLinkName === selectedLinkName}
                            href="https://google.com"
                        >
                            Workflows
                        </HeaderNavigationLink>
                    </HeaderNavigationLinks>
                </BrowserRouter>
            }
            selector={
                <HeaderNavigationSelector
                    navigationSelectorParams={selectorParams}
                />
            }
            navigationAction={NavigationAction}
        />
    );
};

export const ExpandedUncategorizedMenuOnLoad = () => (
    <HeaderNavigation
        title="Vendor Monitor"
        defaultExpanded={true}
        navigationMenuTitle={NavigationMenuTitle}
        navigationMenuContent={NavigationMenuContentLogistics}
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

export const ExpandedUncategorizedPreselectedMenuItemOnLoad = () => {
    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_5');

    const handleOptionSelect = (selectedItem: OptionType) => {
        console.log('handleOptionSelect', { selectedItem });

        setSelectedValue(selectedItem?.value);
    };

    return (
        <HeaderNavigation
            title="Vendor Monitor"
            defaultExpanded={true}
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
                        isMultiselect: true,
                        defaultValue: [0, 1],
                    }}
                />
            }
            navigationAction={NavigationAction}
        />
    );
};

export const WithSearchBar = () => {
    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_5');

    const handleOptionSelect = (selectedItem: OptionType) => {
        console.log('handleOptionSelect', { selectedItem });

        setSelectedValue(selectedItem?.value);
    };

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
            search={
                <HeaderNavigationSearch
                    options={foodOptions}
                    onChange={() => {}}
                    onItemSelect={() => {}}
                />
            }
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
};
export const NoSeparators = () => {
    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_5');

    const handleOptionSelect = (selectedItem: OptionType) => {
        console.log('handleOptionSelect', { selectedItem });

        setSelectedValue(selectedItem?.value);
    };

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
            search={
                <HeaderNavigationSearch
                    options={foodOptions}
                    onChange={() => {}}
                    onItemSelect={() => {}}
                    separator={false}
                />
            }
            selector={
                <HeaderNavigationSelector
                    navigationSelectorParams={{
                        ...selectorParams,
                        isMultiselect: true,
                        defaultValue: [0, 1],
                    }}
                    separator={false}
                />
            }
            navigationAction={NavigationAction}
        />
    );
};

export const WithNavigationTitleAsLink = () => {
    const accountsLinkName = 'CAS_accounts';
    const vendorsLinkName = 'CAS_vendors';
    const scheduleLinkName = 'CAS_schedule';
    const workflowsLinkName = 'CAS_workflows';

    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_3');
    const [selectedLinkName, setSelectedLinkName] = useState<string>(
        accountsLinkName,
    );

    const handleOptionSelect = (selectedItem: OptionType) => {
        console.log('handleOptionSelect', { selectedItem });

        setSelectedValue(selectedItem?.value);
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
                        Vendor Monitor
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
                selector={
                    <HeaderNavigationSelector
                        navigationSelectorParams={selectorParams}
                    />
                }
                navigationAction={NavigationAction}
            />
        </BrowserRouter>
    );
};

export const WithContentsReordered = () => {
    const accountsLinkName = 'CAS_accounts';
    const vendorsLinkName = 'CAS_vendors';
    const scheduleLinkName = 'CAS_schedule';
    const workflowsLinkName = 'CAS_workflows';

    const [selectedValue, setSelectedValue] = useState<ScalarType>('value_3');
    const [selectedLinkName, setSelectedLinkName] = useState<string>(
        accountsLinkName,
    );

    const handleOptionSelect = (selectedItem: OptionType) => {
        console.log('handleOptionSelect', { selectedItem });

        setSelectedValue(selectedItem?.value);
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
                        Arara
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
                    <HeaderNavigationSelector
                        navigationSelectorParams={selectorParams}
                        separator={false}
                    />
                }
                selector={
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
                navigationAction={NavigationAction}
            />
        </BrowserRouter>
    );
};

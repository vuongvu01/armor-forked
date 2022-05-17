import React, { ChangeEvent, useCallback, useState } from 'react';
import { Search, ScalarType } from '@deliveryhero/armor';
import { InfoIcon, CogIcon } from '@deliveryhero/armor-icons';

import { campaigns } from './constants';

export type SuggestionObjectType = {
    value: ScalarType;
    label: string;
    groupId?: ScalarType;
} & Record<string, any>;

// @ts-ignore
const formatCampaigns = (campaignsList, query) =>
    [...campaignsList]
        .sort(
            (a, b) =>
                Number(b.attributes.is_active) - Number(a.attributes.is_active),
        )
        .filter((campaign) => {
            return campaign.attributes.name
                .toLowerCase()
                .includes(query.toLocaleLowerCase());
        });

export default {
    title: 'Search',
    component: Search,
};

const foodOptions = [
    { value: 0, label: 'Biryani' },
    {
        value: 1,
        label: 'This is a very long label that needs to be truncated with an ellipsis',
    },
    { value: 2, label: 'Pho' },
    { value: 3, label: 'Risotto' },
];

export const DefaultSearch = () => <Search />;

export const Large = () => <Search large />;

export const SearchWithInput = () => <Search defaultQuery="Query" />;

export const DisabledSearch = () => <Search disabled />;

export const SearchWithSuggestionsList = () => (
    <Search
        defaultQuery="Food"
        icon={<InfoIcon width="12px" height="12px" />}
        options={foodOptions}
    />
);

export const WideSearchWithSuggestionsList = () => (
    <Search
        defaultQuery="Biryani"
        icon={<InfoIcon width="12px" height="12px" />}
        options={foodOptions}
        suggestionListHeight="100px"
        wide
    />
);

export const SearchWithShortSuggestionsListAndCustomWidth = () => (
    <Search
        defaultQuery="otto"
        icon={<InfoIcon width="12px" height="12px" />}
        options={[
            { value: 2, label: 'Pho' },
            { value: 3, label: 'Risotto' },
        ]}
        width="600px"
    />
);

export const SearchWithHighlightMatch = () => (
    <Search
        defaultQuery="birya"
        icon={<InfoIcon width="12px" height="12px" />}
        options={foodOptions}
    />
);

export const TruncatedLabelWithMiddleHighlight = () => (
    <Search
        additionalInfo={<div>a long info string</div>}
        defaultQuery="is a very"
        icon={<InfoIcon width="12px" height="12px" />}
        options={foodOptions}
    />
);

export const SearchWithHighlightNoIconNoInfo = () => (
    <Search defaultQuery="bir" options={foodOptions} />
);

export const SearchWithHighlightNoIcon = () => (
    <Search
        additionalInfo={<div>a long info string</div>}
        defaultQuery="bir"
        options={foodOptions}
    />
);

export const SearchWithHighlightNoInfo = () => (
    <Search
        defaultQuery="bir"
        icon={<InfoIcon width="12px" height="12px" />}
        options={foodOptions}
    />
);

export const NoResultsFound = () => (
    <Search defaultQuery="Exotic food" options={[]} />
);

export const NoResultsFoundCustomPlaceholder = () => (
    <Search
        defaultQuery="Exotic food"
        options={[]}
        noResultsLabel="Continue typing to search. Enter at least 3 characters to search"
    />
);

export const LoadingState = () => (
    <Search defaultQuery="Temp placeholder icon" isLoading />
);

const faction = [
    {
        id: 'zerg',
        label: 'Zerg This isavery long title grocery goods and medications',
    },
    { id: 'terr', label: 'Terran' },
    { id: 'prot', label: 'Protoss' },
];

const characters = [
    { value: 1, label: 'Jim Raynor', groupId: 'terr' },
    { value: 2, label: 'Duke', groupId: 'terr' },

    { value: 4, label: 'Zeratul', groupId: 'prot' },
    { value: 5, label: 'Tassadar', groupId: 'prot' },
    { value: 6, label: 'Fenix', groupId: 'prot' },

    { value: 7, label: 'Kerrigan', groupId: 'zerg' },
    { value: 8, label: 'Overmind', groupId: 'zerg' },
    { value: 9, label: 'Cerebrate', groupId: 'zerg' },
];

export const Groups = () => {
    return <Search options={characters} groups={faction} defaultQuery="Jim" />;
};

export const customSuggestionListHeight = () => {
    const foodOptionsExtended = [
        {
            value: 0,
            label: 'Biryani',
            spiciness: 'Super hot and spicy option with extra curry',
        },
        { value: 1, label: 'Tacos', spiciness: 'Super hot and spicy option' },
        {
            value: 2,
            label: 'This is a very long label that needs to be truncated with an ellipsis',
            spiciness: 'Super hot and spicy option with extra action label',
        },
        { value: 3, label: 'Risotto', spiciness: 'Super hot and spicy option' },
        { value: 4, label: 'Pizza', spiciness: 'Spicy' },
        { value: 5, label: 'Enchiladas', spiciness: 'Mild' },
        { value: 6, label: 'Börek', spiciness: 'Spicy' },
        { value: 7, label: 'Quiche', spiciness: 'Mild' },
        { value: 8, label: 'Köfte', spiciness: 'Spicy' },
        { value: 9, label: 'Pad Thai', spiciness: 'Spicy' },
        { value: 10, label: 'Churrasco', spiciness: 'Mild' },
        { value: 11, label: 'Baozi', spiciness: 'Mild' },
        { value: 12, label: 'Ceviche', spiciness: 'Mild' },
        { value: 13, label: 'Mac & Cheese', spiciness: 'Mild' },
        { value: 14, label: 'Paella', spiciness: 'Mild' },
        { value: 15, label: 'Dim sum', spiciness: 'Mild' },
        { value: 16, label: 'Hamburger', spiciness: 'Mild' },
        { value: 17, label: 'Ramen', spiciness: 'Hot' },
        { value: 18, label: 'Sushi', spiciness: 'Mild' },
        { value: 19, label: 'Burrito', spiciness: 'Mild' },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event?.target?.value || '';
        setSearchQuery(query);

        // eslint-disable-next-line no-console
        console.log({ query });
    };

    const handleOnSelect = (option: SuggestionObjectType) => {
        setSearchQuery(option.label);

        // eslint-disable-next-line no-console
        console.log({ option });
    };

    return (
        <>
            <Search
                width="500px"
                renderItemAdditionalInfo={(item: SuggestionObjectType) =>
                    item.spiciness
                }
                onChange={handleOnChange}
                onItemSelect={handleOnSelect}
                defaultQuery="Food"
                options={foodOptionsExtended}
                suggestionListHeight="30"
                renderItemIcon={(
                    item: SuggestionObjectType,
                    optionIndex?: number,
                ) =>
                    optionIndex && optionIndex % 2 === 0 ? (
                        <InfoIcon width="12px" height="12px" />
                    ) : (
                        <CogIcon width="12px" height="12px" />
                    )
                }
            />
            <p>Search query: {searchQuery}</p>
        </>
    );
};

export const DynamicItemIconAndInfo = () => {
    const foodOptionsExtended = [
        {
            value: 0,
            label: 'Biryani',
            spiciness: 'Super hot and spicy option with extra curry',
        },
        { value: 1, label: 'Tacos', spiciness: 'Super hot and spicy option' },
        {
            value: 2,
            label: 'This is a very long label that needs to be truncated with an ellipsis',
            spiciness: 'Super hot and spicy option with extra action label',
        },
        { value: 3, label: 'Risotto', spiciness: 'Super hot and spicy option' },
        { value: 4, label: 'Pizza', spiciness: 'Spicy' },
        { value: 5, label: 'Enchiladas', spiciness: 'Mild' },
        { value: 6, label: 'Börek', spiciness: 'Spicy' },
        { value: 7, label: 'Quiche', spiciness: 'Mild' },
        { value: 8, label: 'Köfte', spiciness: 'Spicy' },
        { value: 9, label: 'Pad Thai', spiciness: 'Spicy' },
        { value: 10, label: 'Churrasco', spiciness: 'Mild' },
        { value: 11, label: 'Baozi', spiciness: 'Mild' },
        { value: 12, label: 'Ceviche', spiciness: 'Mild' },
        { value: 13, label: 'Mac & Cheese', spiciness: 'Mild' },
        { value: 14, label: 'Paella', spiciness: 'Mild' },
        { value: 15, label: 'Dim sum', spiciness: 'Mild' },
        { value: 16, label: 'Hamburger', spiciness: 'Mild' },
        { value: 17, label: 'Ramen', spiciness: 'Hot' },
        { value: 18, label: 'Sushi', spiciness: 'Mild' },
        { value: 19, label: 'Burrito', spiciness: 'Mild' },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event?.target?.value || '';

        setSearchQuery(query);
    };

    const handleOnSelect = (option: SuggestionObjectType) =>
        setSearchQuery(option.label);

    return (
        <>
            <Search
                width="500px"
                renderItemAdditionalInfo={(item: SuggestionObjectType) =>
                    item.spiciness
                }
                onChange={handleOnChange}
                onItemSelect={handleOnSelect}
                defaultQuery="Birya"
                options={foodOptionsExtended}
                renderItemIcon={(
                    item: SuggestionObjectType,
                    optionIndex?: number,
                ) =>
                    optionIndex && optionIndex % 2 === 0 ? (
                        <InfoIcon width="12px" height="12px" />
                    ) : (
                        <CogIcon width="12px" height="12px" />
                    )
                }
            />
            <p>Search query: {searchQuery}</p>
        </>
    );
};

export const WithDeatchedResults = () => {
    const [search, setSearch] = useState('');

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const query = e.target.value || '';
            setSearch(query);
            // eslint-disable-next-line no-console
            console.log({ query });
        },
        [],
    );

    const campaignsToRender = formatCampaigns(campaigns, search);
    return (
        <>
            <Search
                onChange={handleSearchChange}
                placeholder="Search Campaigns"
                defaultQuery={search}
                enableSuggestions={false}
            />
            {campaignsToRender.map((campaign) => (
                <div>{campaign.attributes.name}</div>
            ))}
        </>
    );
};
export const WithDeatchedResultsFiltered = () => {
    const [search, setSearch] = useState('test');

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const query = e.target.value || '';
            setSearch(query);
            // eslint-disable-next-line no-console
            console.log({ query });
        },
        [],
    );

    const campaignsToRender = formatCampaigns(campaigns, search);
    return (
        <>
            <Search
                onChange={handleSearchChange}
                placeholder="Search Campaigns"
                defaultQuery={search}
                enableSuggestions={false}
            />
            {campaignsToRender.map((campaign) => (
                <div>{campaign.attributes.name}</div>
            ))}
        </>
    );
};

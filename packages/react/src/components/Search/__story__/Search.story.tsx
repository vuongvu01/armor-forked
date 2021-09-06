import React, { ChangeEvent, useCallback, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-extraneous-dependencies
import { InfoIcon } from '@deliveryhero/armor-icons';

import { Search } from '../Search';
import { SearchQueryType, SuggestionObjectType } from '../type';
import { FormField, FormFieldMessage } from '../../FormField';
import { TextInput } from '../../TextInput';
import { CogIcon } from '../../../icons';
import { campaigns } from './constants';
import { Typography } from '../../Typography';
import { Button } from '../../Button';

export default {
    title: 'Components/Search',
    component: Search,
};

const foodOptions = [
    {
        value: 0,
        label: 'Biryani',
        spiciness: 'Super hot and spicy option with extra curry',
    },
    { value: 1, label: 'Tacos', spiciness: 'Super hot and spicy option' },
    {
        value: 2,
        label:
            'This is a very long label that needs to be truncated with an ellipsis',
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

export const DefaultSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event?.target?.value;
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
                renderItemAdditionalInfo={(item: SuggestionObjectType) =>
                    item.spiciness
                }
                // @ts-ignore
                onChange={handleOnChange}
                onItemSelect={handleOnSelect}
                options={searchQuery && searchQuery.length ? foodOptions : []}
                renderItemIcon={(
                    item: SuggestionObjectType,
                    optionIndex?: number,
                ) =>
                    optionIndex && optionIndex % 2 === 1 ? (
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

export const DeprecatedAdditionalInfoAndIcon = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event?.target?.value;
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
                additionalInfo={<div>a long info string</div>}
                // @ts-ignore
                onChange={handleOnChange}
                onItemSelect={handleOnSelect}
                options={searchQuery && searchQuery.length ? foodOptions : []}
                icon={<InfoIcon width="12px" height="12px" />}
            />
            <p>Search query: {searchQuery}</p>
        </>
    );
};

export const DisabledClearAction = () => {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event?.target?.value;

        // eslint-disable-next-line no-console
        console.log({ query });
    };

    return (
        <Search
            disableClearAction
            onChange={handleOnChange}
            options={foodOptions}
        />
    );
};

export const FormWithErrors = () => {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event?.target?.value;

        // eslint-disable-next-line no-console
        console.log({ query });
    };

    const errors = [
        'Need more beer',
        'Out of pretzels',
        'Something else!',
        'Test test!',
    ];

    return (
        <>
            <FormField autoMargin>
                <Search
                    disableClearAction
                    onChange={handleOnChange}
                    options={foodOptions}
                />
                <FormFieldMessage>Don&rsquo;t do that</FormFieldMessage>
            </FormField>
            <FormField autoMargin>
                <TextInput label="Blacklist - Email" wide multiline />
                {errors.length > 0 && (
                    <FormFieldMessage error oneLine={false}>
                        Errors: {errors.join(', ')}
                    </FormFieldMessage>
                )}
            </FormField>
        </>
    );
};

export const DisableSuggestionsList = () => {
    const [query, setQuery] = useState<string>('');

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputQuery = event?.target?.value;

        setQuery(inputQuery);
    };

    return (
        <>
            <FormField autoMargin>
                <Search onChange={handleOnChange} enableSuggestions={false} />
            </FormField>
            <p>Search query: {query}</p>
        </>
    );
};

export const DisabledState = () => {
    const [query] = useState<string>('pizza');

    return (
        <>
            <FormField autoMargin>
                <Search
                    disabled
                    enableSuggestions={false}
                    defaultQuery={query}
                />
            </FormField>
            <p>Search query: {query}</p>
        </>
    );
};

export const ErrorState = () => {
    const [query] = useState<string>('pizza');

    return (
        <>
            <FormField autoMargin>
                <Search error enableSuggestions={false} defaultQuery={query} />
            </FormField>
            <p>Search query: {query}</p>
        </>
    );
};

export const NoResultsFound = () => {
    return <Search defaultQuery="Exotic food" options={[]} />;
};

export const NoResultsFoundCustomPlaceholder = () => (
    <Search
        defaultQuery="Exotic food"
        options={[]}
        noResultsLabel="Continue typing to search. Enter at least 3 characters to search"
    />
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

export const WithGroups = () => {
    return (
        <>
            <Search options={characters} groups={faction} defaultQuery="Jim" />
        </>
    );
};

// @ts-ignore
const formatCampaigns = (campaignsList, query) =>
    [...campaignsList]
        .sort(
            (a, b) =>
                Number(b.attributes.is_active) - Number(a.attributes.is_active),
        )
        .filter(campaign => {
            return campaign.attributes.name
                .toLowerCase()
                .includes(query.toLocaleLowerCase());
        });

export const WithDeatchedResults = () => {
    const [search, setSearch] = useState('');

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const query = e.target.value;
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
            {campaignsToRender.map(campaign => (
                <div key={campaign.attributes.name}>
                    {campaign.attributes.name}
                </div>
            ))}
        </>
    );
};

export const ResetSearchOnSelect = () => {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState({});
    const [acceptedOption, setAcceptedOption] = useState({});
    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const currentQuery = e.target.value;
            setQuery(currentQuery);
        },
        [],
    );

    const handleQueryChange = useCallback((currentQuery: SearchQueryType) => {
        // eslint-disable-next-line no-console
        console.log({ currentQuery });
    }, []);

    const handleOnSelect = (option: SuggestionObjectType) => {
        setQuery(option.label);
        setSelected(option);
    };
    const handleOptionAccept = () => {
        if (selected) {
            setAcceptedOption(selected);
            setQuery('');
        }
    };
    return (
        <>
            <Search
                placeholder="Search"
                noResultsLabel="No results found"
                suggestionListHeight={60}
                query={query}
                width="100%"
                onChange={handleSearchChange}
                onQueryChange={handleQueryChange}
                onItemSelect={handleOnSelect}
                options={query && query.length ? foodOptions : []}
                renderItemAdditionalInfo={(item: SuggestionObjectType) => (
                    <Typography>{item.value}</Typography>
                )}
            />
            <Button onClick={handleOptionAccept} marginTop={2}>
                Accept
            </Button>
            <Typography paragraph small>
                Accepted option: {JSON.stringify(acceptedOption)}
            </Typography>
        </>
    );
};

import React, { ChangeEvent, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';
import { InfoIcon } from '@deliveryhero/armor-icons';

import { Search } from '../Search';
import { SuggestionObjectType } from '../type';
import { FormField, FormFieldMessage } from '../../FormField';
import { TextInput } from '../../TextInput';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Search',
    component: Search,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

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

export const DefaultSearch = () => {
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
        const query = event?.target?.value || '';

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
        const query = event?.target?.value || '';

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
        const inputQuery = event?.target?.value || '';

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

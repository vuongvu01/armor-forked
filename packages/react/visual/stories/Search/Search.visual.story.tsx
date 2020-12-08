import React from 'react';

import { Search } from '../../../src/components/Search';
import { InfoIcon } from '@deliveryhero/armor-icons';

export default {
    title: 'Search',
    component: Search,
};

const foodOptions = [
    { value: 0, label: 'Biryani' },
    {
        value: 1,
        label:
            'This is a very long label that needs to be truncated with an ellipsis',
    },
    { value: 2, label: 'Pho' },
    { value: 3, label: 'Risotto' },
];

export const DefaultSearch = () => <Search />;

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

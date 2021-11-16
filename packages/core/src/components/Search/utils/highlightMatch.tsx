import React from 'react';

import { SearchQueryType } from '../type';

export const highlightMatch = (
    label: string,
    searchQuery?: SearchQueryType,
) => {
    if (!label || !searchQuery || typeof searchQuery !== 'string') {
        return '';
    }

    const index = label.toLowerCase().indexOf(searchQuery.toLowerCase());

    if (index !== -1) {
        const highlightPortion = label.substring(
            index,
            index + searchQuery.length,
        );

        let prefix = '';
        let suffix = '';

        if (index === 0) {
            suffix = label.substring(searchQuery.length);

            return (
                <>
                    <strong>{highlightPortion}</strong>
                    {suffix}
                </>
            );
        }
        prefix = label.substring(0, index);
        suffix = label.substring(index + searchQuery.length);

        return (
            <>
                {prefix}
                <strong>{highlightPortion}</strong>
                {suffix}
            </>
        );
    }

    return label;
};

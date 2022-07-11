/* eslint-disable no-console,import/no-unresolved */

import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SearchIcon } from '@deliveryhero/armor-icons';
import { spacing, ScalarType } from '@deliveryhero/armor-system';

import { Navigation } from '../Navigation';
import { TextInput } from '../../TextInput';
import { structure as demoStructure } from '../__test__/helpers';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Navigation',
    component: Navigation,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    const [structure, setStructure] = useState([
        {
            id: 'mammals',
            label: 'Mammals',
            expanded: true,
            selected: true,
            items: [
                {
                    id: 'cats',
                    label: 'Cats',
                    expanded: false,
                    items: [
                        {
                            id: 'tiger',
                            label: 'Tiger',
                        },
                        {
                            id: 'lion',
                            label: 'Lion',
                        },
                    ],
                },
                {
                    id: 'dogs',
                    label: 'Dogs',
                    expanded: false,
                    items: [
                        {
                            id: 'firefox',
                            label: 'Fire Fox',
                        },
                        {
                            id: 'wolf',
                            label: 'Wolf',
                        },
                    ],
                },
            ],
        },
    ]);

    const [structureB, setStructureB] = useState([
        {
            id: 'birds',
            label: 'Birds',
            expanded: false,
            items: [
                {
                    id: 'hawks',
                    label: 'Hawks',
                    expanded: false,
                    items: [
                        {
                            id: 'smallhawk',
                            label: 'Small Hawk',
                        },
                        {
                            id: 'hugehawk',
                            label: 'Huge Hawk',
                        },
                    ],
                },
                {
                    id: 'eagles',
                    label: 'Eagles',
                    expanded: false,
                    items: [
                        {
                            id: 'baldeagle',
                            label: 'Bald Eagle',
                        },
                        {
                            id: 'whiteeagle',
                            label: 'White Eagle',
                        },
                    ],
                },
            ],
        },
    ]);

    return (
        <>
            <Navigation
                items={structure}
                maxDepthLevel={4}
                width="400px"
                enableBottomSeparator
                onElementClick={(id, item) => {
                    // eslint-disable-next-line no-param-reassign
                    item.expanded = !item.expanded;

                    if (id === 'tiger' && !item.items) {
                        // eslint-disable-next-line no-param-reassign
                        item.items = [
                            { id: 'monkeys', label: 'Monkeys' },
                            { id: 'donkeys', label: 'Donkeys' },
                        ];
                    }

                    setStructure([...structure]);
                }}
            />
            <Navigation
                items={structureB}
                maxDepthLevel={4}
                width="400px"
                onElementClick={(id, item) => {
                    // eslint-disable-next-line no-param-reassign
                    item.expanded = !item.expanded;

                    if (id === 'tiger' && !item.items) {
                        // eslint-disable-next-line no-param-reassign
                        item.items = [
                            { id: 'monkeys', label: 'Monkeys' },
                            { id: 'donkeys', label: 'Donkeys' },
                        ];
                    }

                    setStructureB([...structureB]);
                }}
            />
        </>
    );
};

export const NoEffects = () => {
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

    return (
        <>
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
        </>
    );
};

const AraraSearchContainer = styled.div`
    padding: ${spacing(2, 5)};
`;

export const Arara = () => {
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
            beforeItems: (
                <AraraSearchContainer>
                    <TextInput
                        wide
                        placeholder="Search"
                        after={<SearchIcon small marginRight={4} />}
                    />
                </AraraSearchContainer>
            ),
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

    return (
        <>
            <Navigation
                items={structure}
                width="400px"
                onElementClick={(id, item) => {
                    // eslint-disable-next-line no-param-reassign
                    item.expanded = !item.expanded;

                    setStructure([...structure]);
                }}
            />
        </>
    );
};

export const SelectedExpandedItems = () => {
    const [selectedItemIds, setSelectedItemIds] = useState<ScalarType[]>([
        'bugs',
    ]);
    const [expandedItemIds, setExpandedItemIds] = useState<ScalarType[]>([
        'bugs',
    ]);

    return (
        <Navigation
            items={demoStructure}
            selectedElementIds={selectedItemIds}
            expandedElementIds={expandedItemIds}
            maxWidth="300px"
            onElementClick={(id) => {
                if (expandedItemIds.includes(id)) {
                    setExpandedItemIds(
                        expandedItemIds.filter((itemId) => itemId !== id),
                    );
                } else {
                    setExpandedItemIds([id, ...expandedItemIds]);
                }
                setSelectedItemIds([id]);
            }}
        />
    );
};

const BorderedNavigation = styled(Navigation)`
    border-left: 3px solid red;

    .MenuElement-Root {
        border-right: 3px solid red;
    }
`;

export const CustomNavigation = () => {
    const [selectedItemIds, setSelectedItemIds] = useState<ScalarType[]>([
        'bugs',
    ]);
    const [expandedItemIds, setExpandedItemIds] = useState<ScalarType[]>([
        'bugs',
    ]);

    return (
        <BorderedNavigation
            items={demoStructure}
            selectedElementIds={selectedItemIds}
            expandedElementIds={expandedItemIds}
            maxWidth="300px"
            onElementClick={(id: string | number) => {
                if (expandedItemIds.includes(id)) {
                    setExpandedItemIds(
                        expandedItemIds.filter((itemId) => itemId !== id),
                    );
                } else {
                    setExpandedItemIds([id, ...expandedItemIds]);
                }
                setSelectedItemIds([id]);
            }}
        />
    );
};

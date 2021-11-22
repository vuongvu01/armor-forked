import React from 'react';
import { Navigation } from '@deliveryhero/armor';

export default {
    title: 'Navigation',
    component: Navigation,
};

const structure = [
    {
        id: 'birds',
        label: 'Birds',
        expanded: true,
        selected: true,
        items: [
            {
                id: 'hawks',
                label: 'Hawks',
                expanded: true,
                selected: true,
                afterItems: <span>Hooray!</span>,
                items: [
                    {
                        id: 'smallhawk',
                        label: 'Small Hawk',
                    },
                    {
                        id: 'hugehawk',
                        label: 'Huge Hawk',
                        selected: true,
                    },
                ],
            },
            {
                id: 'eagles',
                label: 'Eagles',
                expanded: true,
                beforeItems: <span>Hooray!</span>,
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
];

export const NavigationAllExpanded = () => (
    <Navigation items={structure} enableBottomSeparator />
);

const structureCollapsed = [
    {
        id: 'birds',
        label: 'Birds',
        expanded: false,
        items: [
            {
                id: 'hawks',
                label: 'Hawks',
                expanded: false,
                afterItems: <span>Hooray!</span>,
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
                beforeItems: <span>Hooray!</span>,
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
];

export const NavigationAllCollapsed = () => (
    <Navigation items={structureCollapsed} enableBottomSeparator />
);

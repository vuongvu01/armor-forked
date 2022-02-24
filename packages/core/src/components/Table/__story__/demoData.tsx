import React, { ReactNode } from 'react';

type StringOrNode = string | ReactNode;

const makeRow = (
    key: string,
    company: string,
    scheme: string,
    city: string,
    fullName: string,
    id: string,
    phoneNumber: StringOrNode,
) => ({
    key,
    company,
    scheme,
    city,
    fullName,
    id,
    phoneNumber,
});

export const demoData = [
    makeRow(
        'a',
        'Kitchen Garden POS',
        'Scheme B',
        'Kano',
        'Slavcho Karbashewski',
        '42',
        '695-615-8635',
    ),
    makeRow(
        'b',
        'KFC HK',
        'Scheme F',
        'Gothenburg',
        'Emlen Beaver',
        '46',
        <span>
            998-703-1496
            <br />
            998-703-1496
            <br />
            998-703-1496
            <br />
            998-703-1496
            <br />
            998-703-1496
        </span>,
    ),
    makeRow(
        'c',
        'Foodstory',
        'Scheme E',
        'Xian',
        'Akumjeli Akuchi',
        '26',
        '150-204-0817',
    ),
];

export const getLargeDemoData = (blockCount = 1) => {
    let data: typeof demoData = [];
    for (let i = 0; i < blockCount; i += 1) {
        data = [
            ...data,
            ...demoData.map((item) => ({
                ...item,
                key: `${item.key}_${i}`,
            })),
        ];
    }

    return { data, keys: data.map((item) => item.key) };
};

// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';
import {
    FilterConditionSchemaType,
    FilterConditionValueType,
    FilterDateConditionType,
    FilterEnumConditionType,
} from '../../../src';

export const filterSchema: FilterConditionSchemaType = {
    conditions: [
        {
            id: 'name',
            label: 'Name',
        },
        {
            id: 'email',
            label: 'Email',
        },
        {
            id: 'phoneNumber',
            label: 'Phone number',
        },
        {
            id: 'status',
            label: 'Status',
            typeId: 'statusEnum',
        },
        {
            id: 'landedAt',
            label: 'Landed at',
            typeId: 'landedAtDate',
        },
        {
            id: 'labels',
            label: 'Labels',
            typeId: 'labelEnum',
            multiple: true,
        },
    ],
};

const date = new Date(2021, 2, 21, 10, 20, 30, 100);

export const filterValue: FilterConditionValueType = {
    conditions: [
        {
            id: 'name',
            name: 'name',
            value: 'Joe',
        },
        {
            id: 'email',
            name: 'email',
            value: 'joe@black.org',
        },
        {
            id: 'phoneNumber',
            name: 'phoneNumber',
            value: '+3546098548375349',
        },
        {
            id: 'status',
            name: 'status',
            value: 'doc_processing',
        },
        {
            id: 'landedAt',
            name: 'landedAt',
            value: date,
        },
        {
            id: 'labels',
            name: 'labels',
            value: ['label1', 'label2', 'label3'],
        },
    ],
};

export const conditionTypes = [
    FilterEnumConditionType.create('labelEnum', {
        options: [
            { label: 'Label 1', value: 'label1' },
            { label: 'Label 2', value: 'label2' },
            { label: 'Label 3', value: 'label3' },
        ],
    }),
    FilterEnumConditionType.create('statusEnum', {
        options: [
            { label: 'Document Collection', value: 'doc_collection' },
            { label: 'Document Processing', value: 'doc_processing' },
            { label: 'Document Rejection', value: 'doc_rejection' },
        ],
    }),
    FilterDateConditionType.create('landedAtDate', {
        formatDateTime: (value: unknown) =>
            format(
                value instanceof Date ? value : new Date(value as string),
                'hh:mm dd.MM.yyyy',
            ),
        enableTimePicker: true,
    }),
];

// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';
import {
    FilterConditionSchemaType,
    FilterConditionValueType,
} from '../../../src';

export const filterSchema: FilterConditionSchemaType = {
    conditions: [
        {
            fieldName: 'name',
            label: 'Name',
        },
        {
            fieldName: 'email',
            label: 'Email',
        },
        {
            fieldName: 'phoneNumber',
            label: 'Phone number',
        },
        {
            fieldName: 'status',
            label: 'Status',
            type: 'enum',
            attributes: {
                options: [
                    { label: 'Document Collection', value: 'doc_collection' },
                    { label: 'Document Processing', value: 'doc_processing' },
                    { label: 'Document Rejection', value: 'doc_rejection' },
                ],
            },
        },
        {
            fieldName: 'landedAt',
            label: 'Landed at',
            type: 'date',
            attributes: {
                formatDateTime: (value: Date) =>
                    format(value, 'hh:mm dd.MM.yyyyy'),
                enableTimePicker: true,
            },
        },
        {
            fieldName: 'labels',
            label: 'Labels',
            type: 'enum',
            multiple: true,
            attributes: {
                options: [
                    { label: 'Label 1', value: 'label1' },
                    { label: 'Label 2', value: 'label2' },
                    { label: 'Label 3', value: 'label3' },
                ],
            },
        },
    ],
};

const date = new Date(2021, 2, 21, 10, 20, 30, 100);

export const filterValue: FilterConditionValueType = {
    conditions: [
        {
            fieldName: 'name',
            value: 'Joe',
        },
        {
            fieldName: 'email',
            value: 'joe@black.org',
        },
        {
            fieldName: 'phoneNumber',
            value: '+3546098548375349',
        },
        {
            fieldName: 'status',
            value: 'doc_processing',
        },
        {
            fieldName: 'landedAt',
            value: date,
        },
        {
            fieldName: 'labels',
            value: ['label1', 'label2', 'label3'],
        },
    ],
};

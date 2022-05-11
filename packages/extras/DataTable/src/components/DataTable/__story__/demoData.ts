import { DataTableColumnType } from '../type';

export const columns: DataTableColumnType[] = [
    {
        title: 'Name',
        id: 'name',
    },
    {
        title: 'Age',
        id: 'age',
        sortable: true,
        formatDataCellContent: (value: string) => `${value} years`,
    },
    {
        title: 'Address',
        sortable: true,
        id: 'address',
    },
];

export const dataSource = [
    {
        id: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        id: '3',
        name: 'Jill',
        age: 19,
        address: 'Raccoon City',
    },
    {
        id: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

export const longDataSource = [
    ...dataSource,
    {
        id: '4',
        name: 'Alejandro',
        age: 30,
        address: '100 Down St',
    },
    {
        id: '5',
        name: 'Karolina',
        age: 22,
        address: '111 Down St',
    },
    {
        id: '6',
        name: 'Violeta',
        age: 19,
        address: '123 Down St',
    },
    {
        id: '7',
        name: 'Sandra',
        age: 55,
        address: '223 Down St',
    },
    {
        id: '8',
        name: 'Elia',
        age: 86,
        address: '423 Down St',
    },
    {
        id: '9',
        name: 'Ramon',
        age: 59,
        address: '923 Down St',
    },
];

export const dataSourceWithNumberIds = longDataSource.map(
    ({ id, ...rest }) => ({ ...rest, id: Number(id) }),
);

export const columnsWide = [
    {
        title: 'Name',
        id: 'name',
    },
    {
        title: 'Age',
        id: 'age',
        sortable: true,
        formatDataCellContent: (value: string) => `${value} years`,
    },
    {
        title: 'Address',
        id: 'address',
    },
    {
        title: 'Name1',
        id: 'name1',
    },
    {
        title: 'Age1',
        id: 'age1',
        sortable: true,
        formatDataCellContent: (value: string) => `${value} years`,
    },
    {
        title: 'Address1',
        id: 'address1',
    },
    {
        title: 'Name2',
        id: 'name2',
    },
    {
        title: 'Age2',
        id: 'age2',
        sortable: true,
        formatDataCellContent: (value: string) => `${value} years`,
    },
    {
        title: 'Address2',
        id: 'address2',
    },
    {
        title: 'Name3',
        id: 'name3',
    },
    {
        title: 'Age3',
        id: 'age3',
        sortable: true,
        formatDataCellContent: (value: string) => `${value} years`,
    },
    {
        title: 'Address3',
        id: 'address3',
    },
];

export const dataSourceWide = [
    {
        id: '1',
        name: 'Mike',
        name1: 'Mike',
        name2: 'Mike',
        name3: 'Mike',
        age: 32,
        age1: 32,
        age2: 32,
        age3: 32,
        address: '10 Downing Street',
        address1: '10 Downing Street',
        address2: '10 Downing Street',
        address3: '10 Downing Street',
    },
    {
        id: '3',
        name: 'Jill',
        name1: 'Jill',
        name2: 'Jill',
        age: 19,
        age1: 19,
        age2: 19,
        address: 'Raccoon City',
        address1: 'Raccoon City',
        address2: 'Raccoon City',
    },
    {
        id: '2',
        name: 'John',
        name1: 'John',
        name2: 'John',
        age: 42,
        age1: 42,
        age2: 42,
        address: '10 Downing Street',
        address1: '10 Downing Street',
        address2: '10 Downing Street',
    },
];

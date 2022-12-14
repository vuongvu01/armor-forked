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

export const columnsWideWithWidth = [
    {
        title: 'Name',
        id: 'name',
        width: '200px',
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
        width: '200px',
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

export const dataSourceWideWithLongName = [
    {
        id: '1',
        name: 'Mike Johnson Michael Miller Johnson',
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

export const columnsWithUrl = [
    {
        title: 'Order Code',
        id: 'platformReferenceId',
    },
    {
        title: 'Payment Method',
        id: 'paymentInfo',
        key: 'paymentMethod',
        formatDataCellContent: (paymentInfo: any) => paymentInfo.paymentMethod,
    },
    {
        title: 'Payment Method',
        id: 'paymentInfo',
        key: 'paymentContext',
        formatDataCellContent: (paymentInfo: any) => paymentInfo.paymentContext,
    },
];

export const dataSourceWithUrl = [
    {
        id: '1',
        platformReferenceId: 'Mike',
        paymentInfo: {
            paymentMethod: 31,
            paymentContext: 32,
        },
        onClick: () => window.open('https://www.google.com/'),
    },
    {
        id: '3',
        platformReferenceId: 'Jill',
        paymentInfo: {
            paymentMethod: 22,
            paymentContext: 33,
        },
        onClick: () => window.open('https://www.google.com/'),
    },
    {
        id: '2',
        platformReferenceId: 'John',
        paymentInfo: {
            paymentMethod: 55,
            paymentContext: 66,
        },
        onClick: () => window.open('https://www.google.com/'),
    },
];
